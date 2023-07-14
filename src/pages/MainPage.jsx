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
    width : 1179px;
    height : 2556px;
    background-color: #ffffff;
`;

const Header = styled.div`
    display : flex;
    flex-direction : row;
    align-items: center;
    width : 100%;
    height: 169px;

    border-style: solid;
    border-width: 0px 0px 2px 0px;
    border-color: gray;
`;

const ContentContainer = styled.div`
    overflow-y: auto; /* 수직 스크롤 활성화 */
    height: calc(100vh - 169px - 204px); /* 콘텐츠 영역 높이 설정 (헤더와 푸터 높이 뺀 값) */
`;

const CustomSelect = styled.select`
    width: 230px;
    height: 60px;
    border : none;
    margin: 42px;
    font-size: 53px;
    background-color: #ffffff;

    -webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
    background-image: url(${DownArrow}); /* 이미지 경로 설정 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  background-position: right center; /* 이미지 위치 설정 */
  background-size: 50px; /* 이미지 크기 조절 */
`;

export default MainPage;