import {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../screens/Home';
import Pokedex from '../screens/Pokedex';
import PokemonDetails from '../screens/PokemonDetails';
import NavBar from "../screens/NavBar/index"

export default function Router() {
  const [pokedexList, setPokedexList] = useState([]);
  const [pokedexHomeList, setPokedexHomeList] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <NavBar />
        <Route exact path={'/'}>
          <Home pokedexList={pokedexList} setPokedexList={setPokedexList} pokedexHomeList={pokedexHomeList} setPokedexHomeList={setPokedexHomeList}/>
        </Route>
        <NavBar />
        <Route exact path={'/pokedex'}>
          <Pokedex pokedexList={pokedexList} setPokedexList={setPokedexList} pokedexHomeList={pokedexHomeList} setPokedexHomeList={setPokedexHomeList}/>
        </Route>
        <NavBar />
        <Route exact path={'/poke-detail/:name'}>
          <PokemonDetails />
        </Route>
        <Route>
          <div>Ops, error 404, page not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


