import styled from "styled-components";

export const AddToCartButtonstyled = styled.button`
  background-color: lightgreen;
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 75%;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  :active {
    background-color: green;
    border: 3px solid lightgreen;
    color: white;
  }
`;
