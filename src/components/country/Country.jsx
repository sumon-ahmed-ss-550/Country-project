import React from "react";
import "./country.css";

const Country = ({ country }) => {
  console.log(country.area.area);
  return (
    <div className="country">
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
    </div>
  );
};

export default Country;
