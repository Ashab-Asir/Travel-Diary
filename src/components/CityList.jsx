import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
export default function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking the map"></Message>
    );
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city}></CityItem>
      ))}
    </ul>
  );
}
