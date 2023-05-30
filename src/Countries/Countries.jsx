import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ country }) => {
  const { name, subregion, region, flags, coatOfArms } = country;

  return (
    <div className="country-container">
      <img src={flags.svg} alt={flags.alt} width={"80px"} />
      <h5>
        {name.common}
        <span>
          <img
            src={coatOfArms.svg}
            alt={coatOfArms.svg ? `coat of arms of ${name.common}` : " "}
            width={"20px"}
          />
        </span>
      </h5>
      <p>Region : {region}</p>
      <p>Subregion : {subregion}</p>
      <Link to={`/name/${name.common}`}>
        <button>See Details</button>
      </Link>
    </div>
  );
};

export default Countries;
