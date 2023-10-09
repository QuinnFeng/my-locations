import { gmKey } from "./Constant";

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
