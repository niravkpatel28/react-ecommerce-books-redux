// this component is a simple couter that will be used to count the
// number copies that the user wants to purchase
// this is a simple coutner app
import React from "react";
import "./quantity.style.css";
class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  render() {
    return (
      <div className="addItem">
        <span>
          {" "}
          <button onClickCapture={this.incrementCount}> + </button>
          <span> {this.state.count}</span>
          <button onClickCapture={this.decrementCount}> - </button>
        </span>
      </div>
    );
  }
}

export default Quantity;
