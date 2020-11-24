import React from "react";
import { useHistory } from "react-router-dom";
import { NavBarContainer, NavButtons } from "./styles"
import LogoPokedex from "../../img/pokedex.min.png"

function NavBar(){
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    return (
        <NavBarContainer>
            <img src={LogoPokedex} alt="Logo Pokedex Amarelo e Azul" width="150px" height="89px"/>
            <NavButtons onClick={goToHome}>Home</NavButtons>
            <NavButtons onClick={goToPokedex}>Pokedex</NavButtons>
        </NavBarContainer>
    )
} 

export default NavBar;