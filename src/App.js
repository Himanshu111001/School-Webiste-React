import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeCarousel from "./components/Carousel/Carousel";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import AboutUs from "./components/AboutUs/AboutUs";
import Academics from "./components/Academics/Academics";
import Admissions from "./components/Admissions/Admissions";
import Faculty from "./components/Faculty/Faculty";
import Students from "./components/Students/Students";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";

const Home = () => (
  <div>
    <HomeCarousel />
    <QuickLinks />
  </div>
);

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
