import React from "react";
import "./Popup";

import aboutimg from "../../asset/about.png";
import Popup from "./Popup";
import { useState } from "react";
const Modal = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <div
        class="main-bk-about"
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
        <div class="container">
          <h2 class="about-main-headers">About Us</h2>
          <p class="about-main-paragraphs">
            Hannel is available for special event and party hosting as well as
            hands on baking and decorating classes. We also offer corporate
            event catering with custom logo cupcakes, cupcake decorating
            stations and other fun events for your party guests!{" "}
          </p>
        </div>
      </div>
      <main>
        <h1>betty</h1>
        <br></br>
        <button onClick={() => setButtonPopup(true)}>Open Popups</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h4>My Popup</h4>
          <p>this is</p>
        </Popup>
      </main>
    </div>
  );
};

export default Modal;
