import styled from "styled-components"


export const PokeInfosContainer = styled.main`
    height: 80vh;
    margin-top: 20px;
    display: flex;
    justify-content: center;

    @media(max-width: 420px) {
        flex-direction: column;
        height: 100%;
    }
`

export const ImagesContainer = styled.div`
    align-self: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 420px) {
        width: 95%;
        flex-direction: row;
    }
`

export const ImgWrapper = styled.img `
    height: 25vh;
    background: #313131;
    border-radius: 10px;
    margin: 10px;
    object-fit: cover;
`

export const StatsContainer = styled.div`
    background: #313131;
    align-self: center;
    height: 100%;
    width: 300px;
    display: grid;
    grid-template-rows: 80px repeat(6, 1fr);
    padding: 0 20px;
    margin-left: 30px;
    border-radius: 10px;

    @media(max-width: 420px) {
        width: 80%;
        margin-left: 0;
        height: 420px;
        padding: 20px;
    }
`

export const TitleContainer = styled.h2`
    padding: 0 10px;
    color: #FFFFFF;
    margin: auto;
`

export const StatsView = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr) 30px;
    align-items: center;

    progress {
        height: 40px;
        margin-right: 5px;
    }
`
export const StatsName = styled.label`
    color: #FFFFFF;
    font-weight: bold;
    margin-right: 5px;
    text-transform: uppercase;
`
export const StatsPorcent = styled.label`
    color: #0075FF;
    font-weight: bold;
    margin-right: 5px;
    text-transform: uppercase;
`

export const TypeAndMovesContainer = styled.div`
    display: grid;
    grid-template-rows: 100px 1fr;
    justify-content: space-between;
    align-self: center;
    height: 100%;
    width: 300px;
    margin-left: 30px;

    @media(max-width: 420px) {
        width: 90%;
        grid-template-columns: 1fr;
        margin: 0;
        padding: 0;
    }
`

export const TypesContainer = styled.div`
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 32px;
    border-radius: 10px;

    @media(max-width: 420px) {
        min-width: 320px;
        margin-top: 20px;
    }
`
export const TypesPokemon = styled.span`
    max-height: 50px;
    background-color: #FFFFFF;
    color: #313131;
    font-weight: bold;
    padding: 5px;
    border-radius: 5px;
    text-transform: capitalize;
`
export const MovesContainer = styled.div`
    background: #313131;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    align-items: center;
    padding: 0 20px;
    border-radius: 10px;
    text-align: center;

    @media(max-width: 420px) {
        width: 90%;
        height: 400px;
        margin: 0 auto 20px 0;
    }
`
export const AttacksName = styled.label`
    background-color: #E82616;
    color: #FFFFFF;
    font-weight: bold;
    margin-right: 5px;
    text-transform: uppercase;
    padding: 5px;
    border-radius: 5px;
`
export const TitlePage = styled.h1`
    position: absolute;
    top: 0;
    color: #FFFFFF;
    text-transform: capitalize;

    @media(max-width: 420px) {
        top: 120px;
        left: 35%;
    }
`