import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
  font-size: 12px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const LinkElement = styled(Link)`
  color: black;
  border: 1px solid black;
  padding: 10px;
  border-radius: 50px;
  :active {
    background: black;
    color: white;
  }
`;

export const CartElement = styled.div`
  color: black;
  border: 1px solid black;
  padding: 10px;
  border-radius: 50px;
  :active {
    background: black;
    color: white;
  }
`;
