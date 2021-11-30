import styled from "styled-components";
import React from "react";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 15px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
    border-radius: 100px 0 0 100px;
  }
  & button {
    background-color: #1e90ff;
    font-size: 14px;
    padding: 0 15px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
    border-radius: 0 100px 100px 0;
  }
`;
const ChooseCityLabel = styled.span`
  color: white;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo src={"icon/perfect-day.svg"} />
      <ChooseCityLabel>Search Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>GO</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;