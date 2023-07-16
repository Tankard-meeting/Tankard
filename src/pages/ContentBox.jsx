import React from "react";
import styled from "styled-components";
import FacePicture from "../image/FacePicture.png"

function ContentBox(props) {
    return (
        <Background>

            <ContentImg style={{ backgroundImage: `url(${FacePicture})` }} />

            <ContentInfo>
                <Title>안녕하세요</Title>
                
                <LocationTimeContainer>
                    <Location>안양동</Location>
                    <Time>10초전</Time>
                </LocationTimeContainer>
            </ContentInfo>

        </Background>
    )
}

const Background = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 459px;
    border-style: solid;
    border-width: 0px 0px 2px 0px;
    border-color: gray;
    background-color: #ffffff;
`;

const ContentImg = styled.div`
    width: 355px;
    height: 355px;
    margin-left: 42px;
`;

const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    width: 65% ;
    height: 355px;
`;

const Title = styled.div`
    font-size: 48px;
    margin-left: 36px;
`;

const LocationTimeContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 36px;
    margin-top: 28px;
`

const Location = styled.div`
    margin-right: 10px;
    font-size: 40px;
`;

const Time = styled.div`
    font-size: 40px;
`;

export default ContentBox;