import React, { Component } from "react";
// import anime from "animejs";
import Styles from "./AnimatedBG.module.css";

class AnimatedBG extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <div className={Styles.container}>
            <h2>
              <span>My First video on</span>
              <br />
              Anime.JS
            </h2>
          </div>
        </div>
      </>
    );
  }
}

export default AnimatedBG;
