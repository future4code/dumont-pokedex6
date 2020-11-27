import { useContext, useEffect } from 'react';

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

export default function Pokedex() {
  const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    requests.orderPokemons()
  }, [states, setters, requests]);

  const removePokedex = (newPokemon) => {
    const index = states.pokedexList.findIndex((i) => i.id === newPokemon.id);
    const newPokedex = [...states.pokedexHomeList, newPokemon]
    setters.setPokedexHomeList(newPokedex);
    states.pokedexList.splice(index, 1)
  };
  
  return (
    <AppContainer>
      <CardsContainer>
        {states.pokedexList.length === 0 ?
          <Loading src={Pokeball}/>
        : (
          states.pokedexList.map(pokemon => {
            const pokemonName = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.substr(1).toLowerCase()}`
            return (
              <Card
                key={pokemon.id}
                image={pokemon.sprites.front_default}
                number={pokemon.order}
                name={pokemonName}
                removePokedex={() => removePokedex(pokemon)}
              />)
          })
        )
        }
      </CardsContainer>
    </AppContainer>
  );
}
