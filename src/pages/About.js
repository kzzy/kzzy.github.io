import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, BlackBar, HeaderText } from '../styles/styles.js';
import styled from 'styled-components';

const CardStyle = styled.div`
  #about.card {
    max-width: 35%;
    top: -52vh;
    left: 55vw;
    width: 42em;
    height: 23em;
    background: grey;
    border-radius: 5px;
    background-image: url('/about-card.jpg');
    background-size: cover;
    background-position: center center;
    filter: brightness(90%);
    transition: box-shadow 0.5s;
    box-shadow: 0px 10px 30px -5px rgb(0, 0, 0);
    will-change: transform;
  }
`

function Card() {
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 1.4) / 20, 1.05]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 450, friction: 150 } }))

  return (
    <animated.div
      id="about"
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}

export default function About() {
  const titleTextProps = useSpring({to: {opacity: 1, marginTop: 0}, 
                          from: {opacity: 0, marginTop: -40},
                          delay: 75
                        })

  const blackBarProps = useSpring({to: {width: '100%' },
                          from: {width: '0%' },
                          delay: 325
                        })

  const blackBarContentProps = useSpring({to: {opacity: 1},
                          from: {opacity: 0},
                          delay: 825
                        })

    return (
      <Background>
        <HeaderText>
          <animated.div style={titleTextProps}>
              <p>About Me</p>
          </animated.div>
        </HeaderText>
        <animated.div style={blackBarProps}>
          <BlackBar>
            <animated.div style={blackBarContentProps}>
              <p>
                I'm a Computer Science student on my final year
                at the University of Victoria. I enjoy building and
                contributing to cool projects. My work has consisted
                of personal projects, volunteer work, and an internship
                which are all covered on the website.
              </p>
            </animated.div>
          </BlackBar>
        </animated.div>
        <CardStyle>
          <animated.div style={blackBarContentProps}>
              <Card />
          </animated.div>
        </CardStyle>
      </Background>
    )
}