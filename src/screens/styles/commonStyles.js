import styled from 'styled-components';

export const AppContainer = styled.main`
  display: grid;
  grid-template-rows: 50px 100px 1fr;
  width: 80%;
  margin: 20px auto;
`
export const CardsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  gap: 20px;
  box-sizing: border-box;

  @media(max-width: 420px) {
    grid-template-columns: 1fr;
  }
` 
export const Loading = styled.img`
  width: 50vw;
  height: 50vh;
  margin: 120px auto;
` 