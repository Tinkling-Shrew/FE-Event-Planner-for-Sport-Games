import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
		<BrowserRouter>
			<div className="app-container">
				<Navbar />
				<>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/landing" element={<Landing />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/lobby" element={<Lobby />} />
						<Route path="/create_event" element={<CreateEvent />} />
						<Route exact path="/lobby/event/:id" element={<Event />} />
						<Route exact path="/invite?:id" element={<Invite />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</>
				{window.location.pathname !== "/lobby" &&
					window.location.pathname !== "/invite" &&
					window.location.pathname !== "/create_event" && <Footer />}
			</div>
		</BrowserRouter>
	);
};

export default App;
