import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/organism/Navbar/Navbar";
import Footer from "./components/organism/Footer/Footer";
import Space from "./components/atom/Space/Space";
import StartPage from "./pages/StartPage/StartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navbar />
                <Space />
                <Space />
                <Routes>
                    <Route path="/start" element={<StartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<NotFound />} />
                </Routes>
                <Space />
                <Space />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
