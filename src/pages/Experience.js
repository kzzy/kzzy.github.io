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
    background-image: url('/schneiderelectriclogo.png');
    background-size: 170px 120px;
    background-repeat: no-repeat;
    background-position: right;
    height: 4rem;
  }  

  #card2.card-header {
    cursor: pointer;
    background-image: url('/realtorlogo.png');
    background-size: 260px 64px;
    background-repeat: no-repeat;
    background-position: right;
    height: 4rem;
  }
  
  #card3.card-header {
    cursor: pointer;
    background-image: url('/vihalogo.jpg');
    background-size: 150px 64px;
    background-repeat: no-repeat;
    background-position: right;
    height: 4rem;
  }
  
  #card4.card-header {
    cursor: pointer;
    background-image: url('/emsilogo.jpg');
    background-size: 260px 180px;
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
    { id: 1, cardid: "card1", label: "Co-op Software Designer", 
      description:  <CardInAccordion>
                      Co-op Software Designer at Schneider Electric, Victoria, BC<br/><br/>
                      <ul>
                        <li>Developed client facing components, stylesheets, and updated the ASP.NET backend for an Angular web application as part of an complete overhaul from a legacy codebase</li>
                        <li>Created REST API calling services under the microservices architecture in Angular, and tested using Postman</li>
                        <li>Written over 75 unit tests using the Jasmine BDD framework and executed in Karma</li>
                        <li>Worked under Agile methodology using the SCRUM framework as a software development team member to design and deliver solutions</li>
                      </ul><br/>
                      September 2021 - December 2021
                    </CardInAccordion>
    },
    { id: 2, cardid: "card2", label: "Co-op Software Engineer", 
      description:  <CardInAccordion>
                      Co-op Software Engineer at Realtor.com, Richmond, BC<br/><br/>
                      <ul>
                        <li>Built a bash-based performance test results notification system using webhooks and integrated with Jenkins CI/CD pipelines to monitor performance goals across development teams</li>
                        <li>Established a SaaS performance testing platform on AWS that included CloudFormation, EC2, Autoscaling, ECS, S3, and CloudWatch to replace a 3rd party subscription based application, saving thousands of dollars yearly</li>
                        <li>Deployed new features for a series of inhouse websites that were using a combination of React or AngularJS for the frontend, and Express.js, Node.js, DynamoDB for the backend</li>
                        <li>Implemented 100+ automated performance tests on various schedules with test data streamed to AWS S3 buckets and visualized on Grafana to detect performance degradation</li>
                        <li>Worked with Webpagetest and Neoload to setup and run customized performance tests</li>
                      </ul><br/>
                      September 2019 - April 2020
                    </CardInAccordion>
    },
    { id: 3, cardid: "card3", label: "Administrative Support", 
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
    { id: 4, cardid: "card4", label: "Data Entry", 
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