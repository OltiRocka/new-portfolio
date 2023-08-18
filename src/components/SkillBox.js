import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:178px;
    height:auto;
    margin-top:10px;
`;
const SkillType = styled.p`
    border:1px solid #ABB2BF;
    width:inherit;
    height:auto;
    margin:0;
    font-weight:bold;
    font-size:16px;
    text-align:left;
    color:white;
    padding:8px;
`;

const SkillList = styled.p`
    border:1px solid #ABB2BF;
    width:inherit;
    padding:8px;
    font-size:16px;
    color:#ABB2BF;
    text-align:left;
    margin:0;
    height:auto;
`;
function SkillBox({ type, skills }) {
    return (
        <Container>
            <SkillType>{type}</SkillType>
            <SkillList>{skills}</SkillList>
        </Container>
    )
}

export default SkillBox