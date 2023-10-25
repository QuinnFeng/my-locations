import { Autocomplete } from "@react-google-maps/api";
import "./App.css";
import "./base.css";
import { Component, ReactChild, useEffect, useState } from "react";
import LandingPage from "./component/LandingPage";
import {
  getNearbyPlacesWithCategory,
  initMap,
  placeDetail,
} from "./util/GoogleMap";

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
    // console.log(getNearbyPlacesWithCategory(lat!, lng!, "store", "", 500));
    return (
      <>
        <LandingPage
          address={address}
          setAddress={this.setAddress}
          setLocationInfo={this.setLocationInfo}
        />
        <div id="map"></div>
      </>
    );
  }
}

export default App;
