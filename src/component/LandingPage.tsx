import Logo from "./Logo";
import { Autocomplete } from "@react-google-maps/api";
import { GrLocation } from "react-icons/gr";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";
import {
  getClosestLocationInfo,
  getNearbyPlacesWithCategory,
} from "../util/GoogleMap";
import { PlaceModel } from "../models/place.model";
interface LandingPageProps {
  address: string | null;
  setAddress: (address: string) => void;
  setLocationInfo: (addess: string, lat: number, lng: number) => void;
}

const LandingPage = ({
  address,
  setAddress,
  setLocationInfo,
}: LandingPageProps) => {
  useEffect(() => {
    getClosestLocationInfo()
      .then(({ lat, lng, address }) => {
        setLocationInfo(address, lat, lng);
        console.log(
          getNearbyPlacesWithCategory(lat, lng, "commercial", "supermarket", 15)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="header">
        <div className="header-bg"></div>
        <p className="brand">
          <Logo />
          <span className="brand-name">PlaceFinder</span>
        </p>
        <nav className="navbar">
          <span className="access auth">Sign In</span>
          <span className="access">Sign Up</span>
        </nav>
        <div className="center discover">
          <div className="center discover-inner">
            <p className="gradient-text">
              Discover more places from your neighborhood
            </p>
            <div className="address-div">
              <GrLocation />
              <Autocomplete>
                <input
                  type="text"
                  placeholder="enter street address or zipcode"
                  value={address || ""}
                  onChange={(e) => setAddress(e.target.value)}
                  className="address-input"
                />
              </Autocomplete>
              <span className="center search-nearby-button">
                <AiOutlineArrowLeft className="left-arrow" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default LandingPage;
