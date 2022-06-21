import logo from './logo.svg';
import './App.scss';
import LearnComponent from './Ex-Compo/LearnComponent.js';
import ListTodo from './Todos/ListTodo.js';
import Nav from './Navigation/Nav';
import Home from './Ex-Compo/Home';

//1:toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Switch,
  Route,
  //Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo's App</h2>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Todo's">
              <ListTodo />
            </Route>
            <Route path="/inputData">
              <LearnComponent />
            </Route>
          </Switch>

        </header>

        {/* 2.Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />

      </div>
    </BrowserRouter>
  );
}

export default App;
