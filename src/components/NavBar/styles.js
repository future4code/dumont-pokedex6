import styled from "styled-components";

export const NavBarContainer = styled.div`
  border-bottom: 3px solid #FFFFFF;
  height: 80px;
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background-color: #E82616;

  @media(max-width: 420px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;
  }
`;

export const LogoAndButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly; 
`

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @media(max-width: 420px) {
    margin-right: 20px;
  }
`;

export const NavButtons = styled.button`
  max-width: 200px; 
  max-height: 50px;
  background-color: #313131;
  color: #f2f2f2;
  font-weight: bold;
  padding: 10px;
  margin-left: 32px;
  border-radius: 10px;
  border: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media(max-width: 420px) {
    width: 150px;
    font-size: 18px;
    max-height: 60px;
    margin-left: 0;
  }

`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Title = styled.h1`
  color: #FFFFFF;
  margin: 0 auto;
`