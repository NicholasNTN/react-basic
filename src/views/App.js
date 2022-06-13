import logo from './logo.svg';
import './App.scss';
import LearnComponent from './Ex-Compo/LearnComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Totoo's App</h2>
        <LearnComponent />
      </header>
    </div>
  );
}

export default App;
