import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/profile" element = {<Profile />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/sign-in" element = {<Signin />}></Route>
        <Route path="/sign-up" element = {<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
