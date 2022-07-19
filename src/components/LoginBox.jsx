import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserObj from '../data/UserObj';

const LoginBox = () => {

  const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid]);

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
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };
    const onClickConfirmButton = () => {
      if(email === UserObj.users[0].email && pw === UserObj.users[0].pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

  return (
    <div>
      <div className="login-box">
        <h2>로그인</h2>

        <div className='inputWrap'>
          <input className="input" type="text" placeholder="이메일 주소 또는 전화번호" value={email} onChange={handleEmail}/>
        </div>
        <div className='errorMessageWrap'>
          {!emailValid && email.length > 0 && (
              <div>정확한 이메일 주소를 입력하세요.</div>
          )}
        </div>
        <div className='inputWrap'>
          <input className="input" type="password" placeholder="비밀번호" value={pw} onChange={handlePw}/>
        </div>
        <div className='errorMessageWrap'>
          {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 4자 이상 입력해주세요.</div>
          )}
        </div>
        <button disabled={notAllow} className='bottomButton' onClick={onClickConfirmButton}>로그인</button>

        <div className="login-guid-text">
          <div>
            <input type="checkbox" defaultChecked />
            <span>로그인 정보 저장</span>
          </div>
          <Link to="#">도움이 필요하신가요?</Link>
        </div>
        <div className="login-guid-text2">
          <div>
            Netflix 회원이 아닌가요?
            <Link to="#" className="now-sign-up">
              지금 가입하세요.
            </Link>
          </div>
          <div className="secondary-text">
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.
            <Link to="#" className="detail-knowing">
              자세히 알아보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;