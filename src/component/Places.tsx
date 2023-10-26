import { PlaceModel } from "../models/place.model";

const Places = (title: string, places: PlaceModel[]) => {
  return (
    <>
      <div className="places">
        <div className="places-header">
          <h3>{title}</h3>
          <button>See All</button>
          <span>
            <i></i>
          </span>
          <span>
            <i> </i>
          </span>
        </div>
        <div className="places-container">
          {places.map((place) => (
            <div
              id={place.placeId}
              key={place.placeId}
              className="place"
            >
              <img
                className="place-img"
                src={place.image}
                alt={place.image}
              />
              <p>{place.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Places;
