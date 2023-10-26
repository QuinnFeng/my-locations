import { response } from "express";
import { geoAPiUrl, geoApiKey, gmKey } from "./Constant";
import { PlaceModel } from "../models/place.model";
const mileToMeter = 1609.34;

export function getClosestLocationInfo(): Promise<{
  lat: number;
  lng: number;
  address: string;
}> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          fetch(
            "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
              `${lat},${lng}&key=${gmKey}&sensor=true`
          )
            .then((res) => res.json())
            .then((data) => {
              const address = data.results[0].formatted_address;
              resolve({ lat, lng, address });
            })
            .catch((error) => {
              showError(error);
              reject(error);
            });
        },
        (error) => {
          showError(error);
          reject(error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      reject("Geolocation not supported");
    }
  });
}

function showError(error: GeolocationPositionError) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred");
  }
}

export function getNearbyPlacesWithCategory(
  lat: number,
  lng: number,
  category: string,
  type: string,
  radius: number
) {
  const query = `${geoAPiUrl}/places?categories=${category}${
    type ? "." + type : ""
  }&filter=circle:${
    lng + "," + lat + "," + Math.round(radius * mileToMeter)
  }&bias=proximity:${lng + "," + lat}&limit=10&apiKey=${geoApiKey}`;
  // console.log(query);
  fetch(query)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export function placeDetail(lat: number, lng: number) {
  fetch(`${geoAPiUrl}/place-details?lat=${lat}&lon=${lng}&apiKey=${geoApiKey}`)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
}
