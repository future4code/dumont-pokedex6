import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../screens/Home';
import Pokedex from '../screens/Pokedex';
import PokemonDetails from '../screens/PokemonDetails';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route exact path={'/pokedex'}>
          <Pokedex />
        </Route>
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

export default Router;

