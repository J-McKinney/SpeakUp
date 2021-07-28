import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Styles from "./SinglePlayer.module.css";
require("dotenv").config();

// Creating a new instance of AudioContext to allow the program to access the microphone
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();

// Creating a new instance of SpeechRecognition to allow the microphone to record
var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

// Global Variables of the transcribing/analysis of spoken sentences and final result
let interimTranscript = "";
let finalTranscript = "";

class SinglePlayer extends Component {
  state = {
    listening: false,
    sentence: "",
  };

  componentDidMount() {
    console.log("Mount:");
  }
  componentWillUnmount() {
    console.log("Unmount:");
  }
  componentDidUpdate() {
    console.log("Update:");
    // console.log(interimTranscript);
    // console.log(finalTranscript);
    // console.log(this.state.sentence);
  }

  // Handling event change
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Toggle button to turn on/off the microphone
  toggleListen = () => {
    if (this.state.listening === false) {
      audioContext.resume();
      recognition.start();
      recognition.onend = () => {
        recognition.start();
      };
      recognition.continous = true;
      recognition.maxAlternatives = 10;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        interimTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalTranscript += transcript + " ";
          else interimTranscript += transcript;
        }
        const transcriptArr = finalTranscript.split("  ");
        this.setState({ sentence: transcriptArr[0] });
      };
      this.setState({ listening: true });
    } else if (this.state.listening === true) {
      audioContext.close();
      recognition.stop();
      recognition.onend = () => {};
    }
    console.log(interimTranscript);
    console.log(finalTranscript);
    console.log(this.state.sentence);
  };

  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <Container className={Styles.container}>
            <Button onClick={this.toggleListen} className={Styles.button}>
              Click Here
            </Button>
          </Container>
        </div>
      </>
    );
  }
}

export default SinglePlayer;
