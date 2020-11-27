import React from "react";
import { useHistory, Route } from "react-router-dom";
import { NavBarContainer, LogoAndButtonsContainer, NavButtons, Logo, TitleContainer, Title } from "./styles"
import LogoPokedex from "../../img/pokebola.png"
import { goToHome, goBack, goToPokedex } from "../../routes/RouteActions.js"

function NavBar(props) {
    const history = useHistory();

    return (
        <NavBarContainer>
            <LogoAndButtonsContainer>
                <Logo src={LogoPokedex} alt="Logo Pokebola" onClick={() => goToHome(history)} />

                <Route exact path={'/'} >
                    <NavButtons onClick={() => goToPokedex(history)}>Ir para a Pokedex</NavButtons>
                </Route>

                <Route exact path={'/poke-detail/:name'} >
                    <NavButtons onClick={() => goToPokedex(history)}>Ir para a Pokedex</NavButtons>
                </Route>
                
            </LogoAndButtonsContainer>
            <TitleContainer>
                <Title>{props.title}</Title>
            </TitleContainer>

            <Route exact path={'/pokedex'} >
                <NavButtons onClick={() => goBack(history)}>Voltar</NavButtons>
            </Route>
            <Route exact path={'/poke-detail/:name'} >
                <NavButtons onClick={() => goBack(history)}>Voltar</NavButtons>
            </Route>

        </NavBarContainer>
    )
}

export default NavBar;