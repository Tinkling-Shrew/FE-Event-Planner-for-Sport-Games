import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecule/Navbar/Navbar";
import Footer from "./components/molecule/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
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
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
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
