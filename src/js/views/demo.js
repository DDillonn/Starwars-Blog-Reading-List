import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { Card } from "../component/card";


export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container w-75">
      <h1>Characters</h1>
      <div className="d-flex flex-direction-row w-100 cards">
        {store.characters.map((item, index) => {
          return (
            <Card
              name={item.name}
              pic="https://via.placeholder.com/250"
              group="characters"
              first_att="Gender"
              first_loc={item.gender}
              second_att="Hair Color"
              second_loc={item.hair_color}
              third_att="Eye Color"
              third_loc={item.eye_color}
              key={index}
            />
          );
        })}
      </div>

      <br />
      <h1>Planets</h1>
      <div className="d-flex flex-direction-row w-100 ">
        {store.planets.map((item, index) => {
          return (
            <Card
              name={item.name}
              pic="https://via.placeholder.com/250"
              group="planets"
              first_att="Population"
              first_loc={item.population}
              second_att="Climate"
              second_loc={item.climate}
              third_att="Terrain"
              third_loc={item.terrain}
              key={index}
            />
          );
        })}
      </div>
      <br />
      <h1>Starships</h1>
      <div className="d-flex flex-direction-row w-100 ">
        {store.starships.map((item, index) => {
          return (
            <Card
              name={item.name}
              pic="https://via.placeholder.com/250"
              group="starships"
              first_att="Top Speed"
              first_loc={item.max_atmosphering_speed}
              second_att="Crew Size"
              second_loc={item.crew}
              third_att="Cost"
              third_loc={item.cost_in_credits}
              key={index}
            />
          );
        })}
      </div>

      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};