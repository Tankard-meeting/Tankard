import React, { useEffect, useState } from "react";
import './SignUp.css';
import logo from './img/Tankard.png'


const User = {
    email : 'test@naver.com',
    pw : '0316wls@'
}

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

    }


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
        if(email === User.email && pw === User.pw) {
            alert('성공');
        }else{
            alert('실패');
        }
    }

    useEffect(() => {
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);



    },[emailValid,pwValid])


    return(
        <div className="page">
            <div className = "titleImg">
                <img src={logo} alt="dd"
                style={{width : '620px', 
                height : '424px'
                }} />
            </div>
            <div className="contentWrap">
                <div>
                    <div className="inputTitle">이메일 주소</div>
                    <div className="inputWrap">
                        <input type = "text"
                        className="input"
                        placeholder="이메일을 입력해주세요."
                        value={email}
                        onChange={handleEmail}
                        />
                    </div>
                    <div className="errorMessageWrap">
                        {
                            !emailValid && email.length > 0 && (
                                <div>올바른 이메일을 입력해주세요.</div>
                            )
                        }
                    </div>
                    <div className="inputTitle">비밀 번호</div>
                    <div className="inputWrap">
                        <input type = "password"
                        className="input" 
                        placeholder="비밀번호를 입력해주세요."
                        value={pw}
                        onChange={handlePassword}
                        />
                    </div>
                    <div className="errorMessageWrap">
                        {
                            !pwValid && pw.length > 0 && (
                                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <button onClick={onclickConfirmButton} disabled={notAllow} className="buttomButtom">로그인</button>
                </div>
                <div className="register">
                계정이 없으신가요? <a href="#">계정 만들기</a>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp;