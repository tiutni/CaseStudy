import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <div>
      <div className="login-box">
        <h2>로그인</h2>
        <input type="text" placeholder="이메일 주소 또는 전화번호" />
        <input type="text" placeholder="비밀번호" />
        <button>로그인</button>
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