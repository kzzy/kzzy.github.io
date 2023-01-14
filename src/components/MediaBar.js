import React from 'react';
import styled from 'styled-components';

const MediaBarStyle = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: -1%;
    margin: auto;
    height: 64px;
    width: 128px; 
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    
    img {
        width: 64px;
        height: 64px;

        &:hover {
            filter: brightness(70%);
        }
    }
`;

const Media = ({ url, iconFile, alt}) => (
    <a href={url}>
        <img src={iconFile} alt={alt}></img>
    </a>
);

export const MediaBar = () => (
    <MediaBarStyle>
        <Media url='https://github.com/kzzy' iconFile={process.env.PUBLIC_URL + 'githubicon-mbar.png'} alt='GitHub'/>
        <Media url='https://www.linkedin.com/in/austin-hu-82073a158/' iconFile={process.env.PUBLIC_URL + 'linkedinicon-mbar.png'} alt="Linkedin"/>
    </MediaBarStyle>
)