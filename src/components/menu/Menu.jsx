import React, { useState } from "react";
import "./menu.css";
import images from "./data.js";
import { useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";
import menuimg from "../../asset/menu.png";
import phone from "../../asset/phone.png";
import email from "../../asset/email.png";
import location from "../../asset/location.png";
import icon from "../../asset/icon.png";

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
const Menu = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <div>
      <div class="main-bk-menu" style={{ backgroundImage: `url(${menuimg})` }}>
        <div class="container">
          <h2 class="menu-main-headers">Menu</h2>
          <p class="menu-main-paragraphs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor
            sit amet, consectetur adipiscing{" "}
          </p>
        </div>
        {/* <h1>betty</h1> */}
      </div>
      <div class="container-fluid menu-second-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <h1 class="About-header-story">
                Discover<br></br> Our Menu{" "}
              </h1>
            </div>
            <div class="col-md-5">
              <p class="About-paragraph-story">
                Help celebrate a special day or commemorate a significant
                occasion with a sweet treat . Whether you are searching for a
                special birthday cake, or simply looking for a sweet ending to
                an everyday meal, In Hannel bakery sure to have something
                freshly baked to suit your mood. We are proud to offer a wide
                variety of freshly baked goods daily, including gourmet cookies,
                fresh apple cake, cheesecake slices, chocolate eclairs,
                strawberry torte, pound cake, lemon bars, decadent brownies,
                shortbread, and over 20 flavors of cupcakes that no one can
                resist.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container"></div>
      <div className="tags">
        <TagButton
          name="all"
          tagActive={tag === "all" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="Vanilla"
          tagActive={tag === "Vanilla" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="Chocolate"
          tagActive={tag === "Chocolate" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="Ice-cream"
          tagActive={tag === "Ice-cream" ? true : false}
          handleSetTag={setTag}
        />
        /
        <TagButton
          name="Biscuit"
          tagActive={tag === "Biscuit" ? true : false}
          handleSetTag={setTag}
        />
      </div>
      <div></div>
      <div options={options} className="menu-bg">
        <div className="container new-container">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-card">
              <a href={`/images/${image.imageName}`}>
                <img
                  className="image-data"
                  src={`/images/${image.imageName}`}
                  alt=""
                />
              </a>
              <header>
                <h4>{title}</h4>
                <p className="item-header">{desc}Cakes </p>
                <p className="item-paragraph">
                  Cake is for life, not just for Party{" "}
                </p>
                <h4 className="item-price">JUST $15.00{price}</h4>
              </header>
            </div>
          ))}
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
const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Menu;
