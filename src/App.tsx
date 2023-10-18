import { Autocomplete } from "@react-google-maps/api";
import "./App.css";
import "./base.css";
import { Component, ReactChild, useState } from "react";
import LandingPage from "./component/LandingPage";
import { getNearbyPlacesWithCategory, placeDetail } from "./util/GoogleMap";

interface AppState {
  address: null | string;
  lat: null | number;
  lng: null | number;
}

class App extends Component<any, AppState> {
  state: AppState = { address: "", lat: null, lng: null };

  setAddress = (address: string) => {
    this.setState({ address });
  };
  setLocationInfo = (address: string, lat: number, lng: number) => {
    this.setState({ address, lat, lng });
  };

  // useEffect(getClosestLocationInfo, []);
  render() {
    const { address, lat, lng } = this.state;
    const coordinates = { lat, lng };
    //getNearbyPlacesWithCategory(-74.3, 40.5, "commercial", "shopping_mall", 15);
    placeDetail(40.52563034843524, -74.4703722711072);
    return (
      <>
        <LandingPage
          address={address}
          setAddress={this.setAddress}
          setLocationInfo={this.setLocationInfo}
        />
      </>
    );
  }
}

export default App;
