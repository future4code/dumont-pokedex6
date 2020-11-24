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

export default function Pokedex(props) {
  const { pokedexList, pokedexHomeList, setPokedexHomeList } = props

  const removePokedex = (newPokemon) => {
    const index = pokedexList.findIndex((i) => i.id === newPokemon.id);
    const newPokedex = [...pokedexHomeList, newPokemon]
    setPokedexHomeList(newPokedex);
    pokedexList.splice(index, 1)
  };
  
  return (
    <AppContainer>
      <CardsContainer>
        {pokedexList.length === 0 ?
          <Loading src={Pokeball}/>
        : (
          pokedexList.map(pokemon => {
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
