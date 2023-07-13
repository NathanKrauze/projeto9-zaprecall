import { styled } from "styled-components"
import Flashcard from "./Flashcard";

export default function Flashcards(){
    return(
        <ContainerFlashcards>
            <Flashcard />
        </ContainerFlashcards>
    )
}

const ContainerFlashcards = styled.ul`
    display: flex;
    flex-direction: column;
`;