import React from "react";
import Login from "./screens/Authentication/login/login.screen";
import Signup from "./screens/Authentication/signup/signup.screen";
import Welcome from "./screens/Authentication/welcome/welcome";
import Verify from "./screens/Authentication/accountVerification/verify";
import Forget from "./screens/Authentication/forgetPassword/forget";
import Changepass from "./screens/Authentication/login/components/changepass";
import HomePage from "./screens/Authentication/homePage/mainhome";
import Feature from "./screens/Authentication/homePage/components/Feature/feature";
import Recomand from "./screens/Authentication/homePage/components/Recommened/recommend";
import Saved from "./screens/Authentication/homePage/components/Saved/saved";
import HomeCompany from "./screens/homeCompany/mainCompany";
import Company from "./screens/company/companyProfile/company";
import CompanySignup from "./screens/company/comapnySignup/signupcompany";
import User from "./screens/profile user/user";
import Apply from "./screens/Apply job/apply";
import Notifaction from "./screens/Notifications/notifications";
import Meeting from "./screens/meeting/meeting";
import Error from "./screens/Error/error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/home";
import Meetings from "./screens/Apply job/meetings/meetings";
import Admin from "./screens/admin/admin";
import Learn from "./screens/learnmore/learn.screen.";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/auth/verify-email/:id" element={<Verify />}></Route>
        <Route path="/forget" element={<Forget />}></Route>
        <Route path="/auth/reset-password/:id" element={<Changepass />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/jobs" element={<Feature />}></Route>

        <Route path="/homecompany" element={<HomeCompany />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/signupCompany" element={<CompanySignup />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
        <Route path="/user" element={<User />}></Route>

        <Route path="/notifications" element={<Notifaction />}></Route>
        <Route path="/meeting" element={<Meeting />}></Route>
        <Route path="/apply/:id" element={<Apply />}></Route>
        <Route path="/error404" element={<Error />}></Route>
        <Route path="/meetings" element={<Meetings />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
