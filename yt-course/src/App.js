import './App.css';

function App() {
  return (
    <div className="App">
      <User name="John" age={21} email="john@gmail.com" />
      <Job salary={90000} position="Junior Front-End" complany="Amazon" />
      <Hobby hobby="Fishing" />

      <User name="Shiro" age={22} email="shiro@gmail.com" />
      <Job salary={120000} position="Senior Full Stack" complany="Google" />
      <Hobby hobby="Video Games" />

      <User name="Peter" age={29} email="peter@gmail.com" />
      <Job salary={160000} position="Project Manager" complany="<Microsoft>" />
      <Hobby hobby="Swimming" />
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

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.complany}</h1>
    </div>
  )
}

const Hobby = (props) => {
  return (
    <div>
      <h2>{props.hobby}</h2>
    </div>
  )
}


export default App;
