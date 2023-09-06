import React from "react";
import styled from "styled-components";

function MainFooter(props) {
    return (
        <Footer>
            <HomeButton>홈</HomeButton>
            <ChatButton>채팅</ChatButton>
            <AroundButton>내 근처</AroundButton>
            <MyPageButton>마이페이지</MyPageButton>
        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    height: 204px;
    background-color: #D9D9D9;
`

const HomeButton = styled.div`
    font-size: 40px;
`

const ChatButton = styled.div`
    font-size: 40px;
`

const AroundButton = styled.div`
    font-size: 40px;
`

const MyPageButton = styled.div`
    font-size: 40px;
`

export default MainFooter;