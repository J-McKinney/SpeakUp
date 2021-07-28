import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Styles from "./SinglePlayer.module.css";
require("dotenv").config();

class SinglePlayer extends Component {
  state = {};

  componentDidMount() {
    console.log("Mount:");
    // console.log(process.env.REACT_APP_MY_KEY);
  }
  componentWillUnmount() {
    console.log("Unmount:");
  }
  componentDidUpdate() {
    console.log("Update:");
  }

  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <Container className={Styles.container}>
            <Button className={Styles.button}>Click Here</Button>
          </Container>
        </div>
      </>
    );
  }
}

export default SinglePlayer;
