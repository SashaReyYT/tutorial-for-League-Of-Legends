import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { LandingMainBlock } from './components/HeroSection';
import { TutorialBlock } from './components/TutorialSection';
import { categories, chapters, tutorialContent } from './data/tutorialData';

function App() {

  return (
    <>
      <LandingMainBlock
        logoSrc="/lol-logo.png"
        logoAlt="League of Legends Logo"
        appName="Ласкаво просимо у світ Ліги Легенд!"
        description="Навчися грати, відкрий своїх улюблених чемпіонів і стань частиною епічних битв.
        Гортай нижче для обрання тих тем, які тобі найбільш цікаві!"
      />

      <TutorialBlock
        sectionTitle="Посібник по грі LEAGUE OF LEGENDS!"
        categories={categories}
        chapters={chapters}
        tutorialContent={tutorialContent}
        defaultCategory="basics"
        defaultChapter="intro"
      />
    </>
  );
}

export default App;

