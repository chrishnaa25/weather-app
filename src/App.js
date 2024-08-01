import React, { useEffect, useState } from "react";
import Result from "./Components/Result";
import Search from "./Components/Search";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const searchWeatherData = () => {
    if (search !== "") {
      axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d885aa1d783fd13a55050afeef620fcb`
      )
        .then((response) => {
          // console.log(response.data);
          setWeather(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="w-[1240px] mx-auto mt-2 p-3 h-[400px]">
      <Search
        searchData={search}
        onChange={handleInput}
        onClick={searchWeatherData}
      />
      <Result weatherData={weather} />
    </div>
  );
}

export default App;
