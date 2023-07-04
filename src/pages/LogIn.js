import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { findLoginUser, pushLogIn } from '../features/loginSlice';

import userData from "../data.json";
import logo from "../images/logo.png";

const LogInModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* position: absolute; */
  display: ${props => props.showLogInModal ? `flex` : `none`};
  justify-content: center;
  align-items:center;
`;

const LogInBox = styled.div`
  /* margin-top: 200px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 60px;
  }

  input {
    width: 400px;
    height: 50px;
    background-color: #e0e0e0;
    border: none;
    border-radius: 10px;
    outline: none;
    padding-left: 20px;
  }

  input + input {
    margin-top: 30px;
  }

  button {
    width: 400px;
    height: 50px;
    font-weight: 600;
    background-color: #f5cc8d;
    margin: 30px 0;
    border: none;
    border-radius: 10px;
  }

  ul {
    display: flex;
  }

  li {
    font-weight: 600;
  }

  li + li {
    padding-left: 30px;
  }
`;

function LogIn(props) {
  const { showLogInModal, setShowLogInModal } = props;
  // const [showLogInModal, setShowLogInModal] = useState(true);
  const [logInId, setLogInId] = useState('');
  const [logInPw, setLogInPw] = useState('');

  const dispatch = useDispatch();

  const handleLogId = (e) => {
    setLogInId(e.target.value);
  };

  const handleLogPw = (e) => {
    setLogInPw(e.target.value);
  };

  const submitLoginData = () => {
    const logInUser = userData.find(user =>  user.id === logInId);

    if(logInId === logInUser?.id && Number(logInPw) === logInUser?.password) {
      dispatch(pushLogIn({logInId, logInPw}));
      dispatch(findLoginUser(logInUser));
      alert(`${logInUser.name}님, 환영합니다!`);
      setLogInId('');
      setLogInPw('');
      setShowLogInModal(false);
    } else {
      alert(`아이디와 비밀번호를 다시 확인해주세요`);
    }
  }

  return (
    <LogInModalWrapper showLogInModal={showLogInModal} >
      <LogInBox>
          <p>아이디: aa ~ gg 중 아무거나 / 비번: 1234</p>
          <img className='logo' src={logo}  />
          <input 
            type='text' 
            value={logInId} 
            placeholder='아이디' 
            onChange={handleLogId} 
          />
          <input 
            type='text' 
            value={logInPw} 
            placeholder='비밀번호' 
            onChange={handleLogPw} 
            onKeyUp={e => {
              if(e.key === 'Enter') {
                submitLoginData();
              }
            }}
          />
          <button onClick={submitLoginData}>로그인</button>
          <div>
            <ul>
              <li className='cursor-point'>비밀번호 찾기</li>
              <li className='cursor-point'>아이디 찾기</li>
              <li className='cursor-point'>회원가입</li>
            </ul>
          </div>
      </LogInBox>
    </LogInModalWrapper>
  );
}

export default LogIn;