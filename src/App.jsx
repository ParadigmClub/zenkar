import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the CSS file for transitions

import BottomNav from "./components/bottomNav";
import Auth from "./components/Auth";
import Home from "./components/Home";
import * as Components from "./components";
import "animate.css/animate.compat.css";

function App() {
	return (
		<div>
			<Router>
				<div>
					<Routes>
						<Route path="/" element={<Auth />} />
						<Route path="/auth" element={<Auth />} />
						<Route path="/tax" element={<Components.Tax />} />
						<Route path="/gst" element={<Components.Gst />} />
						<Route path="/connect" element={<Components.connect />} />
						<Route path="/home" element={<Home />} />
						<Route path="/chat" element={<Components.Chat />} />
					</Routes>
				</div>
				<BottomNav />
			</Router>
		</div>
	);
}

export default App;
