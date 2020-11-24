/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*Hooks*/
import useRequestData from '../../hooks/useRequestData';

/*Components*/
import Card from "../../components/Card";

/*Imagens*/
import Pokeball from '../../img/pokebola.gif'

/*Tags Styleds*/
import {
  AppContainer,
  CardsContainer,
  Loading
} from './styles';

/*Constantes reutulizáveis*/
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

export default function Home() {
  const pokemonsName = useRequestData(baseUrl, []) || []
  const [pokemonsDetails, setPokemonsDetails] = useState([]);

  useEffect(() => {
    getPokemonsDetails()
  }, [pokemonsName])

  const getPokemonsDetails = async () => {
    let copyArray = []
    try {
      for (const pokemon of pokemonsName) {
        const res = await axios.get(`${baseUrl}${pokemon.name}`)
        copyArray.push(res.data)
      }
    } catch (error) {
      console.log(error)
    }
    setPokemonsDetails(copyArray)
  }

  return (
    <AppContainer>
      <CardsContainer>
        {pokemonsDetails.length === 0 ?
          <Loading src={Pokeball}/>
        : (
          pokemonsDetails.map(pokemon => {
            const pokemonName = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.substr(1).toLowerCase()}`
            return (
              <Card
                key={pokemon.id}
                image={pokemon.sprites.front_default}
                number={pokemon.order}
                name={pokemonName}
                powers={pokemon.types}
              />)
          })
        )
        }
      </CardsContainer>
    </AppContainer>
  );
}
