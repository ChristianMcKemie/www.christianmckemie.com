
 import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/widgets/Clock";

class App extends React.Component {
  render() {
    return <Clock />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

//setInterval(tick, 1000);
