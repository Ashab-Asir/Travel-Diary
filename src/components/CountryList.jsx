import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";
export default function CitList() {
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking the map"></Message>
    );
  }
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country }];
    } else {
      return arr;
    }
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country}></CountryItem>
      ))}
    </ul>
  );
}
