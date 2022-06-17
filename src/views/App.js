import logo from './logo.svg';
import './App.scss';
//import LearnComponent from './Ex-Compo/LearnComponent.js';
import ListTodo from './Todos/ListTodo.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Todo's App</h2>
        {/* <LearnComponent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
