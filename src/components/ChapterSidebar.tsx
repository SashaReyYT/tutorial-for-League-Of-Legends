import type { Chapter } from './types';

interface ChapterSidebarProps {
  chapters: Chapter[];
  activeChapter: string;
  onChapterChange: (chapterId: string) => void;
}

export const ChapterSidebar = ({ chapters, activeChapter, onChapterChange }: ChapterSidebarProps) => {
  return (
    <aside className="chapter-sidebar rounded p-3">
      <nav className="d-flex flex-column gap-2">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            className={`btn text-start chapter-btn ${
              activeChapter === chapter.id ? 'chapter-btn-active' : 'chapter-btn-inactive'
            }`}
            onClick={() => onChapterChange(chapter.id)}
          >
            {chapter.title}
          </button>
        ))}
      </nav>
    </aside>
  );
};
