import React from "react";
import "./App.css";

import "./assets/bootstrap/css/bootstrap.css";
import "./assets/fonts/flaticon/flaticon.css";
// import "./assets/css/all.css";
import "./assets/css/icofont.css";
import "./assets/css/animate.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import NavBar from "../src/components/navBar/navBar";
import Banner from "../src/components/banner/banner";
import About from "../src/components/about/about";
import AboutUs from "../src/components/aboutus/aboutUs";
import Service from "../src/components/service/service";
import ServiceArea from "../src/components/serviceArea/serviceArea";
import Price from "../src/components/price/price";
import Testimonial from "../src/components/testimonial/testimonial";
import Partner from "../src/components/partner/partner";
import Blog from "../src/components/blog/blog";
import Contact from "../src/components/contact/contact";
import Counter from "../src/components/counter/counter";
import Footer from "../src/components/footer/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <AboutUs />
      <Service />
      <ServiceArea />
      <Price />
      <Testimonial />
      <Partner />
      <Blog />
      <Contact />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
