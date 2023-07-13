import { styled } from "styled-components"
import Flashcard from "./Flashcard";

export default function Flashcards({cards}){
    return(
        <ContainerFlashcards>
            {cards.map((card, index) => <Flashcard card={card} cards={cards}/>) }
        </ContainerFlashcards>
    )
}

const ContainerFlashcards = styled.ul`
    display: flex;
    flex-direction: column;
`;