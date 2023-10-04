import { Autocomplete } from "@react-google-maps/api";
import "./App.css";
import "./base.css";
import { Component, useState } from "react";
import LandingPage from "./component/LandingPage";

class App extends Component<any, any> {
  state = { info: "" };

  // useEffect(getClosestLocationInfo, []);
  render() {
    return (
      <>
        <LandingPage />
        <Autocomplete>
          <input
            type="text"
            placeholder="enter street address or zipcode"
            value={this.state.info}
            onChange={(e) => this.setState({ info: e.target.value })}
          />
        </Autocomplete>
      </>
    );
  }
}

export default App;
