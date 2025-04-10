import React, { useState } from "react";
import MobileNavbar from "../../components/mobileNavbar";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const MobileSignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div>
      <MobileNavbar />
      <div className="bg-background relative flex min-h-screen flex-col overflow-hidden items-center justify-center">
        <div className="w-[70%] border-1 p-4 rounded-xl bg-main/70">
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
  );
};

export default MobileSignUp;
