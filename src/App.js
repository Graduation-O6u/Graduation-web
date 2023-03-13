import React from "react";
import Login from "./screens/Authentication/login/login.screen";
import Signup from "./screens/Authentication/signup/signup.screen";
import Welcome from "./screens/Authentication/welcome/welcome";
import Verify from "./screens/Authentication/signup/components/verification/verify";
import Forget from "./screens/Authentication/forgetPassword/forget";
import Changepass from "./screens/Authentication/login/components/changepass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        <Route path="/forget" element={<Forget />}></Route>
        <Route path="/auth/reset-password/:id" element={<Changepass />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
