import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";
import MainFooter from "./MainFooter";
import ContentAdd from "./ContentAdd";
import DownArrow from "../image/DownArrow.png"

function MainPage(props) {
    return (
        <Background>
            <Header>
                <CustomSelect>
                    <option>안양동</option>
                    <option>금정동</option>
                    <option value={"./Myname"}>동네 설정</option>
                </CustomSelect>
            </Header>

            <ContentContainer>
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
            </ContentContainer>

            <ContentAdd />

            <MainFooter />
        </Background>
    )
}

const Background = styled.div`
    width : 100vw;
    height : 100vh;
    background-color: #ffffff;
`;

const Header = styled.div`
    display : flex;
    flex-direction : row;
    align-items: center;
    width : 100vw;
    height: 8vh;

    border-style: solid;
    border-width: 0px 0px 2px 0px;
    border-color: gray;
`;

const CustomSelect = styled.select`
    width: 24vw;
    height: 60px;
    border : none;
    margin-left: 3vw;
    font-size: 6vw;
    /* @media screen and (max-width:1200px) { //반응형 웹 폰트 디자인
        font-size: 4vw;
    }
    @media screen and (max-width:430px) {
        font-size: 8vw;
    } */

    background-color: #ffffff;

    -webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
    background-image: url(${DownArrow});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 7vw;
`;

const ContentContainer = styled.div`
    overflow-y: auto; /* 수직 스크롤 활성화 */
    height: calc(100vh - 169px - 204px); /* 콘텐츠 영역 높이 설정 (헤더와 푸터 높이 뺀 값) */
`;


export default MainPage;