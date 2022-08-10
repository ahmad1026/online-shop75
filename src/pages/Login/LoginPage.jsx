import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../api/userLogin.api";
import { loginValidationSchema } from "../../validations/userLogin";
import {
  Column,
  LoginWrapper,
  LoginContent,
  InputButton,
  InputBox,
} from "../../styles";
export default function LoginPage() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErrorMsg, setUserNameErrorMsg] = useState(null);
  const [passwordErrorMsg, setPAsswordErrorMsg] = useState(null);
  const Navigate = useNavigate();
  const handleUsername = (e) => {
    setuserName(e.target.value);
    setUserNameErrorMsg(null);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPAsswordErrorMsg(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formValues = {};
    const formData = new FormData(e.target);
    formValues = Object.fromEntries(formData);

    const validateData = await loginValidationSchema
      .validate(formValues)
      .catch((err) => {
        err.message.type === "username"
          ? setUserNameErrorMsg(err.message.message)
          : setUserNameErrorMsg(null);
        err.message.type === "password"
          ? setPAsswordErrorMsg(err.message.message)
          : setPAsswordErrorMsg(null);
        return false;
      });

    if (validateData !== false) {
      try {
        const response = await Login(formValues);
        if (response.token) {
          Navigate("/dashboard");
        }
      } catch (err) {
        console.log(err);
        setUserNameErrorMsg(err.response.data)
        setPAsswordErrorMsg(err.response.data)
        

      }
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
              <span>{userNameErrorMsg}</span>
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
              <span>{passwordErrorMsg}</span>
            </Column>
            <InputButton>ورود</InputButton>
          </Column>
        </form>
      </LoginContent>
    </LoginWrapper>
  );
}
