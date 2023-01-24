import React, {useState} from 'react';
import '../styles/projects.css';
import { useSpring, animated } from 'react-spring';
import { Modal, Carousel } from 'react-bootstrap';
import { Background, BlackBar, HeaderText } from '../styles/styles.js';

export default function Projects() {
    const [perfProjectModal, setPerfProjectModal] = useState(false);

    const handleClosePerfProjectModal = () => setPerfProjectModal(false);
    const handleOpenPerfProjectModal = () => setPerfProjectModal(true);

    const titleTextProps = useSpring({to: {opacity: 1, marginTop: 0}, 
        from: {opacity: 0, marginTop: -40},
        delay: 75
        })

    const blackBarProps = useSpring({to: {width: '100%', marginLeft: '0%'},
        from: {width: '0%', marginLeft: '50%'},
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
                    <p>Projects</p>
                    <h2 style={{position: 'absolute', fontFamily: 'Raleway, sans-serif', fontStyle: 'normal', fontWeight: '400', fontSize: '17px', textAlign: 'center', color: 'white', margin: 'auto', width: '100%', marginTop: '-25.25px', 'min-width': '600px'}}>
                        Personal Projects, Work Projects, and other things done out of interest
                    </h2>
                </animated.div>
            </HeaderText>
            <animated.div style={blackBarProps}>
                <BlackBar>
                    <animated.div style={blackBarContentProps}>
                        <div style={{marginTop: '10px', width: '100vw', display: 'flex', 'align-items': 'center'}}>
                            <div className="project-card" style={{left: '10vw', width: '20vw', 'min-width': '350px'}}>
                                <img src={'/k6projecticon.png'} alt="Website" style={{width: '128px', height: '128px', marginTop: '15%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}></img>
                                <h1 style={{color: 'rgba(0, 110, 255, 0.7)', fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: '400', fontSize: '35px', textAlign: 'center',  marginTop: '10%'}}>
                                    Performance Test 
                                </h1>
                                <p id="projects-p" style={{fontSize: '17px'}}>
                                    During my co-op at Realtor.com, I setup the framework for a service offering performance testing using K6 that is hosted on AWS to eventually be integrated into the Jenkins pipeline or manually ran as a job.
                                </p>
                                <img role="button" onClick={handleOpenPerfProjectModal} src={'/imagesicon.webp'} title="Performance Test" alt='Repository' style={{width: '64px', height: '64px', position: 'absolute', left: '0', bottom: '0'}}></img>
                            </div>
                            <div className="project-card" style={{left: '20vw', width: '20vw', 'min-width': '350px'}}>
                                <img src={'/edenprojecticon.png'} alt="Website" style={{width: '128px', height: '128px', marginTop: '15%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}></img>
                                <h1 style={{color: 'rgba(0, 110, 255, 0.7)', fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: '400', fontSize: '35px', textAlign: 'center',  marginTop: '10%'}}>
                                    Eden
                                </h1>
                                <p id="projects-p">
                                    I made this single-page application personal website as a fun project to showcase my experience and projects, while learning React, JS, Styling, and more.
                                </p>
                                <a href="https://github.com/kzzy/kzzy.github.io" target="_blank" rel="noopener noreferrer"><img src={'/githubicon.png'} title="Eden Repository" alt='Repository' style={{width: '64px', height: '64px', position: 'absolute', left: '0', bottom: '0'}}></img></a>
                            </div>
                            <div className="project-card" style={{left: '30vw', width: '20vw', 'min-width': '350px'}}>
                                <img src={'/tcbotprojecticon.png'} alt="Website" style={{width: '128px', height: '128px', marginTop: '15%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}></img>
                                <h1 style={{color: 'rgba(0, 110, 255, 0.7)', fontFamily: 'Montserrat, sans-serif', fontStyle: 'normal', fontWeight: '400', fontSize: '35px', textAlign: 'center',  marginTop: '10%'}}>
                                    TCBot
                                </h1>
                                <p id="projects-p">
                                    One of my first personal projects was a Discord Bot written in Python for my server that contained moderating tools, and was tasked with setting up instances for inhouse games.
                                </p>
                                <a href="https://github.com/kzzy/tsunchan" target="_blank" rel="noopener noreferrer"><img src={'/githubicon.png'} title="TCBot Repository" alt='Repository' style={{width: '64px', height: '64px', position: 'absolute', left: '0', bottom: '0'}}></img></a>
                            </div>
                        </div>
                    </animated.div>
                </BlackBar>
            </animated.div>
            <Modal show={perfProjectModal} onHide={handleClosePerfProjectModal} dialogClassName="project-perfmodal" size="xl" centered>
                <Modal.Header closeButton />
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={'/perfproject-grafana.png'}
                                alt="Grafana K6 Configuration"
                                style={{height: '620px', filter: 'brightness(50%)'}}
                            />
                            <Carousel.Caption>
                                <h3>Test Result Visualization</h3>
                                <p>K6 supports integration with data analytics and visualization software <b>Grafana</b> which would display test results</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={'/awsexample.png'}
                                alt="Amazon Web Services Cloud Computing"
                                style={{height: '620px', filter: 'brightness(50%)', backgroundColor: 'white'}}
                            />
                            <Carousel.Caption>
                                <h3>Cloud Computing with AWS</h3>
                                <p>AWS was adopted by taking advantage of its cost-efficient scalability to handle distributed testing and volume of tests</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={'/jenkinsexample.png'}
                                alt="Jenkins CI/CD Pipeline"
                                style={{height: '620px', filter: 'brightness(50%)', backgroundColor: 'white'}}
                            />
                            <Carousel.Caption>
                                <h3>Run Performance Tests through the Jenkins Pipeline</h3>
                                <p>By inputting your parameters and destination to test, this can be used to easily run a performance test manually or set to be automated as part of the development pipeline</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
        </Background>
    )
}