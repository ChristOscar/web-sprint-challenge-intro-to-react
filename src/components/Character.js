// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';


const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledDetails = styled.div`
    color: #ffe81f;
    width: 60%;
    height: 60%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-center;
    margin-left: 18%;
    margin-bottom: 5%;
    padding: 2%;
    background-color: #B2D8D8;
    border-radius: 10%;
    border: 5px solid #fff;
    transform: scale(2);
    opacity: 0; 
    animation: ${kf} 0.3s ease-in-out forwards;
    h1 {
        font-size: 2.5rem;
    }
    h3 {
        font-size: 1.5rem;
    }
`


export default function Character(props) {
    const { data } =props;

    return (
            <StyledDetails>
                <h1>{data.name}:</h1>
                <h3>Born in {data.birth_year}</h3>
                <h3>Gender: {data.gender}</h3>
                <h3>Height: {data.height}</h3>
                <h3>Hair Color: {data.hair_color}</h3>
                </StyledDetails>
    )
}