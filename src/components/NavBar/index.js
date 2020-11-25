import React from "react";
import { useHistory, Route } from "react-router-dom";
import { NavBarContainer, NavButtons, Logo } from "./styles"
import LogoPokedex from "../../img/pokebola.png"
import { goToHome, goBack, goToPokedex } from "../../routes/RouteActions.js"

function NavBar() {
    const history = useHistory();

    return (
        <NavBarContainer>
            <div>
                <Logo src={LogoPokedex} alt="Logo Pokebola" onClick={() => goToHome(history)} />
            </div>
            <div>
                <Route exact path={'/'}>
                    <NavButtons onClick={() => goToPokedex(history)}>Ir para a Pokedex</NavButtons>
                </Route>
                <Route exact path={'/pokedex'}>
                    <NavButtons onClick={() => goToHome(history)}>Home</NavButtons>
                </Route>
                <NavButtons onClick={() => goBack(history)}>Voltar</NavButtons>
            </div>
        </NavBarContainer>
    )
}

export default NavBar;