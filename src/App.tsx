import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { HeroSection } from './components/HeroSection';
import SecondCube from './SecondCube'; 

function App() {
  return (
    <>
      <HeroSection
        logoSrc="/lol-logo.png"
        logoAlt="League of Legends Logo"
        appName="Ласкаво просимо у світ Ліги Легенд!"
        description="Навчися грати, відкрий своїх улюблених чемпіонів і стань частиною епічних битв. 
        Гортай нижче для обрання тих тем, які тобі найбільш цікаві!"
      />

      

{/**ДРУГИЙ КУБІК */}
      <SecondCube />

    </>






  );
}

export default App;

