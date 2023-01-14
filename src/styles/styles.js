import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #171717;
    }
`;

export const Background = styled.div`
    background-size: cover;
    width: 100%;

    &::before { 
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url('/background.jpg');
    background-position: center center;  
    opacity: 0.2;
    content: "";
    z-index: -3;
    }
`;

export const HeaderText = styled.div`
  margin: auto;
  padding-top: 6%;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: white;
  width: 100%;

  p {
    font-size: 70px;
  }
`;

export const BlackBar = styled.div`
  width: 100%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  height: 62vh;

  p {
    position: relative;
    width: 35%;
    left: 15%;
    padding-top: 6%;
    color: #9FFFCB;
    letter-spacing: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 26px;
  }
`