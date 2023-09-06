import React from "react";
import styled from "styled-components";
import Plus from "../image/Plus.png"

function ContentAdd(props) {
    return (
        <AddButton>
            <AddImg style={{ backgroundImage: `url(${Plus})` }} />
        </AddButton>
    )
}

const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 194px;
    height: 194px;
    border-radius: 50%;
    background-color: #F5BD5B;
    right: 44px; /* 오른쪽 위치를 조정합니다 */
    bottom: 239px; /* 세로 중앙으로 위치시킵니다 */
`;

const AddImg = styled.div`
    width: 60px;
    height: 60px;
    background-repeat: no-repeat ;
`;
export default ContentAdd;