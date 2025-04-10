import React from "react";
import MobileSignUp from "../signup/MobileSignUp";
import useScreenWidth from "../../../hooks/screenWidth";

const SignUp = () => {
  const { width } = useScreenWidth();

  if (width <= 600) {
    return <MobileSignUp />;
  }
  return <div>desktop signup</div>;
};

export default SignUp;
