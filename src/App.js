import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/organism/Navbar/Navbar";
import Footer from "./components/organism/Footer/Footer";
import Space from "./components/atom/Space/Space";
import StartPage from "./pages/StartPage/StartPage";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import Lobby from "./pages/Lobby/Lobby";

const api = axios.create({
    baseURL: "https://run.mocky.io/v3/b2d26d27-7bef-4128-97f9-3fc5b20fd945",
});

const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <div className="app-container">
                    <Navbar />
                    <Space />
                    <Routes>
                        <Route path="/" element={<StartPage />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/start" element={<StartPage />} />
                        <Route path="/account" element={<AccountPage />} />
                        <Route path="/account/login" element={<LoginPage />} />
                        <Route
                            path="/account/register"
                            element={<RegisterPage />}
                        />
                        <Route path="/lobby" element={<Lobby />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Space />
                    <Footer />
                </div>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default App;
