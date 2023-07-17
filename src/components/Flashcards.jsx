import { styled } from "styled-components"
import Flashcard from "./Flashcard";
import { useState } from "react";

export default function Flashcards({ cards, setCounter, counter }) {

    return (
        <ContainerFlashcards>
            {cards.map((card) =>
                <Flashcard
                    card={card}
                    cards={cards}
                    setCounter={setCounter}
                    counter={counter}
                />
            )}
        </ContainerFlashcards>
    )
}

const ContainerFlashcards = styled.ul`
    display: flex;
    flex-direction: column;
`;