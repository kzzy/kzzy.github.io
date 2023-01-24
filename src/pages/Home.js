import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Background } from '../styles/styles.js';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding-top: 17%;
  padding-left: 19%;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  color: white;
  letter-spacing: 4px;
`;

const Name = styled.p`
  font-size: 100px;
`;

const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  padding-left: 3px;
`;

export default function Home() {
  const homeProps = useSpring({to: {opacity: 1, marginLeft: 0}, 
    from: {opacity: 0, marginLeft: -100},
    delay: 125
  })

  return (
    <Background>
      <HeaderContainer>
        <animated.div style={homeProps}>
          <Name>Austin Hu</Name>
          <Description>
            Hello! I am a Computer Science Graduate<br/> 
            with an interest in Full stack SWE, Data-based roles, and other trinkets.
            <br/> 
            <br/> 
            <br/> 
            <br/> 
            Currently Seeking Junior SWE, Data positions, but am open to all opportunities.
          </Description>
        </animated.div>
      </HeaderContainer>
    </Background>
  )
}