import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <DIV>
      <meta charSet="UTF-8" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="style.css" />
      <title>Sticky Footer</title>

      <footer>
        <div className="top">
          <div className="pages">
            <ul>
              <h3>Brand Name</h3>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Catalog</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul>
              <h3>Careers</h3>
              <li>
                <a href="#">Apply Online</a>
              </li>
              <li>
                <a href="#">Available Positions</a>
              </li>
            </ul>
            <ul>
              <h3>About Us</h3>
              <li>
                <a href="#">Meet Our Team</a>
              </li>
              <li>
                <a href="#">Our Responsibilities</a>
              </li>
              <li>
                <a href="#">Our Codes</a>
              </li>
              <li>
                <a href="#">Our Values</a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>Stay in Touch</h3>
            <form>
              <input
                type="email"
                name="newsletter_email"
                id="newsletter_email"
                placeholder="Email"
              />
              <input type="button" defaultValue="Submit" />
            </form>
          </div>
        </div>
        <div className="social">
          <i className="fab fa-linkedin" />
          <i className="fab fa-github" />
          <i className="fab fa-facebook" />
          <i className="fab fa-instagram" />
          <i className="fab fa-twitter" />
          <i className="fab fa-youtube" />
        </div>
        <div className="info">
          <div className="legal">
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="copyright">2021 Copyright © Sean B</div>
        </div>
      </footer>
    </DIV>
  );
};

export default Footer;

const DIV = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
  }

  a {
    color: rgb(231, 231, 231);
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input {
    position: relative;
    height: 100%;
  }

  input[type="email"] {
    padding: 7px 8px;
    border: 1px solid rgb(206, 206, 206);
  }
  input[type="button"] {
    border: none;
    padding: 7px 12px;
    background: rgb(79, 223, 79);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(79, 223, 79);
    cursor: pointer;
  }

  main {
    flex: 1;
  }

  footer {
    bottom: 0;
    background: rgb(46, 46, 46);
    color: white;
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
    bottom: 0;
  }

  /* Bottom - copyright and legal stuff */

  footer .info {
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(29, 29, 29);
  }

  footer .info .legal {
    display: flex;
    flex-wrap: nowrap;
  }

  footer .info .legal > a {
    margin-right: 15px;
  }

  /* Middle - social media links */

  footer .social {
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  footer .social i {
    font-size: 1.4rem;
    margin: 2px 8px;
    cursor: pointer;
  }

  footer .social:before {
    position: absolute;
    content: "";
    width: 90%;
    height: 1px;
    background: rgba(255, 255, 255, 0.192);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Top - pages, email newsletter form ... */

  footer .top {
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }

  footer .top .pages {
    display: flex;
    flex-direction: row;
  }

  footer .top .pages ul {
    margin: 20px;
  }

  footer .top .pages ul li {
    margin: 5px;
  }

  footer .newsletter h3 {
    margin-bottom: 10px;
  }
  footer .newsletter form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Responsive adjustments */
  @media screen and (max-width: 768px) {
    footer .top {
      flex-direction: column;
    }
    footer .top .newsletter {
      padding-top: 1rem;
    }
    footer .top .pages ul {
      margin: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    footer .top .pages {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    footer .info {
      flex-direction: column;
    }

    footer .info > .copyright {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 380px) {
    footer .top .pages {
      justify-content: center;
      flex-direction: column;
    }

    footer .info .legal {
      justify-content: center;
    }

    footer .info .legal a {
      margin: 0;
      text-align: center;
    }
  }
`;
