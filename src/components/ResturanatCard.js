import { IMG_CDN_URL } from "../config";

const ResturanatCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <div>{cuisines.join(" , ")}</div>
        <div>{lastMileTravelString}  </div>
      </div>
    );
  };

  export default ResturanatCard;