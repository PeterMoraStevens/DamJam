import useScreenWidth from "../../../hooks/screenWidth";
import React, { useEffect, useState } from "react";
import MobileSignIn from "./MobileSignIn";
import { FaRegTrashAlt } from "react-icons/fa";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useNotification } from "../../components/NotificationContex";
import { useLocation } from "react-router-dom";

const SignIn = () => {
  const { width } = useScreenWidth();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (user && !location.state?.fromHome) {
      showNotification("You're already Sign In. Please Sign Out first.");
      navigate("/");
    }
  }, [user]);

  if (width <= 600) {
    return <MobileSignIn />;
  }

  return <div>add desktop signin</div>;
};

export default SignIn;
