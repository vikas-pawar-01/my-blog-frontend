import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";
import About from "./About";
import Menu from "./Menu";
import Error from "./Error";
import Login from "./Login";

const MenuRoutes = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/features" element={<Features />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MenuRoutes;