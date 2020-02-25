// Code CoordinatesButton Component Here
import React, { Component } from "react";
class CoordinatesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        onClick={event =>
          this.props.onReceiveCoordinates([event.clientX, event.clientY])
        }
      >
        Coordinates Button
      </button>
    );
  }
}

export default CoordinatesButton;
