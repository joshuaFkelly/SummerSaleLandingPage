import React from "react";
import ReactDOM from 'react-dom/client';
import ButtonsBanner from "./Components/CallToAction/ButtonsBanner";
import ContactForm from "./Components/CallToAction/ContactForm";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection"
import NavBar from "./Components/Navigation/Nav"
import Testimonials from "./Components/Testimonials/Testimonials";

const App = () => {
    return (

        <div>

            <NavBar />
            <HeroSection />
            <Features />
            <ButtonsBanner />
            <Testimonials />
            <ContactForm />
            <Footer />

        </div>

    )
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<App />)
