
/*Tags Styleds*/
import {
  CardContainer,
  PokemonImageContainer,
  PokemonImage,
  PokemonNumber,
  PokemonName,
  ButtonContainer,
  CaptureButton,
  ViewDetailsButton
} from './styles';

export default function Card(props) {
  const { image, number, name } = props

  return (
    <CardContainer>
      <PokemonImageContainer>
        <PokemonImage src={image} />
      </PokemonImageContainer>
      <PokemonNumber>N° {number < 10 ? `00${number}` : `0${number}`}</PokemonNumber>
      <PokemonName>{name}</PokemonName>
      <ButtonContainer>
        <CaptureButton>Capturar</CaptureButton>
        <ViewDetailsButton>Ver detalhes</ViewDetailsButton>
      </ButtonContainer>
    </CardContainer>
  );
}