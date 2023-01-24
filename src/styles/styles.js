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
  padding-top: 13vh;
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
  display: flex;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 500px;

  #about-p {
    min-width: 550px;
    width: 35%;
    top: 80px;
    color: #9FFFCB;
    letter-spacing: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 26px;
  }

  #projects-p {
    width: 90%;
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    text-align: center;
    margin: auto;
  }
`