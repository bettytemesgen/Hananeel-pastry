import React from "react";
import "./contact.css";
import phone from "../../asset/phone.png";
import email from "../../asset/email.png";
import location from "../../asset/location.png";
import icon from "../../asset/icon.png";
import conatcts from "../../asset/contact.png";
const Contact = () => {
  return (
    <div>
      <div
        class="main-bk-contact"
        style={{ backgroundImage: `url(${conatcts})` }}
      >
        <div class="container">
          <h2 class="contact-main-headers">Contact us</h2>
          <p class="contact-main-paragraphs">
            It is located near the Gerje road in Addis Ababa, which makes it
            very easy to find. The atmosphere is great and it's always crowded,
            so be prepared to wait a while for your food. , so it's a great
            place to go for breakfast .{" "}
          </p>
        </div>
        {/* <h1>betty</h1> */}
      </div>
      <div class="container-fluid contact-us-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <h1 class="contact-header-story">
                We are Always <br></br>open 24/7 for<br></br> you
              </h1>
            </div>
            <div class="col-md-5">
              <p class="contact-us-paragraph">
                It is located near the Gerje road in Addis Ababa, which makes it
                very easy to find. The atmosphere is great and it's always
                crowded, so be prepared to wait a while for your food. , so it's
                a great place to go for breakfast .
              </p>
            </div>
          </div>
        </div>
        {/* ===========Contact-form============  */}
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <form class="contact-form">
                <p class="contact-par-name">Full name</p>
                <input
                  class="name-input"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <p class="contact-par-name">Email</p>

                <input
                  class="name-input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <p class="contact-par-name">Subject</p>
                <input
                  class="name-input"
                  type="text"
                  name="name"
                  placeholder="Enter Your subject "
                  required
                />
                <p class="contact-par-name">Message</p>

                <textarea
                  class="name-input"
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="btn-contact ">
                  Send
                </button>
              </form>
            </div>
            <div class="col-md-8">
              <div class="grid-containers">
                <div class="">
                  <img class="" src={phone} alt="" />
                  <h4 class="cont-header-two">LET'S TALK</h4>
                  <h5 class="cont-paragraph-two">
                    Phone: 0902610000 <br></br>Fax:0902610000{" "}
                  </h5>
                </div>
                <div class="">
                  <a href="mailto:Hananeelpastry@gmail.com" target="_blank">
                    <img class="social-email" src={email} alt="" />
                    <h4 class="cont-header-two">Email</h4>
                    <h5 class="cont-paragraph-two">
                      Hananeelpastry@gmail.com<br></br>Hananeelpastry@gmail.com
                    </h5>
                  </a>
                </div>
                <div class="">
                  <img class="" src={location} alt="" />
                  <h4 class="cont-header-two">Contact Us</h4>
                  <h5 class="cont-paragraph-two">
                    Gerje Sunshine, Next to<br></br> Freshe corner
                  </h5>
                </div>
                <div class="item5">
                  <img class="" src={icon} alt="" />
                  <h4 class="cont-header-two">EVENT DETAILS</h4>
                  <h5 class="cont-paragraph-two">
                    Lorem ipsum is simply<br></br> dummy text printing{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
