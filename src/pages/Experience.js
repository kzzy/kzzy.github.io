import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, Accordion } from 'react-bootstrap';
import { Background, HeaderText } from '../styles/styles.js';
import styled from 'styled-components';

const BlackBox = styled.div`
  width: 65%;
  margin: auto;
  background-color: black;
  height: 40em;
  border-radius: 1rem;
`

const AccordionStyle = styled.div`
  position: relative;
  max-height: 36.5rem;
  width: 60%;
  margin: auto;
  top: -38rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  #card1.card-header {
    cursor: pointer;
    background-image: url('/realtorlogo.png');
    background-size: 33vh;
    background-repeat: no-repeat;
    background-position: right;
    height: 4rem;
  }
  
  #card2.card-header {
    cursor: pointer;
    background-image: url('/vihalogo.jpg');
    background-size: 15vh;
    background-repeat: no-repeat;
    background-position: right;
    height: 4rem;
  }
  
  #card3.card-header {
    cursor: pointer;
    background-image: url('/emsilogo.jpg');
    background-size: 33vh;
    background-repeat: no-repeat;
    background-position: right;
    height: 4rem;
  }

  #padding.accordion {
    padding-bottom: 2rem;
  }
`

const CardInAccordion = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 1.2em;

  ul {
    font-weight: 100;
  }
`

function ExpAccordion() {
  const tabs = [
    { id: 1, cardid: "card1", label: "Co-op Software Engineer", 
      description:  <CardInAccordion>
                      Co-op Software Engineer at Realtor.com, Richmond, BC<br/><br/>
                      <ul>
                        <li>Devised and implemented the backend infrastructure for a dockerized application on AWS to provide a performance testing service for other development teams</li>
                        <li>Designed and created GUIs for performance test statuses and results on Slack and GitHub to present data in an easily digestible form and to quickly notify developers of immediate concerns</li>
                        <li>Worked with Webpagetest and Neoload to setup and run customized performance tests</li>
                        <li>Developed and maintained inhouse SaaS applications to assist other teams</li>
                      </ul><br/>
                      September 2019 - April 2020
                    </CardInAccordion>
    },
    { id: 2, cardid: "card2", label: "Administrative Support", 
      description:  <CardInAccordion>
                      Admin Support Volunteer at the Royal Jubilee Hospital, Victoria, BC<br/><br/>
                      <ul>
                        <li>Assessed general inventory, restocking, and ordering further office supplies as needed</li>
                        <li>Collaborated with other team members in completing special assignments assigned by the coordinator</li>
                        <li>Operated printing and scanning hardware to make copies of documents and transfer them to their appropriate departments</li>
                        <li>Participated in team meetings to help devise strategies to tackle ongoing problems</li>
                      </ul><br />
                      January 2019 - July 2019
                    </CardInAccordion>
    },
    { id: 3, cardid: "card3", label: "Data Entry", 
      description: <CardInAccordion>
                    Data Entry Volunteer at Early Music Society of the Islands, Victoria, BC<br/><br/>
                      <ul>
                        <li>Assisted in designing a base spreadsheet format to be used for importing data into a mail database</li>
                        <li>Extracted information from old excel spreadsheets to be compiled into updated versions</li>
                        <li>Compared various methods of data entry to determine the most optimal approach</li>
                      </ul><br />
                      January 2019 - April 2019
                    </CardInAccordion>
    }
  ];

  return (
    tabs.map(tab => (
      <Accordion id="padding" key={tab.id}>
        <Card>
          <Accordion.Toggle id={tab.cardid} as={Card.Header} eventKey={tab.id}>
            <p style={{fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: '400', fontSize: 30}}>
            {tab.label}
            </p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={tab.id}>
            <Card.Body>
              {tab.description}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ))
  )
}

export default function Experience() {
    const titleTextProps = useSpring({to: {opacity: 1, marginTop: 0}, 
        from: {opacity: 0, marginTop: -40},
        delay: 75
      })

    const blackBarProps = useSpring({to: {opacity: 0.5}, 
      from: {opacity: 0},
      delay: 400
    })

    const accordionProps = useSpring({to: {opacity: 1}, 
      from: {opacity: 0},
      delay: 400
    })

    return (
      <Background>
        <HeaderText>
          <animated.div style={titleTextProps}>
              <p>Experience</p>
          </animated.div>
        </HeaderText>
        <animated.div style={blackBarProps}>
          <BlackBox />
        </animated.div>
        <animated.div style={accordionProps}>
          <AccordionStyle>
            <ExpAccordion />
          </AccordionStyle>
        </animated.div>
      </Background>
    )
}