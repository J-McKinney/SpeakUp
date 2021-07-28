import React, { Component } from "react";
import Styles from "./SinglePlayer.module.css";

class SinglePlayer extends Component {
  state = {};

  componentDidMount() {
    console.log("Mount: ");
  }
  componentWillUnmount() {
    console.log("Unmount: ");
  }
  componentDidUpdate() {
    console.log("Update: ");
  }

  render() {
    return (
      <>
        <div className={Styles.wrapper}></div>
      </>
    );
  }
}

export default SinglePlayer;
