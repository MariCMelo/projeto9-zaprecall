import Flashcards from "./Flashcards";

export default function Deck(counter, setCounter){
const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

return (
    <ContainerDeck className = "Deck">
      {cards.map((flashcard, index) => (
        <Flashcards
          key={index}
          i={index + 1}
          question={flashcard.question}
          answer={flashcard.answer}
          counter={counter}
          setCounter={setCounter}
        />
      ))}
    </ContainerDeck>
  );
};

const ContainerDeck = styled.button`
width: 300px;
height: 65px;
margin-bottom: 25px;
box-sizing: border-box;
padding: 15px;
display: flex;
align-items: center;
color: #333333;
background-color: white;
border-radius: 5px;
font-family: 'Recursive', sans-serif;
font-weight: 700;
font-size: 16px;
box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);
`