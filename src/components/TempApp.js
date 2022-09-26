import React, { useState, useEffect } from "react";
import "./index.css";
const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a69418d7be5e0fafea0ab90cff54d0e8`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">NO DATA FOUND</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <li className="fas fa-street-view"></li>
                {search}
              </h2>
              <h1 className="temp"> {city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}°Cel | Max: {city.temp_min}°Cel
              </h3>
            </div>
            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default TempApp;
