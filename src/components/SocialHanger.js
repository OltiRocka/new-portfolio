import React from 'react'
import { ReactComponent as Github } from '../files/Github.svg'
import { ReactComponent as LinkedIn } from '../files/Linkedin.svg'
import { ReactComponent as Instagram } from '../files/Instagram.svg'
import styled from 'styled-components';

const Hanger = styled.div`
    width:0px;
    height:191px;
    border: 1px solid #ABB2BF;
`;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:20px;
    align-items:center;
`;

const ImageContainer = ({ children, href }) => {
    return (
        <a href={href}>
            {children}
        </a>
    );
}

function SocialHanger({ fake }) {
    return (
        <Container style={
            fake ? ({
                marginRight: '20px',
                marginLeft: '0px',
                visibility: 'hidden'
            }) : ({})
        }>
            <Hanger />
            <ImageContainer href="roka.dev">
                <Github />
            </ImageContainer>
            <ImageContainer href="roka.dev">
                <LinkedIn />
            </ImageContainer>
            <ImageContainer href="roka.dev">
                <Instagram />
            </ImageContainer>
        </Container>
    )
}

export default SocialHanger