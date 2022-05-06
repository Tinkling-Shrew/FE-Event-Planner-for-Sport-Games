import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/organism/Navbar/Navbar";
import Footer from "./components/organism/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Account from "./pages/Account/Account";
import Lobby from "./pages/Lobby/Lobby";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Event from "./pages/Event/Event";
import Invite from "./pages/Invite/Invite";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/login" element={<LoginPage />} />
                        <Route
                            path="/account/register"
                            element={<RegisterPage />}
                        />
                        <Route path="/lobby" element={<Lobby />} />
                        <Route path="/create_event" element={<CreateEvent />} />
                        <Route path="/event:id" element={<Event />} />
                        <Route path="/invite" element={<Invite />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                {window.location.pathname !== "/lobby" &&
                    window.location.pathname !== "/invite" &&
                    window.location.pathname !== "/create_event" && <Footer />}
            </div>
        </BrowserRouter>
    );
};

export default App;
