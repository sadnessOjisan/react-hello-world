import React, { Component } from "react";

class CountButton extends Component {
  render() {
    const { operator, handleClick } = this.props;
    return (
      <div className="count-button" onClick={handleClick}>
        <p>{operator}</p>
      </div>
    );
  }
}

export default CountButton;
