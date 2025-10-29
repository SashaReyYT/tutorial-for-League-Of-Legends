interface IllustrationProps {
  src?: string;
  alt?: string;
}

export const Illustration = ({ src, alt = 'Illustration' }: IllustrationProps) => {
  return (
    <div className="illustration-container d-flex align-items-center justify-content-center overflow-hidden">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="img-fluid"
          style={{ maxHeight: '100%', objectFit: 'contain' }}
        />
      ) : (
        <div className="illustration-placeholder text-center p-4">
          <h4 className="fw-light">Illustration</h4>
        </div>
      )}
    </div>
  );
};
