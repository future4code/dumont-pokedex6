import {BrowserRouter, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

/*Screens*/
import Home from '../screens/Home';
import Pokedex from '../screens/Pokedex';
import PokemonDetails from '../screens/PokemonDetails';
import NavBar from "../components/NavBar"

/*Imagens*/
import PageNotFound from '../img/page404.png';

const PageNotFoundBackground = styled.img`
  width: 99vw;
  height: calc(100vh - 90px);
  margin: 0 auto;
`

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <NavBar title={"Lista de pokemons"}/>
          <Home />
        </Route>
        <Route exact path={'/pokedex'}>
          <NavBar title={"Pokedex"}/>
          <Pokedex />
        </Route>
        <Route exact path={'/poke-detail/:name'}>
          <NavBar />
          <PokemonDetails />
        </Route>
        <Route>
          <NavBar />
          <PageNotFoundBackground src={PageNotFound} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


