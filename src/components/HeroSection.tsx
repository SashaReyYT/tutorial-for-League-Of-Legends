import { Logo } from './Logo';
import { HeroContent } from './HeroContent';

interface HeroSectionProps {
  logoSrc: string;
  logoAlt: string;
  appName: string;
  description: string;
}

export const HeroSection = ({
  logoSrc,
  logoAlt,
  appName,
  description
}: HeroSectionProps) => {
  return (
    <section className="section-image">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-center">
          {/* Logo Column */}
          <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
            <Logo src={logoSrc} alt={logoAlt} />
          </div>

          {/* Content Column */}
          <div className="col-12 col-md-7 d-flex align-items-center justify-content-center">
            <HeroContent name={appName} description={description} />
          </div>
        </div>
      </div>
    </section>
  );
};
