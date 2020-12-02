import Router from '../src/routes'

/*Contexts*/
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
