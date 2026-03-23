import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  // console.log(country);

  const [visited, setVisited] = useState(false);

  const toggleHandler = () => {
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }
    handleVisitedCountry(country);
  };

  return (
    <div className={`country ${visited && "visited-country"}`}>
      <img
        className="img"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h2>Common Name : {country.name.common}</h2>
      <h3>Official Name : {country.name.official}</h3>
      <h4>Capital : {country.capital.capital}</h4>
      <h4>Population : {country.population.population}</h4>
      <h4>
        Area : {country.area.area}{" "}
        {country.area.area >= 300000 ? "Big Country" : "Small Country"}
      </h4>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <button onClick={toggleHandler} className="btn" type="button">
          {visited === true ? "Visited" : "Not Visited"}
        </button>

        <button
          onClick={() => {
            handleVisitedFlag(country);
          }}
          className="btn"
          type="button"
        >
          Visited flag
        </button>
      </div>
    </div>
  );
};

export default Country;
