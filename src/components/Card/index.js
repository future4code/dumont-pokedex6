import { Route, useHistory } from 'react-router-dom';

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
  const { image, number, name, addPokedex, removePokedex } = props
  const history = useHistory();

  return (
    <CardContainer>
      <PokemonImageContainer>
        <PokemonImage src={image} alt={name}/>
      </PokemonImageContainer>
      <PokemonNumber>N° {number < 10 ? `00${number}` : `0${number}`}</PokemonNumber>
      <PokemonName>{name}</PokemonName>
      <ButtonContainer>
        <Route exact path={'/'}>
          <CaptureButton onClick={addPokedex}>Capturar</CaptureButton>
        </Route>
        <Route exact path={'/pokedex'}>
          <CaptureButton onClick={removePokedex}>Libertar</CaptureButton>
        </Route>
        <ViewDetailsButton onClick={() => history.push(`/poke-detail/${name.toLowerCase()}`)}>Ver detalhes</ViewDetailsButton>
      </ButtonContainer>
    </CardContainer>
  );
}