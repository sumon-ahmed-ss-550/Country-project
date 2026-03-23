import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };

  const handleVisitedFlag = (flags) => {
    const newVisitedFlag = [...visitedFlag, flags];
    setVisitedFlag(newVisitedFlag);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <div
        style={{
          padding: "24px",
          margin: "12px 0",
          position: "sticky",
          top: "0",
          display: "flex",
          justifyContent: "center",
          marginTop: "0",
          backgroundColor: "white",
          border: "1px solid darkgreen",
          borderRadius: "8px",
        }}
      >
        <input
          id="input-search"
          style={{
            width: "220px",
            maxWidth: "100%",
            padding: "10px 24px",
          }}
          type="search"
          placeholder="Country search..."
        />
        <button
          style={{
            padding: "12px 24px",
            backgroundColor: "darkgreen",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          type="button"
        >
          Search
        </button>
      </div>
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
        <h2>Visited flags : {visitedFlag.length}</h2>
        <ol>
          {visitedCountry.map((singleCountry) => (
            <li style={{}} key={singleCountry.ccn3.ccn3}>
              {singleCountry.name.common}
            </li>
          ))}
        </ol>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {visitedFlag.map((flag, index) => (
            <img
              style={{ width: "120px", height: "80px" }}
              key={index}
              src={flag.flags.flags.png}
              alt=""
            />
          ))}
        </div>
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            handleVisitedFlag={handleVisitedFlag}
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
