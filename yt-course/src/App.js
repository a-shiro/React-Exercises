import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Shira" age={21} email="shira@gmail.com" />
      <User name="Shiro" age={22} email="shiro@gmail.com" />
      <User name="Peter" age={29} email="peter@gmail.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
}


export default App;
