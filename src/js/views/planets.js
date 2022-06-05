import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div>
      <div className="jumbotron mx-5">
        <div className="row d-flex justify-content-around">
          <div className="col-6 d-flex justify-content-end">
            <img src="https://placehold.jp/600x400.png" alt=""></img>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <h1 className="display-4">{store.planets[params.theid].name}</h1>
          </div>
        </div>

        <p className="lead">
        The pain itself is love, but the main customer
          such times as low as fatigue and obesity. Soft
          but now that there is always laughter in the planning of pregnancy. Somebody's gonna do it
          Maecenas ultricies mi eget mauris quiver. Mauris nunc congue nisi
          of life But that's a shameful thing to stop the pain of the bananas overall. The arrows
          the carvings will not be cured during pregnancy. The pillow is busy now
          flattering free weekend There is a great need for the medication to be a pain. Now
          the cushion of the wise and unconventional. Porttitor leo a diam sollicitudin tempor.
          For a lot of people there's no economic ferry for the lakes of mourning. In mass
          nor do I want to miss the price of that dark brown. Let the film sit
          he loves the magic. There is no bananas for the torturer at the author's side. Put down the microphone
          and that the consequences should always be monitored for free therapy. There are a few
          easy to go tomorrow and hate the immune system.
        </p>
        <hr className="my-4"></hr>
        <div className="row">
          <div className="col-2 text-center">Population</div>
          <div className="col-2 text-center">Climate</div>
          <div className="col-2 text-center">Terrain</div>
          <div className="col-2 text-center">Diameter</div>
          <div className="col-2 text-center">Gravity</div>
          <div className="col-2 text-center">Orbital Period</div>
        </div>
        <div className="row">
          <div className="col-2 text-center">
            {store.planets[params.theid].population}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].climate}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].terrain}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].diameter}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].gravity}
          </div>
          <div className="col-2 text-center">
            {store.planets[params.theid].orbital_period}
          </div>
        </div>
        <br></br>
        <p className="lead my-3 text-center">
          <Link to="/">
            <span className="btn btn-primary btn-lg" href="#" role="button">
              Back home
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

Planets.propTypes = {
  match: PropTypes.object,
};