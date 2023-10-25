import qs from "qs";
import { PlaceModel } from "../models/place.model";
import { baseUrl } from "../util/Constant";
const headers = {
  "Content-type": "application/json",
};
const addPlaceToCategory = (cid: number, uid: number, place: PlaceModel) => {
  return fetch(`${baseUrl}/places/userId=${uid}&categoryId=${cid}`, {
    method: "POST",
    headers,
    body: qs.stringify(place),
  }).then((data) => data.json());
};

const removePlaceFromCategory = (cid: number, uid: number) => {
  return fetch(`${baseUrl}/places/remove/userId=${uid}&categoryId=${cid}`, {
    method: "DELETE",
    headers,
  }).then((data) => data.json());
};

const searchNearByPlaces = (lat: number, lng: number) => {
  return;
};
