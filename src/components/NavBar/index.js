import React, { useContext, useEffect } from "react";
import { useHistory, useParams, Route } from "react-router-dom";

/*Contexts*/
import GlobalStateContext from "../../global/GlobalStateContext";

import { NavBarContainer, LogoAndButtonsContainer, NavButtons, Logo, TitleContainer, Title } from "./styles"
import LogoPokedex from "../../img/pokebola.png"
import { goToHome, goBack, goToPokedex } from "../../routes/RouteActions.js"

function NavBar(props) {
    const { states, setters, requests } = useContext(GlobalStateContext)
    const history = useHistory()
    const pokemonName = useParams()

    useEffect(() => {
        requests.getPokemonsDetails()
    }, [requests])

    const addOrRemovePokemon = (pokeName) => {
        const ckeckPokedexHomeList = states.pokedexHomeList.filter(poke => poke.name === pokeName)
        const ckeckPokedexList = states.pokedexList.filter(poke => poke.name === pokeName)

        if (Object.entries(ckeckPokedexHomeList).length > 0) {
            const index = states.pokedexHomeList.findIndex((i) => i.id === ckeckPokedexHomeList[0].id);
            const newPokedex = [...states.pokedexList, ckeckPokedexHomeList[0]]
            setters.setPokedexList(newPokedex);
            states.pokedexHomeList.splice(index, 1)
            alert("Pokemon capturado na Pokedex")

        } else if (Object.entries(ckeckPokedexList).length > 0) {
            const index = states.pokedexList.findIndex((i) => i.id === ckeckPokedexList[0].id);
            const newPokedex = [...states.pokedexHomeList, ckeckPokedexList[0]]
            setters.setPokedexHomeList(newPokedex);
            states.pokedexList.splice(index, 1)
            alert("Pokemon libertado da Pokedex")
        }
    }

    return (
        <NavBarContainer>
            <LogoAndButtonsContainer>
                <Logo src={LogoPokedex} alt="Logo Pokebola" onClick={() => goToHome(history)} />

                <Route exact path={'/'} >
                    <NavButtons onClick={() => goToPokedex(history)}>Ir para a Pokedex</NavButtons>
                </Route>

                <Route exact path={'/poke-detail/:name'} >
                    <NavButtons onClick={() => addOrRemovePokemon(pokemonName.name)}>Capturar/Libertar Pokedex</NavButtons>
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