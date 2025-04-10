import React, { useEffect, useState } from "react";
import { useNotification } from "../../components/NotificationContex";
import MobileNavbar from "../../components/mobileNavbar";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

const MobileSignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { showNotification } = useNotification();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      showNotification("You're already Sign In. Please Sign Out first.");
      navigate("/"); // Redirect to landing page
    }
  }, [user, navigate, showNotification]);

  return (
    <div>
      <MobileNavbar />
      <div className="bg-background relative flex min-h-screen flex-col overflow-hidden items-center justify-center">
        <div className="w-[70%] border-1 p-4 rounded-xl bg-main/70">
          <h2 className="text-center font-semibold text-3xl">Sign In</h2>
          <div>
            <Label htmlFor="emailInput">Email</Label>
            <Input
              id="emailInput"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSignIn;
