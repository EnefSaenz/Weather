import React, { Fragment, useEffect, useState } from "react";
import Error from "./components/Error";
import Form from "./components/Form";
import Header from "./components/Header";
import Weather from "./components/Weather";

function App() {
  // State for form
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const callAPI = async () => {
      if (query) {
        const keyAPI = "77e2bf64a1e05067cdc1eccd7188240f";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${keyAPI}`;

        const response = await fetch(url);
        const result = await response.json();

        setResult(result);
        setQuery(false);

        // Verify results
        result.cod === "404" ? setError(true) : setError(false);
      }
    };
    callAPI();
    // eslint-disable-next-line
  }, [query]);

  let component;
  if (error) {
    component = <Error message="No hay resultados" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header title="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
