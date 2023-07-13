import { styled } from "styled-components"

export default function Footer({cardsNumber}){
    return(
        <DivFooter>
            <h1>0/{cardsNumber} CONCLUÍDOS</h1>
        </DivFooter>
    )
}

const DivFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: white;
    h1{
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
    }
`;