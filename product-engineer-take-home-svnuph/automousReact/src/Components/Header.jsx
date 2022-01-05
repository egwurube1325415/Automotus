import React from "react";
import hamburger from "../assets/img/icon-hamburger.svg";
import iconclose from "../assets/img/icon-close.svg";
import "../assets/styles.css";
import "../assets/js/Header";
import $ from "jquery";
import logo from "../assets/img/logo.svg"

function Header() {
  $(document).ready(function () {
    $(".close").hide();
    $(".lists").hide();
    $(".ham").on("click", () => {
      $(".ham").toggle();
      $(".close").toggle();
      $(".lists").toggle();
    });
    $(".close").on("click", () => {
      $(".close").toggle();
      $(".ham").toggle();
      $(".lists").toggle();
    });
  });
  return (
    <div>
      <nav>
        <img src={logo} alt="" class="logo" />
        <ul class="lists">
          <li>Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li class="dot"></li>
          <li>Login</li>
        </ul>
        <img src={hamburger} alt="" class="icon ham" />
        <img src={iconclose} alt="" class="icon close" />
      </nav>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    </div>
  );
}

export default Header;
