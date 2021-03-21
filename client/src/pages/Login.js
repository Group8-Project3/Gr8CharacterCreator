import React, { useState } from "react";
import SignupLoginModal from "../components/SignupLoginModal"

import {
  PaddedCol,
  FullRow,
  VerticalCenterWrapper,
  LoginButton
} from "./styles";

const LoginPage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <FullRow>
        <PaddedCol>
          <VerticalCenterWrapper>
            <LoginButton size="lg" onClick={() => setShow(true)}>
              Signup/Login
            </LoginButton>
          </VerticalCenterWrapper>
        </PaddedCol>
      </FullRow>
      <SignupLoginModal show={show} setShow={setShow} />
    </div>
  )
}

export default LoginPage;