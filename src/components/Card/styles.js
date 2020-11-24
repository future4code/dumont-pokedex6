import styled from 'styled-components';

export const CardContainer = styled.section`
  min-width: 150px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 32px;
  box-shadow: 10px 5px 10px 3px rgba(0, 0, 0, 0.7);

  @media(max-width: 1150px) {
    margin-bottom: 50px;
    min-height: 330px;
  }
`
export const PokemonImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 170px;
  max-height: 170px;
  background-color: #F2F2F2;
  border-radius: 5px;
`
export const PokemonImage = styled.img`
  object-fit: cover;
`
export const PokemonNumber = styled.span`
  margin: 0px 0px 10px 10px;
  font-size: 12px;
  opacity: 0.6;
  font-weight: bold;
  margin-top: 5px;
`
export const PokemonName = styled.p`
  font-size: 22px;
  color: #313131;
  font-weight: bold;
  margin: 0;
  margin-left: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 5px 0 5px;

  @media(max-width: 1150px) {
    flex-direction: column;
  }
`
export const CaptureButton = styled.button`
  background-color: #E3350D;
  color: #FFFFFF;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media(max-width: 1150px) {
    width: 90%;
  }
`
export const ViewDetailsButton = styled.button`
  background-color: #30A7D7;
  color: #FFFFFF;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media(max-width: 1150px) {
    width: 90%;
    margin-top: 10px;
  }
`