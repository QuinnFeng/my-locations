import { apiKey } from "./Constant";

export function getClosestLocationInfo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        fetch(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            `${position.coords.latitude},${position.coords.longitude}&key=${apiKey}&sensor=true`
        )
          .then((res) => res.json())
          .then((data) => {
            const l = data.results[0];
          })
          .catch((error) => showError(error));
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showError(error: any) {
  console.log(error);
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
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
    default:
      alert("An unknown error occurred");
  }
}
