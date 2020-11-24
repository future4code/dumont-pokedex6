import {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../screens/Home';
import Pokedex from '../screens/Pokedex';
import PokemonDetails from '../screens/PokemonDetails';
import NavBar from "../components/NavBar"

export default function Router() {
  const [pokedexList, setPokedexList] = useState([]);
  const [pokedexHomeList, setPokedexHomeList] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <NavBar title={"Lista de pokemons"}/>
          <Home pokedexList={pokedexList} setPokedexList={setPokedexList} pokedexHomeList={pokedexHomeList} setPokedexHomeList={setPokedexHomeList}/>
        </Route>
        <Route exact path={'/pokedex'}>
          <NavBar title={"Pokedex"}/>
          <Pokedex pokedexList={pokedexList} setPokedexList={setPokedexList} pokedexHomeList={pokedexHomeList} setPokedexHomeList={setPokedexHomeList}/>
        </Route>
        <Route exact path={'/poke-detail/:name'}>
          <NavBar />
          <PokemonDetails />
        </Route>
        <Route>
          <div>Ops, error 404, page not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


