import React, { useEffect, useContext } from 'react';

/*Contexts*/
import GlobalStateContext from "../../global/GlobalStateContext";

/*Components*/
import Card from "../../components/Card";

/*Imagens*/
import Pokeball from '../../img/pokebola.gif'

/*Tags Styleds*/
import {
  AppContainer,
  CardsContainer,
  Loading
} from '../styles/commonStyles';


export default function Home() {
  const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    requests.getPokemonsDetails();
    requests.orderPokemons()
  }, [states, setters, requests]);

  const addPokedex = (newPokemon) => {
    const index = states.pokedexHomeList.findIndex((i) => i.id === newPokemon.id);
    const newPokedex = [...states.pokedexList, newPokemon]
    setters.setPokedexList(newPokedex);
    states.pokedexHomeList.splice(index, 1)
  };

  return (
    <AppContainer>
      <CardsContainer>
        {states.pokedexHomeList.length === 0 ?
          <Loading src={Pokeball} />
          : (
            states.pokedexHomeList.map(pokemon => {
              return (
                <Card
                  key={pokemon.id}
                  image={pokemon.sprites.front_default}
                  number={pokemon.order}
                  name={pokemon.name}
                  addPokedex={() => addPokedex(pokemon)}
                />)
            })
          )
        }
      </CardsContainer>
    </AppContainer>
  );
}
