import React from "react";
import "./events.css";
import event from "../../asset/event.png";
import iconone from "../../asset/icon-two.png";
import icontwo from "../../asset/icon-one.png";
import iconthree from "../../asset/icon-three.png";
import eventone from "../../asset/event-one.png";
import cakeseven from "../../images/cake2.jpg";
import cakeegiht from "../../images/cake6.jpg";
import cakenine from "../../images/col-img.jpg";
import cakefive from "../../images/cake.jpg";

const Events = () => {
  return (
    <div>
      <div
        class="main-bk-events"
        style={{ backgroundImage: `url(${event})` }}
      ></div>

      <div class="container-fluid events-bg">
        <div id="grid-container" class="">
          <div class="item1">
            <img class="events-img" src={iconone} />
            <p class="icon-par">09:00 AM - 12:00 AM</p>
          </div>
          <div class="item2">
            <img class="events-img" src={icontwo} />
            <p class="icon-par">Sunday, November 22th</p>
          </div>
          <div class="item3">
            {" "}
            <img class="events-img" src={iconthree} />
            <p class="icon-par">Addis Ababa Ethiopia</p>
          </div>
        </div>
      </div>
      <div class="container-fluid events-bg ">
        <div class="container">
          <h1 class="events-two-paragraph">
            Lorem ipsum dolor sit amet <br></br>consectetur. Maecenas
            pellentesque.
          </h1>
          <p className="events-para-two">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            dignissimos dolor debitis recusandae ipsam eligendi velit fugit
            temporibus in molestias atque asperiores, excepturi, cum nesciunt
            reprehenderit eum repudiandae dolores praesentium?
          </p>
          <p className="events-para-twos">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <h1 class="events-two-par">Related Events</h1>
        </div>
      </div>
      <div className="container-fluid events-bg">
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
    </div>
  );
};

export default Events;
