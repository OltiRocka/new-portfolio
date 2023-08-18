import React from 'react'
import { styled } from 'styled-components';
import MeImage from '../files/ImageOlti.png'
const Handler = styled.div`
    display:flex;
    flex-direction:row;
    width:1024px;
    align-items:center;
    margin:12px;
`;

const Container = styled.div`
    display:flex;
    margin-top: 112px;
    font-family: 'Fira Code', monospace;
    flex-direction:column;
    margin-bottom:30px;
    align-items:center;
`;

const Content = styled.div`
    display:flex;
    flex-direction:row;
    width:1024px;
    height:auto;
    justify-content:space-between;
`;

const Image = styled.div`
    height:inherit;
    width:48%;
    display:flex;
    flex-direction:column;
    align-items:center;

`;

const Description = styled.div`
    height:inherit;
    width:48%;
    font-size:16px;
`;

const RefButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: 1px solid #C778DD;
    height: 37px;
    margin-top: 32px;
    width: 128px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: rgba(199, 120, 221, 0.2); 
    }
`;

export default function AboutMe() {
    return (
        <Container>
            <Handler>
                <span style={{ color: '#C778DD', fontSize: '32px' }}>#</span>
                <span style={{ color: 'white', fontSize: '32px' }}>about-me</span>
                <div style={{ width: '320px', marginLeft: '16px', height: '0', border: '1px solid #C778DD' }} />
            </Handler>
            <Content>
                <Description>
                    <p style={{ textAlign: 'left', color: '#ABB2BF' }}>
                        Hi there! I'm Olti Roka.
                        <br /><br />
                        I'm a Data Scientist, a Machine Learning Engineer, and you guessed it - a math enthusiast. I love working with Python and Rust to solve complex problems.
                        <br /><br />
                        Engaging with new people and sharing ideas are valuable aspects of my day-to-day life. As we navigate the vast landscape of data and mathematics, I look forward to the opportunities this journey may bring.
                    </p>
                    <RefButton href=''>Resume&nbsp;<span style={{ fontSize: '32px' }}>➔</span></RefButton>
                </Description>
                <Image>
                    <img src={MeImage} />
                    <div style={{ height: '0', width: '80%', border: '1px solid #C778DD' }} />
                </Image>
            </Content>
        </Container >
    )
}
