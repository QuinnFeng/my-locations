import { geoAPiUrl, geoApiKey, gmKey } from "./Constant";

const mileToMeter = 1609.34;

export function getClosestLocationInfo(
  setLocationInfo: (address: string, lat: number, lng: number) => void
) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        fetch(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            `${lat},${lng}&key=${gmKey}&sensor=true`
        )
          .then((res) => res.json())
          .then((data) =>
            setLocationInfo(data.results[0].formatted_address, lat, lng)
          )
          .catch((error) => showError(error));
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
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
  fetch(
    `${geoAPiUrl}/places?categories=${category}${
      type ? "." + type : ""
    }&filter=circle:${
      lat + "," + lng + "," + Math.round(radius * mileToMeter)
    }&bias=proximity:${lat + "," + lng}&limit=10&apiKey=${geoApiKey}`
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export function placeDetail(lat: number, lng: number) {
  fetch(`${geoAPiUrl}/place-details?lat=${lat}&lon=${lng}&apiKey=${geoApiKey}`)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

// export function placeDetail(lat: number, lng: number) {
//   fetch(
//     `https://api.geoapify.com/v2/place-details?lat=40.52563034843524&lon=-74.4703722711072&apiKey=${geoApiKey}`
//   )
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// }
