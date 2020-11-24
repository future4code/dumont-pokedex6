import React from "react";
import { useHistory } from "react-router-dom";
import { NavBarContainer, NavButtons, Logo } from "./styles"
import LogoPokedex from "../../img/pokebola.png"

function NavBar(){
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const url = window.location.href;

    return (
        <NavBarContainer>
            <div>
            <Logo src={LogoPokedex} alt="Logo Pokebola" onClick={() => goToHome(history) }/>
            </div>
            <div>
            <NavButtons onClick={goToHome}>Home</NavButtons>
            <NavButtons onClick={goToPokedex}>Ver minha Pokedex</NavButtons>
            <NavButtons>Voltar</NavButtons>
            </div>
        </NavBarContainer>
    )
} 

export default NavBar;