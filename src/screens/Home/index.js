import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
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

export default function Home(props) {
  const { pokedexList, setPokedexList, pokedexHomeList, setPokedexHomeList } = props
  const pokemonsName = useRequestData(baseUrl, [])
  const history = useHistory();

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
    
    if (pokedexHomeList.length === 0 && pokedexList.length === 0) {
      setPokedexHomeList(copyArray)
    } else {
      orderPokemons()
    }    
  }

  const addPokedex = (newPokemon) => {
    const index = pokedexHomeList.findIndex((i) => i.id === newPokemon.id);
    const newPokedex = [...pokedexList, newPokemon]
    setPokedexList(newPokedex);
    pokedexHomeList.splice(index, 1)
  };

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

  useEffect(() => {
    getPokemonsDetails()
  }, [pokemonsName])

  return (
    <AppContainer>
      <button onClick={() => history.push('/pokedex')}>Pokedex</button>
      <CardsContainer>
        {pokedexHomeList.length === 0 ?
          <Loading src={Pokeball} />
          : (
            pokedexHomeList.map(pokemon => {
              const pokemonName = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.substr(1).toLowerCase()}`
              return (
                <Card
                  key={pokemon.id}
                  image={pokemon.sprites.front_default}
                  number={pokemon.order}
                  name={pokemonName}
                  addPokedex={() => addPokedex(pokemon)}
                />)
            })
          )
        }
      </CardsContainer>
    </AppContainer>
  );
}
