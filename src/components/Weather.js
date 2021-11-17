import React from "react";
import PropTypes from "prop-types";

const Weather = ({ result }) => {
  const { name, main } = result;

  if (!name) return null;

  const currentTemp = parseFloat(main.temp - 273.15, 10).toFixed(1);
  const maxTemp = parseFloat(main.temp_max - 273.15, 10).toFixed(1);
  const minTemp = parseFloat(main.temp_min - 273.15, 10).toFixed(1);

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {currentTemp}
          <span>&#x2103;</span>
        </p>
        <p>
          Temperatura máxima: {maxTemp}
          <span>&#x2103;</span>
        </p>
        <p>
          Temperatura mínima: {minTemp}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Weather;
