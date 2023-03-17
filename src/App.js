import React from "react";
import Login from "./screens/Authentication/login/login.screen";
import Signup from "./screens/Authentication/signup/signup.screen";
import Welcome from "./screens/Authentication/welcome/welcome";
import Verify from "./screens/Authentication/accountVerification/verify";
import Forget from "./screens/Authentication/forgetPassword/forget";
import Changepass from "./screens/Authentication/login/components/changepass";
import HomePage from "./screens/Authentication/homePage/mainhome"
import Feature from "./screens/Authentication/homePage/components/Feature/feature"
import Recomand from "./screens/Authentication/homePage/components/Recommened/recommend" ;
import Saved from "./screens/Authentication/homePage/components/Saved/saved";
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
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/featured" element={<Feature />}></Route>
        <Route path="/recomend" element={<Recomand />}></Route>
        <Route path="/saved" element={<Saved/>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
