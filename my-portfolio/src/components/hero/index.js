import React, { Component } from "react";
import "./style.css"

// https://codepen.io/ljf4/pen/xVBYgL - animated text over hero

class Hero extends Component {
  state = {
    text: ""
  }

  Hero() {
    this.text.typed({
      strings: ["LAURA COLE", "WEB DEVELOPER", "MUSICIAN", "MARTIAL ARTIST"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 2000,
      showCursor: true,
      loop: true
    });
  };

// setState?

  render() {
    return (
      <section className="hero">
        <div className="hero-text">
          <p className="text"></p>
        </div>
      </section>
    )
  }
}

export default Hero;