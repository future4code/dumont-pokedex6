import React from "react";
import { useHistory } from "react-router-dom";
import { NavBarContainer, NavButtons, Logo } from "./styles"
import LogoPokedex from "../../img/pokebola.png"
import { goToHome, goBack, goToPokedex} from "../../routes/RouteActions.js"

function NavBar(){
    const history = useHistory();

    // const url = window.location.href;
    // const checkUrl = url.includes("home")

    return (
        <NavBarContainer>
            <div>
            <Logo src={LogoPokedex} alt="Logo Pokebola" onClick={() => goToHome(history)}/>
            </div>
            <div>
            <NavButtons onClick={() => goToHome(history)}>Home</NavButtons>
            <NavButtons onClick={() => goBack(history)}>Voltar</NavButtons>
            <NavButtons onClick={() => goToPokedex(history)}>Ir para a Pokedex</NavButtons>
            </div>
        </NavBarContainer>
    )
} 

export default NavBar;