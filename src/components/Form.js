import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ search, setSearch, setQuery }) => {
  // State for Errors
  const [error, setError] = useState(false);

  // Extract city and country
  const { city, country } = search;

  // Set elements from state
  const handleChange = (e) => {
    // Set state
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  // Handle Submiting form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    // Send to main component
    setQuery(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="Todos los campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="ciudad"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">País: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Form;
