import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from './img/Tankard.png';

const User = {
  email: 'test@naver.com',
  pw: '0316wls@'
};

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [notAllow, setNotAllow] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onclickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('성공');
    } else {
      alert('실패');
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid]);

  return (
    <Page>
      <TitleImg>
        <img src={logo} alt="dd" style={{ width: '620px', height: '424px' }} />
      </TitleImg>
      <ContentWrap>
        <div>
          <InputTitle>이메일 주소</InputTitle>
          <InputWrap>
            <Input
              type="text"
              className="input"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={handleEmail}
            />
          </InputWrap>
          <ErrorMessageWrap>
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </ErrorMessageWrap>
          <InputTitle>비밀 번호</InputTitle>
          <InputWrap>
            <Input
              type="password"
              className="input"
              placeholder="비밀번호를 입력해주세요."
              value={pw}
              onChange={handlePassword}
            />
          </InputWrap>
          <ErrorMessageWrap>
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </ErrorMessageWrap>
        </div>
        <div>
          <Button
            onClick={onclickConfirmButton}
            disabled={notAllow}
          >
            로그인
          </Button>
        </div>
        <Register>
          계정이 없으신가요? <a href="#">계정 만들기</a>
        </Register>
      </ContentWrap>
    </Page>
  );
};

export default SignUp;

const Page = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 1168px;
  height: 2556px;
  padding: 0, 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #F3CE8D;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TitleImg = styled.div`
  width: 620px;
  height: 424px;
  margin-left: 280px;
  margin-top: 200px;
`;

const ContentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`;

const InputTitle = styled.div`
  margin-left: 39px;
  font-size: 30px;
  font-weight: 600;
  color: black;
`;

const InputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  height: 130px;
  padding: 19px;
  margin-top: 8px;
  margin-left: 39px;
  margin-right: 39px;
  background-color: white;
  border: 1p solid #e2e0e0;

  &:focus-within {
    border: 1px solid #9e30f4;
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 40px;
  font-weight: 400;
  color: black;

  ::placeholder {
    color: black;
  }
`;

const ErrorMessageWrap = styled.div`
  margin-left: 39px;
  margin-bottom: 8px;
  margin-top: 4px;
  color: #ef0000;
  font-size: 12px;
`;

const Button = styled.button`
  width: 1091px;
  height: 154px;
  border-radius: 15px;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  background-color: #0379e5;
  color: white;
  margin-top: 30px;
  margin-left: 39px;
  margin-right: 39px;
  margin-bottom: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #dadada;
    color: white;
  }
`;

const Register = styled.div`
  font-size: 32px;
  margin-left: 669px;
  `;
  

  