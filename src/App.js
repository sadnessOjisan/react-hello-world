import React, { Component } from "react";
import Header from "./Header";
import Hello from "./Hello";
import Footer from "./Footer";
import CountButton from "./CountButton";
import "./App.css";

class App extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    alert("これからみなさんにはカウントを数えてもらいます。");
  }

  countup = () => {
    const currentCount = this.state.count;
    this.setState({
      count: currentCount + 1
    });
  };

  countDown = () => {
    const currentCount = this.state.count;
    this.setState({
      count: currentCount - 1
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="wrapper">
        <Header />
        <Hello />
        <Hello name="john" />
        <p className="count">{count}</p>
        <div className="button-wrapper">
          <CountButton operator="+" handleClick={this.countup} />
          <CountButton operator="-" handleClick={this.countDown} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
