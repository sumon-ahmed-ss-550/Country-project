import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <div
        style={{
          border: "1px solid darkgreen",
          padding: "24px",
          borderRadius: "8px",
          margin: "12px 0",
        }}
      >
        <h1>Total Countries : {countries.length}</h1>
        <h2>Visited Countries : {visitedCountry.length}</h2>
        <ol>
          {visitedCountry.map((singleCountry) => (
            <li style={{}} key={singleCountry.ccn3.ccn3}>
              {singleCountry.name.common}
            </li>
          ))}
        </ol>
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            key={country.ccn3.ccn3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
