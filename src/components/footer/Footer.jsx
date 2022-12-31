import React from "react";
import "./footer.css";
import logs from "../../asset/log.png";

import footer from "../../asset/footer.png";

const Footer = () => {
  return (
    <div>
      {" "}
      <div
        class="container-fluid footer-bg "
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img class="footer-log" src={logs} alt="" />
              <p class="footer-paragraph">
                where every cake and cupcake is an extravaganza! Come see what
                people have been raving about, and try one for yourself. Every
                occasion deserves a Hannel bakery !
              </p>
            </div>
            <div class="col-md-3">
              <h1 class="Links">Useful Links</h1>
              <ul class="list-all-footer">
                <a href="/">
                  {" "}
                  <li class="list">Home</li>
                </a>
                <a href="/about">
                  {" "}
                  <li class="list">About</li>
                </a>
                <a href="/menu">
                  {" "}
                  <li class="list">Menu</li>
                </a>{" "}
                <a href="/event">
                  {" "}
                  <li class="list">Event</li>
                </a>{" "}
                <a href="/contact">
                  {" "}
                  <li class="list">Contact Us</li>
                </a>{" "}
              </ul>
            </div>
            <div class="col-md-5">
              {" "}
              <p class="sub-par-footer">Subscribe</p>
              <form>
                <input
                  class="footer-input"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
                <br></br>
                <button type="button" class="btn-sub ">
                  Subscribe Now
                </button>
              </form>
            </div>

            <div class="col-md-4">
              {/* <img class="footer-log" src={logs} alt="" />
              <p class="footer-paragraph">
                Lorem ipsum dolor sit amet, ssfsf dfsgag consectetur gdfads
                adipiscing elit. Nunc vulputate libero et velit interdum, ac
                dfvg aliquet odio asds sdsds fggmattis.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
