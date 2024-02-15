// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-dom/client";
import React from "react";

function Headbar() {
  var element = (
    <>
      <section className="headbar">
        <div className="logo">
          <div className="kg_saha_logo"></div>
        </div>
        <div>
          <ul className="menubar">
            <li className="nav_item">
              <a href="/">HOME</a>
            </li>
            <li className="nav_item">
              <a href="/amul/menu">AMUL PRODUCTS</a>
            </li>
            <li className="nav_item">
              <a href="../templates/gd.html">GOLDEN DELIGHTS PRODUCTS</a>
            </li>
            <li className="nav_item">
              <a href="">CASHEW NUTS</a>
            </li>
            <li className="nav_item">
              <a href="">CONTACT</a>
            </li>
            <li className="nav_item">
              <a href="/about">ABOUT</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
  return element;
}
export default Headbar;
