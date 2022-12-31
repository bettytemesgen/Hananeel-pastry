import React from "react";
import "./event.css";
import event from "../../asset/event.png";
import eventone from "../../asset/event-one.png";
import caketwo from "../../images/cake7.jpg";
import cakethree from "../../images/col-img-2.jpg";
import cakefour from "../../images/cake8.jpg";
import cakefive from "../../images/cake.jpg";
import cakesix from "../../images/cake33.jpg";
import cakeseven from "../../images/cake2.jpg";
import cakeegiht from "../../images/cake6.jpg";
import cakenine from "../../images/col-img.jpg";
import phone from "../../asset/phone.png";
import email from "../../asset/email.png";
import location from "../../asset/location.png";
import icon from "../../asset/icon.png";
const Event = () => {
  return (
    <div>
      <div class="main-bk-contact" style={{ backgroundImage: `url(${event})` }}>
        <div class="container">
          <h2 class="contact-main-headers">Event</h2>
          <p class="contact-main-paragraphs">
            Hannel is available for special event and party hosting as well as
            hands on baking and decorating classes. We also offer corporate
            event catering with custom logo cupcakes, cupcake decorating
            stations and other fun events for your party guests!
          </p>
        </div>
      </div>
      {/*  */}
      <div class="container-fluid" id="event-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <h1 class="contact-header-story">
                Upcoming <br></br>Event{" "}
              </h1>
            </div>

            <div class="col-md-5">
              <p class="contact-us-paragraph">
                Hannel bakery is happy to design a cake for any party! Let your
                imagination run wild! Custom cakes are priced by size and level
                of decor, please email us to inquire about a quote for your
                specific event. Custom cakes are available in ALL of the
                (non-fried) cupcake flavors!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==========event upcoming======== */}
      <div class="container-fluid" id="event-bg">
        <div class="container">
          <div class="row new-row">
            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img id="event-img" class="event-img" src={cakefour} alt="" />
                  <h3>21</h3>
                  <h4 id="event-sub" class="event-sub">
                    Baby shower cake{" "}
                  </h4>
                  <p id="event-par" class="event-par">
                    This baby shower cake is the perfect way to celebrate!{" "}
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img id="event-img" class="event-img" src={caketwo} alt="" />
                  <h3>21</h3>
                  <h4 id="event-sub" class="event-sub">
                    Baby shower cake{" "}
                  </h4>
                  <p id="event-par" class="event-par">
                    This baby shower cake is the perfect way to celebrate!{" "}
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img
                    id="event-img"
                    class="event-img"
                    src={cakethree}
                    alt=""
                  />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    Birth day cake{" "}
                  </h4>
                  <p id="event-par" class="event-par">
                    A quick and easy first birthday cake
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img id="event-img" class="event-img" src={cakesix} alt="" />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    wedding Cake
                  </h4>
                  <p id="event-par" class="event-par">
                    It's your wedding, your cake, your day{" "}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div id="new-row-pad" class="row new-row">
            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img id="event-img" class="event-img" src={cakefive} alt="" />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    wedding Cake
                  </h4>
                  <p id="event-par" class="event-par">
                    It's your wedding, your cake, your day{" "}
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img
                    id="event-img"
                    class="event-img"
                    src={cakeseven}
                    alt=""
                  />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    wedding Cake
                  </h4>
                  <p id="event-par" class="event-par">
                    It's your wedding, your cake, your day{" "}
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img
                    id="event-img"
                    class="event-img"
                    src={cakeegiht}
                    alt=""
                  />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    Birth day cake{" "}
                  </h4>
                  <p id="event-par" class="event-par">
                    A quick and easy first birthday cake
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img id="event-img" class="event-img" src={cakenine} alt="" />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    Birth day cake{" "}
                  </h4>
                  <p id="event-par" class="event-par">
                    A quick and easy first birthday cake
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div id="new-row-pad" class="row new-row">
            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img
                    id="event-img"
                    class="event-img"
                    src={cakeseven}
                    alt=""
                  />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    wedding Cake
                  </h4>
                  <p id="event-par" class="event-par">
                    It's your wedding, your cake, your day{" "}
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img
                    id="event-img"
                    class="event-img"
                    src={cakethree}
                    alt=""
                  />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    Birth day cake{" "}
                  </h4>
                  <p id="event-par" class="event-par">
                    A quick and easy first birthday cake
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img id="event-img" class="event-img" src={caketwo} alt="" />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    Baby shower cake{" "}
                  </h4>
                  <p id="event-par" class="event-par">
                    This baby shower cake is the perfect way to celebrate!{" "}
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img id="event-img" class="event-img" src={cakenine} alt="" />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    Birth day cake{" "}
                  </h4>
                  <p id="event-par" class="event-par">
                    A quick and easy first birthday cake
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div id="new-row-pad" class="row new-row">
            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img
                    id="event-img"
                    class="event-img"
                    src={cakeegiht}
                    alt=""
                  />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    Birth day cake{" "}
                  </h4>
                  <p id="event-par" class="event-par">
                    A quick and easy first birthday cake
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img id="event-img" class="event-img" src={cakesix} alt="" />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    wedding Cake
                  </h4>
                  <p id="event-par" class="event-par">
                    It's your wedding, your cake, your day{" "}
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <a href="/events">
                <div id="new-card" class=" new-card">
                  <img
                    id="event-img"
                    class="event-img"
                    src={cakeseven}
                    alt=""
                  />
                  <h3>26</h3>
                  <h4 id="event-sub" class="event-sub">
                    wedding Cake
                  </h4>
                  <p id="event-par" class="event-par">
                    It's your wedding, your cake, your day{" "}
                  </p>
                </div>
              </a>
            </div>

            <div class="column new-column">
              <div id="new-card" class=" new-card">
                <img id="event-img" class="event-img" src={cakefive} alt="" />
                <h3>26</h3>
                <h4 id="event-sub" class="event-sub">
                  wedding Cake
                </h4>
                <p id="event-par" class="event-par">
                  It's your wedding, your cake, your day{" "}
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
    </div>
  );
};

export default Event;
