import React, { useEffect, useState } from "react";
import MobileNavbar from "../../components/mobileNavbar";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router";
import { SignInForm } from "../../components/signinForm";

const MobileSignIn = () => {


  return (
    <div>
      <MobileNavbar />
      {/* <div className="bg-background relative flex min-h-screen flex-col overflow-hidden items-center justify-center">
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
      </div> */}
      <SignInForm className="mt-[100px] p-4" />
    </div>
  );
};

export default MobileSignIn;
