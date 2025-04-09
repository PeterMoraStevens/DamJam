import React from "react";
import useScreenWidth from "../../../hooks/screenWidth";
import { MobileLanding } from "./MobileLanding";
import DesktopLanding from "./DesktopLanding";

const Landing = () => {
  const { width } = useScreenWidth();

  if (width <= 600) {
    return <MobileLanding />;
  }
  return <DesktopLanding />;
};

export default Landing;
