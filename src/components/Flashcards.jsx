import { styled } from "styled-components"
import Flashcard from "./Flashcard";
import { useState } from "react";

export default function Flashcards({cards}){

    const[ turnQuestion, setTurnQuestion] = useState([])
    const[ turnAnswer, setTurnAnswer] = useState([])

    return(
        <ContainerFlashcards>
            {cards.map((card, index) => 
                <Flashcard 
                    card={card} 
                    cards={cards}
                    turnQuestion={turnQuestion}
                    setTurnQuestion={setTurnQuestion}
                    turnAnswer={turnAnswer}
                    setTurnAnswer={setTurnAnswer}
                />
            )}
        </ContainerFlashcards>
    )
}

const ContainerFlashcards = styled.ul`
    display: flex;
    flex-direction: column;
`;