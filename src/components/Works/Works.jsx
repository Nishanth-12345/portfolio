import React, { useContext } from "react";
import "./Works.css";
import Js from "../../img/download-js.png";
import Node from "../../img/download-node.png";
import Reactjs from "../../img/download-react.png";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Working in these technologies.
          </span>
          <span>Responsibilities</span>
          <spane>
            Integrated RESTful APIs for a websites and mobile apps, enhancing user
            <br />
            experience with seamless data interactions and real-time updates.
            <br />
            Implemented CSS animations and transitions to improve user
            <br />
            engagement and interface responsiveness
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reactjs} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
