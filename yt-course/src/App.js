import { User } from './components/User';
import { Job } from './components/Job';
import { AgeRestricted } from './components/AgeRestricted';

import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <h1 className="exercise-title">Exercise 1</h1>
        <div>
          <User name="Shiro" age={21} email="shiro@gmail.com" />
          <Job salary={90000} position="Junior Front-End" company="Google" />
        </div>
      </section>

      <section>
        <h1 className="exercise-title">Exercise 2</h1>
        <div>
          <AgeRestricted />
        </div>
      </section>
    </div>
  );
}

export default App;
