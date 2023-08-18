import React from 'react'
import { styled } from 'styled-components';
import Navigation from '../components/Navigation';
import SocialHanger from '../components/SocialHanger';
import MainHome from '../components/MainHome';
const MainContainer = styled.div`
    display:flex;
    flex-direction:row;
    font-family: 'Fira Code', monospace;
    justify-content: space-between;
    overflow-x:hidden;
`;
const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    `;
export default function Home() {
    return (
        <MainContainer>
            <SocialHanger />
            <HomeContainer>
                <Navigation />
                <div style={{ height: '62px' }}></div>
                <MainHome />
            </HomeContainer>
            <SocialHanger fake={true} />
            <div
                style={{
                    overflowX: 'hidden',
                    position: 'absolute',
                    width: '10vw',
                    height: '90px',
                    border: '1px solid #ABB2BF',
                    top: '80vh',
                    left: '95vw'
                }}
            />
            <div
                style={{
                    overflowX: 'hidden',
                    position: 'absolute',
                    width: '10vw',
                    height: '90px',
                    border: '1px solid #ABB2BF',
                    top: '40vh',
                    left: '-8vw'
                }}
            />
        </MainContainer>
    )
}
