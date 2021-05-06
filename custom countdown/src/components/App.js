import React, { Component } from "react";
import BgVideo from "./BgVideo";
import Modal from "./Modal";
import "../base.css";

class App extends Component {
  render() {
    return (
      <div>
        <BgVideo />
        <Modal /*term={term} daysLeft={daysLeft} hoursLeft={hoursLeft} minutesLeft={minutesLeft} secondsLeft={secondsLeft} distance={distance}*/
        />
      </div>
    );
  }
}

export default App;
