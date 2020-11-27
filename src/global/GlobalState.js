import React, { useState } from "react";
import axios from "axios";

/*Constants*/
import { BASE_URL } from "../constants/urls";

/*Context*/
import GlobalStateContext from "./GlobalStateContext";

/*Hooks*/
import useRequestData from '../hooks/useRequestData';

const GlobalState = (props) => {
  const [pokedexList, setPokedexList] = useState([]);
  const [pokedexHomeList, setPokedexHomeList] = useState([]);
  const pokemonsName = useRequestData(BASE_URL, [])

  const getPokemonsDetails = async () => {
    let copyArray = []
    try {
      for (const pokemon of pokemonsName) {
        const res = await axios.get(`${BASE_URL}${pokemon.name}`)
        copyArray.push(res.data)
      }
    } catch (error) {
      console.log(error)
    }

    if (pokedexHomeList.length === 0 && pokedexList.length === 0) {
      setPokedexHomeList(copyArray)
    } 

  }

  const orderPokemons = () => {
    let orderedPokemons = []
    orderedPokemons = pokedexHomeList.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      if (a.order < b.order) {
        return -1;
      }
      return 0;
    })
    setPokedexHomeList(orderedPokemons);
  }

  const states = { pokedexHomeList, pokedexList };
  const setters = { setPokedexHomeList, setPokedexList };
  const requests = { getPokemonsDetails, orderPokemons };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;