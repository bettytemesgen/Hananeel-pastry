import React from "react";
import "./home.css";
import logs from "../../asset/log.png";
import cakee from "../../asset/cake-2.png";
import mainbg from "../../asset/home.png";
import homeAbout from "../../asset/home-cake-two.png";
import MenuOne from "../../asset/menu-one.png";
import menucake from "../../asset/home-cake.png";
import menucaketwo from "../../asset/menu-cake-four.png";
import menucakethree from "../../asset/menu-cake-five.png";
import chef from "../../asset/main-img.png";
import newchef from "../../asset/newman.JPG";
import strawberry from "../../asset/str.jpg";
import gridimage from "../../asset/col-img-2.jpg";

import phone from "../../asset/phone.png";
import email from "../../asset/email.png";
import location from "../../asset/location.png";
import icon from "../../asset/icon.png";

import grid from "../../asset/home-cak.jpg";
import video from "../../asset/hannel.mp4";
import aboutimg from "../../asset/about.png";
import Banana from "../../asset/banana.jpg";
import walnut from "../../asset/walnut.jpg";
import coffee from "../../asset/coffee_cake.jpg";
import cream from "../../asset/cream.jpg";
import cupcake from "../../asset/cupcake.jpg";
import orange from "../../asset/orange.jpg";
const home = () => {
  return (
    <div>
      <video class="main-video" src={video} autoPlay loop muted />
      <div className="content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 class="home-header">
                Welcome to <br></br>Hannel bakery
              </h1>
              <p class="home-paragraph">
                where every cake and cupcake is an extravaganza! Come see what
                people have been raving about, and try one for yourself. Every
                occasion deserves a Hannel bakery !
              </p>
              <div class="home-two-button">
                <button type="button" class="btn-order ">
                  <p class="home-btn-paragraph">Order</p>
                </button>

                <a href="/about">
                  {" "}
                  <button type="button" class="btn-read ">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div class="col-md-6 scrol-col">
              <a href="#contactus" className="scroll__down">
                <hr class="home-head"></hr>
                <p class="home-scrool">scrool</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ====================About============== */}
      <div class="container-fluid About-main-bg">
        <div class="container About-main-image">
          <div class="row">
            <div class="col-md-3">
              <img class="About-main-image" src={homeAbout} alt="" />
            </div>
            <div class="col-md-4">
              <h1 class="About-home-header">
                THE SWEET TASTE<br></br> SOME THINGS<br></br> GOOD
              </h1>
            </div>
            <div class="col-md-5 ">
              <p class="About-home-paragraph">
                At Hannel bakery, we sell more than cakes. Our personal
                in-bakery experience, time-honored recipes and comforting taste
                have enhanced celebrations throughout Ethiopia and now Hannel
                Bakery is available Addis Ababa.{" "}
              </p>
              <a href="./about" target="_blank" rel="noopener noreferrer">
                {" "}
                <p class="home-about-header-two">ABOUT US</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ==================cake================= */}

      <div class="container-fluid cake-bg">
        <div class="container ">
          <h1 class="cake-header">CAKE</h1>
          <img class="cake-log" src={logs} alt="" />

          <p class="cake-subheader">
            <hr class="popular-hr"></hr>popular menu
            <hr class="popular-hr-two"></hr>
          </p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-1">
              <img class="" src={MenuOne} alt="" />
            </div>
            <div class="col-md-3">
              <h1 class="menu-one-header">Chocalate</h1>
              <p class="menu-one-paragraph">
                A hint of coconut takes this moist chocolate cake to a whole new
                level.
              </p>
              <hr />
            </div>
            <div class="col-md-2">
              <p class="menu-price">$10.00</p>
            </div>
            <div class="col-md-1">
              <img id="menu-one-header-strawberry" src={coffee} alt="" />
            </div>
            <div class="col-md-3">
              <h1 class="menu-one-header">coffee cake</h1>
              <p class="menu-one-paragraph">
                {" "}
                Share the love with this classic coffee cake recipe..
              </p>
              <hr />
            </div>
            <div class="col-md-2">
              <p class="menu-price">$10.00</p>
            </div>
          </div>
        </div>
        <div class="container cake-menu-container-one">
          <div class="row">
            <div class="col-md-1">
              <img id="menu-one-header-strawberry" src={strawberry} alt="" />
            </div>
            <div class="col-md-3">
              <h1 class="menu-one-header">strawberry </h1>
              <p class="menu-one-paragraph">
                This raw vegan cheesecake has everything: the crumbly, golden
                base;
              </p>
              <hr />
            </div>
            <div class="col-md-2">
              <p class="menu-price">$10.00</p>
            </div>
            <div class="col-md-1">
              <img id="menu-one-header-strawberry" src={cream} alt="" />
            </div>
            <div class="col-md-3">
              <h1 class="menu-one-header">cream cheese</h1>
              <p class="menu-one-paragraph">
                {" "}
                This smooth, creamy cheesecake is packed full of raspberries and
                white chocolate. Give it a whirl!
              </p>
              <hr />
            </div>
            <div class="col-md-2">
              <p class="menu-price">$10.00</p>
            </div>
          </div>
        </div>
        <div class="container cake-menu-container-one">
          <div class="row">
            <div class="col-md-1">
              <img id="menu-one-header-strawberry" src={Banana} alt="" />
            </div>
            <div class="col-md-3">
              <h1 class="menu-one-header">Banana cake</h1>
              <p class="menu-one-paragraph">
                It’s time to turn the tables with this upside-down banana cake
                will send you topsy turvy.
              </p>
              <hr />
            </div>
            <div class="col-md-2">
              <p class="menu-price">$10.00</p>
            </div>
            <div class="col-md-1">
              <img id="menu-one-header-strawberry" src={cupcake} alt="" />
            </div>
            <div class="col-md-3">
              <h1 class="menu-one-header">Vanilla cupcakes</h1>
              <p class="menu-one-paragraph">
                festive cakes are gluten, dairy, egg and nut free, and are great
                for kids’ parties or a special treat.
              </p>
              <hr />
            </div>
            <div class="col-md-2">
              <p class="menu-price">$10.00</p>
            </div>
          </div>
        </div>
        {/* ============Cake============= */}
        <div class="container cake-menu-container-one">
          <div class="row row-clss">
            <div class="col-md-1">
              <img id="menu-one-header-strawberry" src={walnut} alt="" />
            </div>
            <div class="col-md-3">
              <h1 class="menu-one-header"> walnut cake</h1>
              <p class="menu-one-paragraph">
                {" "}
                for a vegetable that’s simply tops
              </p>
              <hr />
            </div>
            <div class="col-md-2">
              <p class="menu-price">$10.00</p>
            </div>
            <div class="col-md-1">
              <img id="menu-one-header-strawberry" src={orange} alt="" />
            </div>
            <div class="col-md-3">
              <h1 class="menu-one-header">Orange cake</h1>
              <p class="menu-one-paragraph"> cake for morning teas at work</p>
              <hr />
            </div>
            <div class="col-md-2">
              <p class="menu-price">$10.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================offer============================ */}
      <div class="container-fluid offer-bg">
        <div class="container ">
          <h1 class="offer-header">
            <hr class="popular-hr-offer"></hr>EXCLUSIVE OFFERS
            <hr class="popular-hr-two-offer"></hr>
          </h1>
        </div>
        <div class="container ">
          <div class="row">
            <div class="col-md-4 offer-col">
              <img class="offer-one" src={menucake} alt="" />
              <h1 class="offer-subheader">Black forest cake</h1>
              <p class="offer-par">
                Everyone loves a rich, chocolaty Black Forest cake crammed with
                cream, kirsch and cherries. We have taken this traditional
                recipe and created a gluten-free version so that everyone can
                tuck in.{" "}
              </p>
              <p class="offer-price">JUST $19.00</p>
            </div>
            <div class="col-md-4 offer-col">
              <img class="offer-one" src={homeAbout} alt="" />
              <h1 class="offer-subheader">strawberry cheesecake</h1>
              <p class="offer-par">
                This raw vegan cheesecake has everything: the crumbly, golden
                base; the creamy filling and a tangy frozen strawberry topping.
                It’s also dairy-free, gluten-free, egg-free and no-bake.{" "}
              </p>
              <p class="offer-price">JUST $19.00</p>
            </div>
            <div class="col-md-4 offer-col">
              <img class="offer-one" src={menucakethree} alt="" />
              <h1 class="offer-subheader">Chocolate mud </h1>
              <p class="offer-par">
                They say good things come in small packages and cupcakes are the
                proof. Unleash your creative side with these mini works of art
                that are as fun to make as they are to eat.
              </p>
              <p class="offer-price">JUST $19.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* ==========================chef======================= */}

      <div class="container-fluid ">
        <div class="row">
          <div class="col-md-3 chef-col">
            <img class="img-chef" src={chef} alt="" />
          </div>
          <div class="col-md-3 chef-col">
            <h1 class="chef-header">Master chef Message</h1>
            <p class="chef-paragraph">
              Strong passion for baking, scratch baking, and recipe creation. My
              track record of producing artistic and creative bakery products
              coupled with my strong ability to make creative recipes will be an
              outstanding addition to the café. Furthermore, my keen sense of
              planning, and exceptional level of customer service and
              satisfaction will help me work as a part of esteemed pastry chefs,
              and even in a team setting.
            </p>
          </div>

          <div class="col-md-6 chef-col-two">
            <div class="grid-container">
              <div class="item1">
                <p class="grid-par">
                  Delicious <br></br>Sweet<br></br> Cake
                </p>
              </div>
              <div
                id="item2"
                class="item2"
                style={{ backgroundImage: `url(${gridimage})` }}
              >
                {/* <img class="" src={gridimage} alt="" /> */}
              </div>
              <div
                id="item2"
                class="item4 "
                style={{ backgroundImage: `url(${grid})` }}
              ></div>
              <div id="item5" class="item5">
                <p class="grid-par">
                  Delicious <br></br>Sweet<br></br> Cake
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="contactus">
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
      </section>

      {/* ===========footer=============== */}
    </div>
  );
};

export default home;
