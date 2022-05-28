import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecule/Header/Header";
import Footer from "./components/molecule/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./components/atom/NotFound/NotFound";
import Register from "./pages/Register/Register";
import Lobby from "./pages/Lobby/Lobby";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Event from "./pages/Event/Event";
import Invite from "./pages/Invite/Invite";

const App = () => {
	return (
		<div className="app-container">
			<Navbar />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="lobby" element={<Lobby />} />
				<Route path="lobby/event/:id" element={<Event />} />
				<Route path="invite/:id" element={<Invite />} />
				<Route path="create_event" element={<CreateEvent />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
