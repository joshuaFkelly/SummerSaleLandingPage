import React from "react";
import ReactDOM from 'react-dom/client';
import HeroSection from "./Components/HeroSection/HeroSection"

const App = () => {
    return (

        <HeroSection />


    )
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<App />)
