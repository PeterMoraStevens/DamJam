import React from "react";
import { Button } from "./ui/button";
import { NavLink, useLocation } from "react-router";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../firebase/initialize";
import { GiBeaver } from "react-icons/gi";
import { auth } from "firebase/initialize";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useNotification } from "../components/NotificationContex";

const SignedInMobileNavbar = () => {
  const { showNotification } = useNotification();
  const { user } = useAuth();
  const userProfileName = user?.displayName;
  const userPhotoURL = user?.photoURL;

  return (
    <div className="top-0 fixed absolute h-[65px] w-full bg-[var(--color-secondary-background)] border-b-2 flex flex-row-reverse items-center z-99">
      <div className="flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="mr-6 cursor-pointer" size={"icon"}>
              <RxHamburgerMenu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-38 text-main-foreground ml-10 z-99 bg-[var(--color-secondary-background)]">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <NavLink to={"/testing"}>
                  <Button className="cursor-pointer">Join Rooms</Button>
                </NavLink>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <div className="mr-6">
          {/* <NavLink to={"/signin"}>
            <Button>Sign In</Button>
          </NavLink> */}
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  src={userPhotoURL ? userPhotoURL : "John Doe"}
                  alt={userProfileName ? userProfileName : "Profile Photo"}
                />
                <AvatarFallback>
                  {userProfileName ? userProfileName : "JD"}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-40 text-main-foreground bg-[var(--color-secondary-background)] z-100">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-heading leading-none">
                    Hi {userProfileName ? userProfileName : "John Doe"},
                  </h4>
                  <p className="text-sm">
                    Welcome to Dam Jam.
                    {!userProfileName &&
                      ".. You didn't set up your profile yet 🥺"}
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid items-center gap-4">
                    <NavLink to="/profile">
                      <Button>Profile</Button>
                    </NavLink>
                  </div>
                  <div className="grid items-center gap-4">
                    <Button
                      onClick={() => {
                        const res = logout();
                      }}
                    >
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex-1 ml-6">
        <NavLink to="/">
          <Button size={"icon"}>
            <GiBeaver />
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

const SignedOutMobileNavbar = () => {
  const { user } = useAuth();
  const url: string = useLocation().pathname;

  return (
    <div className="top-0 fixed absolute h-[65px] w-full bg-[var(--color-secondary-background)] border-b-2 flex flex-row-reverse items-center z-99">
      <div className="flex">
        {(!user && url == "/signin") || (!user && url == "/signup") || (
          <div className="mr-6">
            <NavLink to={"/signin"} state={{ fromHome: true }}>
              <Button>Sign In</Button>
            </NavLink>
          </div>
        )}
      </div>
      <div className="flex-1 ml-6">
        <NavLink to="/">
          <Button size={"icon"}>
            <GiBeaver />
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const { user } = useAuth();

  // update to only show if user session is signed in
  if (user) {
    return <SignedInMobileNavbar />;
  }
  return <SignedOutMobileNavbar />;
};

export default MobileNavbar;
