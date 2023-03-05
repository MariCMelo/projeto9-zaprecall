
import { useState } from 'react';
import './App.css';




import party from "./components/assets/party.png"
import sad from "./components/assets/sad.png"


import Header from './components/Header';
import Deck from './components/Deck';
import Flashcards from './components/Flashcards';
import Results from './components/Results';

export default function App() {

  const [cards, setCards] = useState({});
  const [color, setColor] = useState ("black");
  const [selectedQuestion, setSelectedQuestion] = useState ()
  
    








  return (
    <div className='corpo'>
      <div className='container'>

        <div className='logo'>
        <img src={logo} alt="Logo" />
        <span>ZapRecall</span>

        <div className='pergunta'>Pergunta 1
        <ion-icon name="play-outline"></ion-icon>
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        <ion-icon name="help-circle-outline"></ion-icon>
        <ion-icon name="close-circle-outline"></ion-icon>
        </div>

        <div className='card-pergunta'>teste
        <div className='container-button'><button>sim</button>
        <button> quase</button>
        <button>não</button></div>
        
        </div>
        </div>
      </div>
      <div className='rodape'> 0/5 concluidos</div>
    </div>


  )

}


<Container>
  <Header></Header>
  <Deck></Deck>
  <Flashcards></Flashcards>
  <Results></Results>
</Container>


const Container = styled.div`
  max-width: 375px;
  height: 667px;
  background-color: green;
  border-color: #DBDBDB;
  display: flex;
  flex-direction: column;
  align-items: center;
`
