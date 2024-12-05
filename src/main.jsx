import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SplashScreen } from "@capacitor/splash-screen";
SplashScreen.hide();
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
