import React from "react";
import { PokeInfosContainer, ImagesContainer, ImgWrapper, StatsContainer, TitleContainer, TypeAndMovesContainer, MovesContainer } from "./styles"


function PokedexDetail () {
  return (
  <PokeInfosContainer>
    <ImagesContainer>
      <ImgWrapper src="https://picsum.photos/100/100" />
    </ImagesContainer>
    <StatsContainer>
      <TitleContainer>Status</TitleContainer>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </StatsContainer>
    <TypeAndMovesContainer>
      <TypesContainer>
      </TypesContainer>
      <MovesContainer>
        <TitleContainer>Ataques</TitleContainer>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </MovesContainer>
    </TypeAndMovesContainer>
  </PokeInfosContainer>
  )
}

export default PokedexDetails;