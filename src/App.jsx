import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forgotpass from "./components/Forgotpass";
import Resetpass from "./components/Resetpass";
import Emailverify from "./components/Emailverify";
import Sign1 from "./components/Sign1";
import Sign2 from "./components/Sign2";
import Sign3 from "./components/Sign3";
import Sign4 from "./components/Sign4";
import Sign5 from "./components/Sign5";
import Register from "./components/Register";
import Sign6 from "./components/Sign6";
import Popup from "./components/Popup";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" exact element={<Login />}></Route>
        <Route path="Signup" element={<Signup />}></Route>
        <Route path="forgot" element={<Forgotpass />}></Route>
        <Route path="reset" element={<Resetpass />}></Route>
        <Route path="otp" element={<Emailverify />}></Route>
        <Route path="sign1" element={<Sign1 />}></Route>
        <Route path="sign2" element={<Sign2 />}></Route>
        <Route path="sign3" element={<Sign3 />}></Route>
        <Route path="sign4" element={<Sign4 />}></Route>
        <Route path="sign5" element={<Sign5 />}></Route>
        <Route path="/" element={<Register />}></Route>
        <Route path="sign6" element={<Sign6 />}></Route>
        <Route path="pop" element={<Popup />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
