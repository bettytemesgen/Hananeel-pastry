import React from "react";
import "./about.css";
import cake from "../../asset/display-three.jpg";
import cakes from "../../asset/display-two.jpg";
import cakestwo from "../../asset/Desk.jpg";

import cakeTwo from "../../asset/cake-two.png";
import team from "../../asset/black.jpg";
import teamtwo from "../../asset/team-black.jpg";
import aboutimg from "../../asset/about.png";
import mainbg from "../../asset/mainbk.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";
import phone from "../../asset/phone.png";
import email from "../../asset/email.png";
import location from "../../asset/location.png";
import icon from "../../asset/icon.png";
const About = () => {
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
        {/* <h1>betty</h1> */}
      </div>
      <div class="container-fluid About-story">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <h1 class="About-header-story">
                Welcome to <br></br>Hannel bakery
              </h1>
            </div>
            <div class="col-md-5">
              <p class="About-paragraph-story">
                At Hannel bakery is a feast for the senses. Blocks away, the
                aroma of fresh baked goods tantalize the nose. Take a bite of
                anything, and you’ll see why people make special trips to our
                shops , we sell more than cakes. Our personal in-bakery
                experience, time-honored recipes and comforting taste have
                enhanced celebrations throughout Ethipoua since opening the
                first bakery in 2006...and now Hannel Bakery is available Addis
                Ababa.{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row class-row ">
            <div class="col-md-5 ">
              <img class="story-cake-one" src={cake} alt="" />

              <img
                id="story-cake-two"
                class="story-cake-one"
                src={cakestwo}
                alt=""
              />
            </div>
            <div class="col-md-7 ">
              <img class="story-cake" src={cakes} alt="" />
            </div>
          </div>
        </div>

        <div class="container">
          <h1 class="meet-team-header">Our chef </h1>
          <p class="meet-team-paragraph">
            Strong passion for baking, scratch baking, and recipe creation. My
            track record of producing artistic and creative bakery products
            coupled with my strong ability to make creative recipes will be an
            outstanding addition to the café. Furthermore, my keen sense of
            planning, and exceptional level of customer service and satisfaction
            will help me work as a part of esteemed pastry chefs, and even in a
            team setting.
          </p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <h1 class="team-name">Pastery Manager</h1>
              <h2 class="team-subheader">Lorem</h2>
              <img class="team-one" src={teamtwo} alt="" />
            </div>
            <div class="col-md-6">
              <p class="team-paragraph">
                Strong passion for baking, scratch baking, and recipe creation.
                My track record of producing artistic and creative bakery
                products coupled with my strong ability to make creative recipes
                will be an outstanding addition to the café. Furthermore, my
                keen sense of planning, and exceptional level of customer
                service and satisfaction will help me work as a part of esteemed
                pastry chefs, and even in a team setting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid social-bk ">
        <div className="container ">
          {/* <IconContext.Provider value={{ color: "blue", size: "50px" }}>
        <FaTwitter color="red" />
      </IconContext.Provider>
      <FaTwitter color="red" /> */}

          <div class="row">
            <div id="about-cr" className="about__cards">
              <article className="about__cardss">
                <a href="callto:(251)945646523" target="_blank">
                  <img
                    src={phone}
                    id="icon-colo"
                    className="contact__option-icon"
                  />
                  {/* <FiPhoneCall /> */}
                  <h4 class="cont-header">LET'S TALK</h4>
                  <h5 class="cont-paragraph">
                    Phone: 0902610000 Fax:0902610000{" "}
                  </h5>
                </a>
                {/* <a href="callto:(251)945646523" target="_blank">
              Call me
            </a> */}
              </article>
              <article className="about__cardss">
                <a href="mailto:Hananeelpastry@gmail.com" target="_blank">
                  <img src={email} className="contact__option-icon" />
                  {/* <MdOutlineEmail
                      color="red"
                      className="contact__option-icon"
                    /> */}
                  <h4 class="cont-header">Email</h4>
                  <h5 class="cont-paragraph">Hananeelpastry@gmail.com </h5>
                  {/* <a href="mailto:info@yourdomain.com" target="_blank">
              Send a Message
            </a> */}
                </a>
              </article>

              <article className="about__cardss">
                <img src={location} className="contact__option-icon" />
                {/* <GoLocation className="contact__option-icon" /> */}
                <h4 class="cont-header">Location</h4>
                <h5 class="cont-paragraph">
                  Gerje Sunshine, Next to<br></br> Freshe corner
                </h5>
                {/* <a href="callto:(251)910015422" target="_blank">
              Call me
            </a> */}
              </article>
              <article className="about__cardss">
                <img src={icon} class="contact__option-icon" />
                {/* <FiPhoneCall className="contact__option-icon" /> */}
                <h4 class="cont-header">EVENT DETAILS</h4>
                <h5 class="cont-paragraph">
                  Lorem ipsum is simply dummy text printing
                </h5>
                {/* <a href="callto:(251)910015422" target="_blank">
              EVENT DETAILS{" "}
            </a> */}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
