import logo from './logo.svg';
import './App.scss';
import LearnComponent from './Ex-Compo/LearnComponent.js';
import ListTodo from './Todos/ListTodo.js';
import Nav from './Navigation/Nav';
import Home from './Ex-Compo/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

//1:toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//react-router-dom
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
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/Todo">
              <ListTodo />
            </Route>
            <Route path="/inputData">
              <LearnComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              {/* :id: laf tham so ta quy dinh khi xuat no se hien la id, co the thay doi, ex: maybe changle = name! */}
              <DetailUser />
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
