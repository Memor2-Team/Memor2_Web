import React from "react";
import MemoryLogo from 'src/assets/img/common/Memory Logo.svg';
import PwViewIcon from "src/assets/img/common/PwView_Icon.svg";
import PwHideIcon from "src/assets/img/common/PwHide_Icon.svg";
import * as S from './signUp.style';
import useSignUp from "src/hooks/auth/useSignUp";

const SignUp = () => {
  const { ...signUp } = useSignUp();

  return (
    <S.SignUpMain>
      <S.Left />
      <S.Container>
        <S.Leftbar>
          <S.MemoryLogo src={MemoryLogo} />
          <S.Title>Memory</S.Title>
          <S.SubTitle> Create your personal  </S.SubTitle>
          <S.SubTitle> memory hub </S.SubTitle>
        </S.Leftbar>
        <S.Rightbar>
          <S.SignUpT>Sign Up</S.SignUpT>
          <S.IDBox>
            <S.IDT>ID</S.IDT>
            <S.IDInput value={signUp.id} placeholder='Park Sihyun' onChange={signUp.handleChangeId} />
          </S.IDBox>
          <S.EmailBox>
            <S.EmailT>Email</S.EmailT>
            <S.EmailInput value={signUp.email} placeholder='sihyunpark@gmail.com' onChange={signUp.handleChangeEmail} />
          </S.EmailBox>
          <S.PasswordBox>
            <S.PasswordT>Password</S.PasswordT>
            <S.PasswordInput
              type={signUp.isPasswordBtn ? "text" : "password"}
              value={signUp.password} 
              placeholder='Enter your Password' 
              onChange={signUp.handleChangePassword} 
              onKeyDown={signUp.handleKeyDown} />
            <S.PasswordButton src={signUp.isPasswordBtn ? PwViewIcon : PwHideIcon} onClick={signUp.handleClickPw} />
          </S.PasswordBox>
          <S.Button onClick={signUp.handleClickSignUp}>Sign Up</S.Button>
        </S.Rightbar>
      </S.Container>
    </S.SignUpMain>
  );
};

export default SignUp;
