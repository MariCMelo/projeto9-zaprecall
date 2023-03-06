import { useState } from 'react';

import Header from './components/Header';
import Deck from './components/Deck';
import Flashcards from './components/Flashcards';
import Results from './components/Results';

export default function App() {
  const [counter, setCounter] = useState (0);
  return (
  <Container>
  <Header/>
  <Deck
  />
  <Results
  counter={counter}
  />
  </Container> 
  )

const Container = styled.div`
  max-width: 375px;
  height: 667px;
  background-color: green;
  border-color: #DBDBDB;
  display: flex;
  flex-direction: column;
  align-items: center;
`

}