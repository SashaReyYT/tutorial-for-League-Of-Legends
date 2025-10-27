// ...existing code...
import React, { useState } from "react";
import "./SecondCube.css";

type Chapter = { id: string; title: string; content: React.ReactNode };
type Category = { id: string; title: string; img?: string; chapters: Chapter[] };

const CATEGORIES: Category[] = [
  {
    id: "cat1",
    title: "Основи гри",
    img: "https://i.imgur.com/5g5vZVq.jpeg",
    chapters: [
      {
        id: "cat1-ch1",
        title: "Вступ у League of Legends",
        content: (
          <>
            <p>
              League of Legends — це командна стратегічна гра 5 на 5, де дві команди змагаються, щоб
              знищити головну споруду ворога — <strong className="accent">Нексус</strong>. Гравці
              керують чемпіонами з унікальними здібностями, виборюючи контроль над картою та виконуючи
              тактичні маневри.
            </p>

            <p>
              Твоя мета — зрозуміти основи матчу: як фармити золото, як контролювати лінії, коли
              брати об’єкти (дракон, Барон) та як координуватися з командою. Починай з одного
              чемпіона і працюй над механікою.
            </p>

            <p>
              Порада: звертай увагу на <span className="highlight">мінімап</span> і візію — це дозволить
              приймати кращі рішення та уникати ганків. Кожна гра — це урок, і з кожним матчем ти
              стаєш кращим.
            </p>

            <p className="quote">«Усі легенди починаються з першого кроку на полі битви.»</p>
          </>
        ),
      },
      {
        id: "cat1-ch2",
        title: "Інтерфейс гри та управління",
        content: (
          <>
            <p>
              Інтерфейс включає міні-карту, панель здібностей, інвентар та індикатори стану. Навчися
              миттєво знаходити потрібну інформацію — це дуже допоможе в прийнятті рішень.
            </p>
          </>
        ),
      },
      {
        id: "cat1-ch3",
        title: "Основні механіки",
        content: (
          <>
            <p>
              Фарм, позиціонування, контроль хвилі міньйонів — базові механіки, які визначають
              твою ефективність у матчі. Практикуйся поступово та відстежуй свій прогрес.
            </p>
          </>
        ),
      },
      {
        id: "cat1-ch4",
        title: "Перша гра та аналіз",
        content: (
          <>
            <p>
              Після гри дивись повтори, аналізуй помилки і підкреслюй удари, які привели до успіху.
              Так ти швидше зростатимеш як гравець.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "cat2",
    title: "Чемпіони",
    img: "https://i.imgur.com/PGQ3tFb.jpeg",
    chapters: [
      { id: "cat2-ch1", title: "Ролі та позиції", content: "Контент категорії 2 — розділ 1." },
      { id: "cat2-ch2", title: "Класи чемпіонів", content: "Контент категорії 2 — розділ 2." },
      { id: "cat2-ch3", title: "Як тренуватись на чемпіонах", content: "Контент категорії 2 — розділ 3." },
      { id: "cat2-ch4", title: "Контрпіки та синергія", content: "Контент категорії 2 — розділ 4." },
    ],
  },
  {
    id: "cat3",
    title: "Стратегія та тактика",
    img: "https://i.imgur.com/1NYqVq2.jpeg",
    chapters: [
      { id: "cat3-ch1", title: "Командна гра", content: "Контент категорії 3 — розділ 1." },
      { id: "cat3-ch2", title: "Об’єкти карти", content: "Контент категорії 3 — розділ 2." },
      { id: "cat3-ch3", title: "Макро та мікро", content: "Контент категорії 3 — розділ 3." },
      { id: "cat3-ch4", title: "Психологія гри", content: "Контент категорії 3 — розділ 4." },
    ],
  },
];

const SecondCube: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(CATEGORIES[0].id);
  const [activeChapterId, setActiveChapterId] = useState<string>(CATEGORIES[0].chapters[0].id);

  const activeCategory = CATEGORIES.find((c) => c.id === activeCategoryId) ?? CATEGORIES[0];
  const activeChapter =
    activeCategory.chapters.find((ch) => ch.id === activeChapterId) ?? activeCategory.chapters[0];

  function handleCategoryChange(catId: string) {
    if (catId === activeCategoryId) return;
    const cat = CATEGORIES.find((c) => c.id === catId)!;
    setActiveCategoryId(catId);
    setActiveChapterId(cat.chapters[0].id);
  }

  return (
    <section className="second-cube">
      <div className="top-categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`cat ${cat.id === activeCategoryId ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat.id)}
            type="button"
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="content-wrapper">
        <aside className="sidebar">
          <ul>
            {activeCategory.chapters.map((ch) => (
              <li
                key={ch.id}
                className={`chapter-item ${ch.id === activeChapterId ? "chapter-selected" : ""}`}
              >
                <button
                  type="button"
                  className="chapter-btn"
                  onClick={() => setActiveChapterId(ch.id)}
                >
                  {ch.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="main">
          <div className="main-inner">
            <div className="text-block">
              <h3 className="text-title">{activeChapter.title}</h3>
              <div className="text-body">{activeChapter.content}</div>
            </div>
          </div>
        </main>

        <aside className="illustration">
          <div className="illustration-inner">
            {activeCategory.img ? (
              <img
                src={activeCategory.img}
                alt={activeCategory.title}
                style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: 8 }}
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
              />
            ) : (
              "Illustration"
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SecondCube;