import styled from "styled-components"


export const PokeInfosContainer = styled.main`
    height: 80vh;
    margin: 20px 10vw;
    display: flex;
`

export const ImagesContainer = styled.div`
    align-self: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImgWrapper = styled.img `
    height: 25vh;
    background: #f1f1f1;
    border-radius: 10px;
    margin: 10px;
`

export const StatsContainer = styled.div`
    background: #f1f1f1;
    align-self: center;
    height:100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`

export const TitleContainer = styled.h2`
    align-self: center;
`

export const TypeAndMovesContainer = styled.div`
    align-self: center;
    height: 100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export const TypesContainer = styled.div`
    background: #f1f1f1;
    display: flex;
    justify-content: space-around;
`


export const MovesContainer = styled.div`
    background: #f1f1f1;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`

// const DetailsContainer = styled.div `
//     border-radius: 10px;
//     display: block;
//     float: left;
//     min-height: 100px;
//     position: relative;
//     width: 100%;
//     background-color: #30a7d7;
//     color: white;
// `
