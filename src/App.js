import "./App.css";
import React, { useEffect, useState } from "react";
import images from "./components/menu/data.js";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Event from "./components/event/Event";
import Footer from "./components/footer/Footer";
import Eventdetail from "./components/events/Events";
import { Routes, Route } from "react-router-dom";
import Events from "./components/events/Events";
import Modal from "./components/Modal/Modal";

const options = {
  // settings: {
  // 	overlayColor: 'rgb(25, 136, 124)',
  // 	autoplaySpeed: 1500,
  // 	transitionSpeed: 900
  // },
  // buttons: {
  // 	backgroundColor: 'red',
  // 	iconColor: 'rgba(126, 172, 139, 0.8)'
  // },
  // caption: {
  // 	captionColor: '#a6cfa5',
  // 	captionFontFamily: 'Raleway, sans-serif',
  // 	captionFontWeight: '300',
  // 	captionTextTransform: 'uppercase'
  // },
  // progressBar: {
  // 	height: '20px',
  // 	fillColor: 'blue',
  // 	backgroundColor: 'white'
  // }
};
const { title, desc, price } = options;

const App = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/modal" element={<Modal />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
