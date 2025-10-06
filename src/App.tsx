import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';


function App() {
  return (
    <>
{/**ПЕРШИЙ КУБІК */}
      <section className="section-image d-flex flex-column justify-content-between">
        <div className="container text-center mt-5">
          <h2 className="display-1 text-warning fw-bold">
            Ласкаво просимо у світ League of Legends!
          </h2>
        </div>

        <div className="container text-center mb-5">
          <h2 className="display-4 text-light fw-semibold">
            Навчися грати, відкрий своїх улюблених чемпіонів і стань частиною епічних битв.
          </h2>
        </div>
      </section>

{/**ДРУГИЙ КУБІК */}
      <section className="section-dark d-flex flex-column justify-content-between">
        <div className="container text-center mt-5">
          <h2 className="display-4 text-warning fw-bold">
            ЩО ТАКЕ LEAGUE OF LEGENDS?
          </h2>
        </div>

        <div className="d-flex justify-content-center align-items-center " style={{ height: '1000px' }}>
          <h2 className="display-6 text-light fw-semibold">
            League of Legends – це стратегічна кооперативна гра, в якій дві команди з п'яти могутніх чемпіонів борються одна з одною, намагаючись знищити ворожу базу. 
            Вибирайте персонажа з більш ніж 140 чемпіонів, створюйте епічні моменти, заробляйте вбивства та зносіть вежі на шляху до перемоги.
          </h2>
        </div>
      </section>
    </>
  );
}

export default App;

