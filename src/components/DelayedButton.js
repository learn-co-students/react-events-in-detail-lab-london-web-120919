import React, { Component } from "react";

class DelayedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   delayedClick = event =>
  //     setTimeout(() => {
  //       this.props.onDelayedClick(event);
  //     }, this.props.delay);

  render() {
    return (
      <button
            onClickCapture={event =>
                event.persist();
          setTimeout(() => {
            this.props.onDelayedClick(event);
          }, this.props.delay)
        }
      >
        Delayed Button
      </button>
    );
  }
}

export default DelayedButton; // Code DelayedButton Component Here
