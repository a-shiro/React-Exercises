import { User } from './components/User';
import { Job } from './components/Job';

import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Shiro" age={21} email="shiro@gmail.com" />

      <Job salary={90000} position="Junior Front-End" company="Google" />
    </div>
  );
}

export default App;
