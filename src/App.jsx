import { useState } from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import HomePage from "../pages/homePage";
import Register from "../pages/register";
import "./assets/stylesheet/public.css";
import "aos/dist/aos.css";
import Aos from "aos";
function App() {
  const [count, setCount] = useState(0);
  Aos.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand/*" element={<HomePage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
