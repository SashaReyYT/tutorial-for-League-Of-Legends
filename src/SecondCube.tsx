import React, { useState } from "react";
import "./SecondCube.css";

type Chapter = { id: string; title: string; content: string };
type Category = { id: string; title: string; content: string; img?: string };

const CHAPTERS: Chapter[] = [
  { id: "ch1", title: "Chapter_1", content: "Тут контент для розділу 1." },
  { id: "ch2", title: "Chapter_2", content: "Тут контент для розділу 2." },
  { id: "ch3", title: "Chapter_3", content: "Тут контент для розділу 3." },
  { id: "ch4", title: "Chapter_4", content: "Тут контент для розділу 4." },
];

const CATEGORIES: Category[] = [
  { id: "cat1", title: "Category_1", content: "Тут контент для категорії 1.", img: "https://i.imgur.com/5g5vZVq.jpeg" },
  { id: "cat2", title: "Category_2", content: "Тут контент для категорії 2.", img: "https://i.imgur.com/PGQ3tFb.jpeg" },
  { id: "cat3", title: "Category_3", content: "Тут контент для категорії 3.", img: "https://i.imgur.com/1NYqVq2.jpeg" },
];

const SecondCube: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(CATEGORIES[0].id);
  const [activeChapterId, setActiveChapterId] = useState<string>(CHAPTERS[0].id);

  const activeCategory = CATEGORIES.find((c) => c.id === activeCategoryId) ?? CATEGORIES[0];
  const activeChapter = CHAPTERS.find((c) => c.id === activeChapterId) ?? CHAPTERS[0];

  return (
    <section className="second-cube">
      {/* верхня панель категорій */}
      <div className="top-categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`cat ${cat.id === activeCategoryId ? "active" : ""}`}
            onClick={() => setActiveCategoryId(cat.id)}
            type="button"
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* основний вміст — sidebar | main | illustration */}
      <div className="content-wrapper">
        <aside className="sidebar">
          <ul>
            {CHAPTERS.map((ch) => (
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
              <div className="text-body">
                <p>{activeChapter.content}</p>
                <p>{activeCategory.content}</p>
              </div>
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