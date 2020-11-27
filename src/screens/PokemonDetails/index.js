import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

/*Constants*/
import { BASE_URL } from "../../constants/urls";

import {
  PokeInfosContainer,
  ImagesContainer,
  ImgWrapper,
  StatsContainer,
  TitleContainer,
  StatsView,
  StatsName,
  StatsPorcent,
  TypeAndMovesContainer,
  TypesContainer,
  TypesPokemon,
  MovesContainer,
  AttacksName,
  TitlePage
} from "./styles"

export default function PokedexDetails() {
  const [pokemon, setPokemon] = useState({})
  const pokemonName = useParams()
  const moves = []


  useEffect(() => {
    axios.get(`${BASE_URL}${pokemonName.name}`)
      .then(res => {
        setPokemon(res.data)
      }).catch(error => {
        console.log(error)
      })
  }, [pokemonName])


  for (let i = 0; i < 5; i++) {
    if (Object.entries(pokemon).length > 0)
      moves.push(pokemon.moves[i].move)
  }

  return (
    <div>
      {Object.entries(pokemon).length > 0 &&
        <PokeInfosContainer>
          <TitlePage>{`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.substr(1).toLowerCase()}`}</TitlePage>
          <ImagesContainer>
            <ImgWrapper src={pokemon.sprites.front_default} />
            <ImgWrapper src={pokemon.sprites.back_default} />
          </ImagesContainer>
          <StatsContainer>
            <TitleContainer>Poderes:</TitleContainer>
            {pokemon.stats.map((stat, index) => {
              return (
                <StatsView key={index}>
                  <StatsName>{stat.stat.name}:</StatsName>
                  <progress value={stat.base_stat} max="100"></progress>
                  <StatsPorcent>{stat.base_stat}%</StatsPorcent>
                </StatsView>
              )
            })}
          </StatsContainer>
          <TypeAndMovesContainer>
            <TypesContainer>
              {pokemon.types.length > 0 &&
                pokemon.types.map((type, index) => {
                  const powerName = `${type.type.name.charAt(0).toUpperCase()}${type.type.name.substr(1).toLowerCase()}`
                  return (
                    <div key={index}>
                      <TypesPokemon>{powerName}</TypesPokemon>
                    </div>
                  )
                })
              }
            </TypesContainer>
            <MovesContainer>
              <TitleContainer>Principais ataques:</TitleContainer>
              {moves.map((move, index) => {
                return <AttacksName key={index}>{move.name}</AttacksName>
              })}
            </MovesContainer>
          </TypeAndMovesContainer>
        </PokeInfosContainer>
      }
    </div>
  )
}