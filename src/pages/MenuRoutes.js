import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";

import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const Home = lazy(() => import("./Home"));
const Features = lazy(() => import("./Features"));
const Contact = lazy(() => import("./Contact"));
const About = lazy(() => import("./About"));
const Error = lazy(() => import("./Error"));
const Login = lazy(() => import("./Login"));

const MenuRoutes = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Menu />
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/features" element={<Features />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="*" element={<Error />}></Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>

    );
}

export default MenuRoutes;