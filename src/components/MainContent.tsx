interface TutorialContentProps {
  title?: string;
  content: string;
}

export const TutorialContent = ({ title, content }: TutorialContentProps) => {
  return (
    <div className="main-content h-100 d-flex flex-column">
      {title && <h3 className="main-content-title fw-bold mb-4">{title}</h3>}
      <p className="main-content-text fs-5 lh-base mb-0">{content}</p>
    </div>
  );
};
