import React, { useEffect } from "react";
import MobileSignUp from "../signup/MobileSignUp";
import useScreenWidth from "../../../hooks/screenWidth";
import { useAuth } from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { useNotification } from "../../components/NotificationContex";

const SignUp = () => {
  const { width } = useScreenWidth();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const location = useLocation();

  useEffect(() => {
    if (user && !location.state?.fromHome) {
      showNotification("You're already Sign In. Please Sign Out first.");
      navigate("/");
    }
  }, [user]);

  if (width <= 600) {
    return <MobileSignUp />;
  }
  return <div>desktop signup</div>;
};

export default SignUp;
