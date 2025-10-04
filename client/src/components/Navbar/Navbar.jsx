import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const allNavItems = [
    "home",
    "about",
    "events",
    "startups",
    "webinars",
    "team",
    "contact",
  ];

  return (
    <nav id="app__navbar">
      {/* Logo */}
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Nav */}
      <ul className="app__navbar-links">
        {allNavItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <ScrollLink to={item} smooth={true} duration={500} onClick={() => navigate("/")}>
              {item}
            </ScrollLink>
          </li>
        ))}
        <li className="app__flex p-text">
          <RouterLink to="/campus-ambassadors">Campus Ambassadors</RouterLink>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {allNavItems.map((item) => (
                <li key={item}>
                  <ScrollLink
                    onClick={() => { setToggle(false); navigate("/"); }}
                    to={item}
                    smooth={true}
                    duration={500}
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <RouterLink
                  to="/campus-ambassadors"
                  onClick={() => setToggle(false)}
                >
                  Campus Ambassadors
                </RouterLink>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
