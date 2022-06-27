import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import Home from './Example/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from "./Users/ListUser";
import DetailUser from './Users/DetailUser';
import Nav from './Nav/Nav';
import {BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <header className="App-header">

          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/users" exact element={<ListUser />} />
            <Route path="/user/:id" exact element={<DetailUser />} />
          </Routes>
        </header>

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
      </div>
    </BrowserRouter>

  );
}

export default App;
