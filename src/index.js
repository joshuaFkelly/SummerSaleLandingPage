import React from "react";
import ReactDOM from 'react-dom/client';
import Features from "./Components/Features/Features";
import HeroSection from "./Components/HeroSection/HeroSection"
import NavBar from "./Components/Navigation/Nav"

const App = () => {
    return (

        <div>

            <NavBar />
            <HeroSection />
            <Features />

        </div>

    )
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<App />)
