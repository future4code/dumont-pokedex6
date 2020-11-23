import React from "react";
import { useHistory } from "react-router-dom";
import { NavBarContainer } from "./styles"

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
            <h3>Pokemon</h3>
            <button onClick={goToHome}>Home</button>
            <button onClick={goToPokedex}>Pokedex</button>
        </NavBarContainer>
    )
} 

export default NavBar;