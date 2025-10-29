import { useState } from 'react';
import { CategoryNav } from './CategoryNav';
import { ChapterSidebar } from './ChapterSidebar';
import { TutorialContent } from './MainContent';
import { Illustration } from './Illustration';
import type { Category, Chapter, Content } from './types';
import './TutorialSection.css';

export type { TutorialContent };

interface TutorialSectionProps {
  sectionTitle: string;
  categories: Category[];
  chapters: Chapter[];
  tutorialContent: Content[];
  defaultCategory?: string;
  defaultChapter?: string;
}

export const TutorialBlock = ({
  sectionTitle,
  categories,
  chapters,
  tutorialContent,
  defaultCategory,
  defaultChapter,
}: TutorialSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(
    defaultCategory || categories[0]?.id || ''
  );
  const [activeChapter, setActiveChapter] = useState(
    defaultChapter || chapters[0]?.id || ''
  );

  const currentContent = tutorialContent.find(
    (content) =>
      content.categoryId === activeCategory && content.chapterId === activeChapter
  );

  return (
    <section className="section-dark d-flex flex-column">
      {/* Section Title */}
      <div className="container text-center mt-5 mb-4">
        <h2 className="display-4 fw-bold tutorial-title">{sectionTitle}</h2>
      </div>

      {/* Category Navigation */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Main Layout Container */}
      <div className="container-fluid px-4 py-5 flex-grow-1">
        <div className="d-flex gap-4 h-100" style={{ minHeight: '500px' }}>
          {/* Chapter Sidebar */}
          <ChapterSidebar
            chapters={chapters}
            activeChapter={activeChapter}
            onChapterChange={setActiveChapter}
          />

          {/* Main Content and Illustration Wrapper */}
          <div className="content-wrapper flex-grow-1 d-flex gap-4 p-4">
            {/* Main Content Area */}
            <div className="flex-grow-1">
              <TutorialContent
                title={currentContent?.title || ''}
                content={
                  currentContent?.content ||
                  'Виберіть категорію та розділ для перегляду контенту.'
                }
              />
            </div>

            {/* Illustration */}
            <Illustration
              src={currentContent?.image}
              alt={currentContent?.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
