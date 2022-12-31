import React from "react";
import "./nav.css";
import logs from "../../asset/log.png";
import "./popup.css";
import Popup from "./Popup";
import pop from "../../asset/pop.png";
import { useState } from "react";
const Nav = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      {/* <header class="header">
        <a href="#" class="logo ">
          <img class="log-img" src={logs} alt="" />
        </a>
        <input class="side-menu" type="checkbox" id="side-menu" />
        <label class="hamb" for="side-menu">
          <span class="hamb-line"></span>
        </label>
        <nav class="nav" id="nav">
          <ul class="menu">
            <li class="navbar__item">
              <a href="/" class="navbar__links" id="home-page">
                Home
              </a>
            </li>
            <li class="navbar__item">
              <a href="/about" class="navbar__links" id="about-page">
                About
              </a>
            </li>
            <li class="navbar__item">
              <a href="/menu" class="navbar__links" id="services-page">
                Menu
              </a>
            </li>
            <li class="navbar__item">
              <a href="/event" class="navbar__links" id="services-page">
                Event
              </a>
            </li>
            <li class="navbar__item">
              <a href="/contact" class="navbar__links" id="services-page">
                contact us
              </a>
            </li>
            <li class="navbar__btn">
              <a href="#sign-up" class="button" id="signup">
                order
              </a>
            </li>
          </ul>
        </nav>
      </header> */}
      <header id="headers">
        <div class="logos">
          <a href="/">
            {/* <img src={logs} /> */}
            <img class="log-img" src={logs} alt="" />
          </a>{" "}
        </div>

        <div class="navigations">
          <input type="checkbox" class="toggle-menus" />
          <div class="hamburgers"></div>
          <ul class="menus">
            <li>
              {" "}
              <a href="./">Home</a>
            </li>
            <li>
              {" "}
              <a href="./about">About</a>
            </li>{" "}
            <li>
              {" "}
              <a href="./event">Event</a>
            </li>{" "}
            <li>
              {" "}
              <a href="./menu">Menu</a>
            </li>{" "}
            <li>
              {" "}
              <a href="./contact">Contact Us</a>
            </li>{" "}
            <li class="btms">
              <a href="#">
                {/* <button type="button" class="btn-order ">
                  <p class="home-btn-paragraph">Order</p>
                </button> */}
                <button
                  type="button"
                  class="btn-order "
                  onClick={() => setButtonPopup(true)}
                >
                  {" "}
                  <p class="home-btn-paragraph">Order</p>
                </button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  {/* <div class="container">
                    <div class="col-md-6">
                      <img class="pop-img" src={pop} />
                    </div>
                    <div class="col-md-6" id="col-ui">
                      <h1 class="popup-forms">betty</h1>{" "}
                    </div>
                  </div> */}
                  <img className="pop" src={pop} />
                  <form class="pop-form contact-forms">
                    <p class="contact-par-names">Full name</p>
                    <input
                      id="form-full"
                      class="name-inputs"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                    <p class="contact-par-names">Email</p>
                    <input
                      class="name-inputs"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />{" "}
                    <p class="contact-par-names">Cake Type</p>
                    <input
                      class="name-inputs"
                      type="text"
                      name="name"
                      placeholder="Cake Type"
                      required
                    />
                    <p class="contact-par-names">Date </p>
                    <input type="date" value="2017-06-01" />
                    <button class="form-btn">
                      <p className="ord-par">Order</p>
                    </button>
                  </form>
                </Popup>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Nav;
