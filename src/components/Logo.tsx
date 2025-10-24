interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}

export const Logo = ({ src, alt, className = '' }: LogoProps) => {
  return (
    <div className={`d-flex align-items-center justify-content-center h-100 ${className}`}>
      <img src={src} alt={alt} className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};
