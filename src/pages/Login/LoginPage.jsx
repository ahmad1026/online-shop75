import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../../validations/userLoginValidations";
import { Column } from "../../styles/Global";
import {
  LoginWrapper,
  LoginContent,
  InputButton,
  InputBox,
} from "../../styles";
import { handleLoginErrors, loginUser } from "../../features/auth/authSlice";
import { useEffect } from "react";
export default function LoginPage() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorsMsg, setErrorsMsg] = useState({});
  const Navigate = useNavigate();
  useEffect(() => {
    if (auth.token) {
      Navigate("/dashboard/products");
    }
  });
  const handleUsername = (e) => {
    setuserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async(e) => {
    let action = {};
    e.preventDefault();
    let formValues = {};
    const formData = new FormData(e.target);
    formValues = Object.fromEntries(formData);
    const { formValid, errors } = loginValidation(formValues);
    if (!formValid) {
        action = dispatch(handleLoginErrors(errors));
        setErrorsMsg({ ...action.payload });
    } else {
        action = dispatch(handleLoginErrors({}));
        setErrorsMsg({ ...action.payload });
        dispatch(loginUser(formValues))
    }
  };
  return (
    <LoginWrapper>
      <LoginContent>
        <h1>خوش آمدید</h1>
        <form onSubmit={handleSubmit} method="POST" action="">
          <Column gap={"30px"}>
            <Column>
              <label htmlFor="username">نام کاربری</label>
              <br />
              <InputBox
                name="username"
                onChange={handleUsername}
                value={userName}
                type="text"
              />
              <span>{errorsMsg.username ? errorsMsg.username : ""}</span>
            </Column>
            <Column>
              <label htmlFor="password">رمز عبور</label>
              <br />
              <InputBox
                name="password"
                onChange={handlePassword}
                value={password}
                type="password"
              />
              <span>{errorsMsg.password ? errorsMsg.password : ""}</span>
            </Column>
            <InputButton>
              {auth.loginStatus === "pending" ? "loading" : "ورود"}
            </InputButton>
            <span>{auth.loginError ? auth.loginError : ''}</span>
          </Column>
        </form>
      </LoginContent>
    </LoginWrapper>
  );
}
