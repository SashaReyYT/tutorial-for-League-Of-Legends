interface HeroContentProps {
  name: string;
  description: string;
  nameClassName?: string;
  descriptionClassName?: string;
}

export const HeroContent = ({
  name,
  description,
  nameClassName = '',
  descriptionClassName = ''
}: HeroContentProps) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4">
      <h1 className={`display-3 fw-bold mb-5 ${nameClassName}`} style={{ color: '#ffd500' }}>
        {name}
      </h1>
      <p className={`lead fs-4 text-center text-white ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
};
