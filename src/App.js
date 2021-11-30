import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02d": "/icon/day.svg",
  "02n": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  margin-top: 100px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: black url("jeremy-bishop-8xznAGy4HcY-unsplash.jpg") no-repeat fixed center;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: white;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d71c8b97185461cd53a5ebb919df519`,
    );
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;