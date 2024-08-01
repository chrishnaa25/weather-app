import React from "react";

function Result({ weatherData }) {
  return (
    <div className="shadow-xl pb-3">
      {weatherData.length !== 0 ? (
        <>
          <h2 className="text-4xl text-center mt-5">{weatherData.name}</h2>
          <div className="flex justify-around text-xl mt-3">
            <div>Max Temp: {weatherData.main.temp_max}</div>
            <div>Min Temp: {weatherData.main.temp_min}</div>
          </div>
          <div className="flex justify-around text-xl mt-3 items-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
            <div>{weatherData.weather[0].main}</div>
          </div>
        </>
      ) : (
        <div className="text-center text-4xl p-4">Please Enter A City Name</div>
      )}
    </div>
  );
}

export default Result;
