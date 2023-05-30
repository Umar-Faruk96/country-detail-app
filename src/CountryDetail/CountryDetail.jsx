import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
  const [countries, setCountry] = useState([]);

  const { countryName } = useParams();
  useEffect(() => {
    const countryUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(countryUrl)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err.message));
  }, []);

  try {
    console.log(countries);

    //? destructuring country array
    const [country] = countries;

    const {
      name,
      independent,
      unMember,
      area,
      population,
      status,
      subregion,
      region,
      flags,
      coatOfArms,
      landlocked,
      startOfWeek,
      currencies,
      capital,
      languages,
      timezones,
    } = country;
    const { official, common } = name;

    return (
      <main className="country-container">
        {/* country img area */}
        <img src={flags.svg} alt={flags.alt} width={"240px"} />

        {/* country name detail area */}
        <div className="name-detail">
          <h2>
            Official Name : <span>{official}</span>
          </h2>
          <h2>
            Common Name : <span>{common}</span>
          </h2>
        </div>

        {/* country region detail area */}
        <div className="region-detail">
          <h4>
            Region : <span>{region}</span>
          </h4>
          <h4>
            Subregion : <span>{subregion}</span>
          </h4>
        </div>

        {/* country official detail area */}
        <div className="official-detail">
          <h5>
            Status : <span>{status}</span>
          </h5>
          <h5>
            Capital :{" "}
            {capital ? <span>{capital[0]}</span> : <span>Not Assigned</span>}
          </h5>
          <div className="coat-of-arms">
            <h5>Coat Of Arms</h5>
            <img
              src={coatOfArms.svg}
              alt={coatOfArms.svg ? `Coat of arms of ${common}` : ""}
              width={"50px"}
            />
          </div>
        </div>

        {/* country languages area */}
        <ul>
          Spoken Languages {` (${Object.keys(languages).length || 0}) :`}
          {Object.keys(languages).map((lang) => (
            <li>{languages[lang]}</li>
          ))}
        </ul>

        {/* country other info area */}
        <div className="info">
          <p>
            Independent ? <span>{independent ? "Yes." : "NO."}</span>
          </p>
          <p>
            UN Member ? <span>{unMember ? "Yes." : "NO."}</span>
          </p>
          <p>
            Land Locked ? <span>{landlocked ? "Yes." : "NO."}</span>
          </p>
          <p>
            Area : <span>{area}</span>
          </p>
          <p>
            Population : <span>{population}</span>
          </p>
          <p>
            Start of Week : <span>{startOfWeek}</span>
          </p>
        </div>

        {/* country currencies area */}
        <ul>
          Currencies with symbol:{" "}
          {Object.keys(currencies).map((currency) => (
            <li>
              {currencies[currency].name}
              <sup>{currencies[currency].symbol}</sup>
            </li>
          ))}
        </ul>

        {/* country timezones area */}
        <ul>
          Timezones :{" "}
          {timezones.map((timezone) => (
            <li>{timezone}</li>
          ))}
        </ul>
      </main>
    );
  } catch (err) {
    console.log(err);
  }
};

export default CountryDetail;
