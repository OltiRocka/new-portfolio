import React from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
    width:330px;
    height:auto;
    display:flex;
    flex-direction:column;
    margin-top:48px;
`;


const RefButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: 1px solid #C778DD;
    height: 37px;
    width: 128px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: rgba(199, 120, 221, 0.2); 
    }
`;
const Technologies = styled.p`
    text-align:left;
    width:calc(100% - 16px);
    border:1px solid #ABB2BF;
    margin:0;
    color:#ABB2BF;
    font-size:16px;
    padding:8px;
`;
const ImageContainer = styled.img`
    width:inherit;
    margin:0;
    padding:0;
    height:auto;   
    border: 1px solid #ABB2BF;
`;

const Title = styled.h2`
    color:white;
    text-align:left;
    font-family: 'Fira Code', monospace;
    margin:0;

`;

const Description = styled.p`
    color:#ABB2BF;
    font-family: 'Fira Code', monospace;
    text-align:left;
`;

const TitleContainer = ({ title, desc, url, url_where }) => {
    return (
        <div style={{ border: '1px solid #ABB2BF', width: 'calc(100% - 32px)', padding: '16px' }}>
            <Title>{title}</Title>
            <Description>{desc}</Description>
            <RefButton href={url}>{url_where}&nbsp;<span style={{ fontSize: '32px' }}>➔</span> </RefButton>
        </div>
    );
}

function ProjectFormat({ src, tech, title, desc, url, url_where }) {
    return (
        <MainContainer>
            <ImageContainer src={src} />
            <Technologies>{tech}</Technologies>
            <TitleContainer title={title} desc={desc} url={url} url_where={url_where} />
        </MainContainer>
    )
}

export default ProjectFormat