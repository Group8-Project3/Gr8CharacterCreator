import React from "react";
import SignupLoginCard from "../components/SignupLoginCard"

import {
  PaddedCol,
  FullRow,
  VerticalCenterWrapper,
} from "./styles";

const LoginPage = () => {

  return (
    <div>
      <FullRow>
        <PaddedCol xs={{ span: 10, offset: 1 }} sm={{ span: 5, offset: 1 }}>
          <VerticalCenterWrapper>
            <SignupLoginCard />
          </VerticalCenterWrapper>
        </PaddedCol>
      </FullRow>
    </div>
  )
}

export default LoginPage;