import React, { useEffect, useState } from "react";
import Countries from "../Countries/Countries";

const Home = () => {
  const url = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const shortCountries = countries.slice(0, 15);
  const countryLength = shortCountries.length;

  return (
    <>
      <h1>
        Data of <span>{countryLength} </span>Country
      </h1>
      <main>
        {shortCountries.map((country) => (
          <Countries country={country} key={country.area} />
        ))}
      </main>
    </>
  );
};

export default Home;
