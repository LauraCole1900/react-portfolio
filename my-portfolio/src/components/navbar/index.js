import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// https://codepen.io/BrunoIF/pen/oNjNepa - transparent React navbar

// const { useEffect, useState } = React

const Navigation = () => {
  const [offsetTop, setOffsetTop] = useState(0)
  const location = useLocation();
  let thisElement = React.createRef()

  useEffect(() => {
    window.addEventListener('scroll', () => setOffsetTop(window.scrollY))
  }, [])

  useEffect(() => {

    // var tl = new TimelineMax()

    if (offsetTop === 0) {

      const style = {
        backgroundColor: 'transparent',
        borderBottom: '1px solid rgba(255, 255, 255, .1)',
        boxShadow: 'none',
        color: '#F0F0F2',
      }

      // tl
      //   .to(thisElement, .3, style, 'a')
      //   .to('.navbar__container', .3, {padding: '20px 70px', ease: Power1.easeOut}, 'a')
    }
    else {

      const style = {
        backgroundColor: '#F0F0F2',
        borderBottom: '0',
        boxShadow: '0px 2px 10px 0px rgba(0,0,0,.3)',
        color: '#222126',
      }

      // tl
      //   .to(thisElement, .3, style, 'a')
      //   .to('.navbar__container', .3, {padding: '20px 55px'}, 'a')
    }
  }, [offsetTop])

  return (
    <div className="navbar" ref={el => thisElement = el}>
      <div className="navbar__container">
        <div className="navbar__logo">LOGO</div>
        <ul className="navbar__items">
          <li className="navbar__link">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>
          <li class="navbar__link">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
            </Link>
          </li>
          <li class="navbar__link">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>
          </li>
          <li class="navbar__link">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;
// ReactDOM.render(<Navigation />, document.getElementById('root'))