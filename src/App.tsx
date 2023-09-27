import { Autocomplete } from "@react-google-maps/api";
import "./App.css";
import { Component, useState } from "react";

class App extends Component<any, any> {
  state = { info: "" };

  // useEffect(getClosestLocationInfo, []);
  render() {
    return (
      <>
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
  };  
}

export default App;
