import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";

import React, { lazy, Suspense } from "react";
import ErrorBoundary from "../hooks/ErrorBoundary";
import LoadingSpinner from "./UIElement/LoadingSpinner";

const Home = lazy(() => import("../pages/Home"));
const Features = lazy(() => import("../pages/Features"));
// const React18 = lazy(() => import("../pages/React18"));
const Storage = lazy(() => import("../pages/Storage"));
const Contact = lazy(() => import("../pages/Contact"));
const About = lazy(() => import("../pages/About"));
const Error = lazy(() => import("../pages/Error"));
const Login = lazy(() => import("../pages/Login"));
const Registration = lazy(() => import("../pages/Registration"));

const MenuRoutes = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Menu />
                <Suspense fallback={<div className="spinCenter"><LoadingSpinner /></div>}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/features" element={<Features />}></Route>
                        {/* <Route path="/react18" element={<React18 />}></Route> */}
                        <Route path="/storage" element={<Storage />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/registration" element={<Registration />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="*" element={<Error />}></Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>

    );
}

export default MenuRoutes;