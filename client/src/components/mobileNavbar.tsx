import React from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { GiBeaver } from "react-icons/gi";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const SignedInMobileNavbar = () => {
  return (
    <div className="top-0 fixed absolute h-[65px] w-full bg-[var(--color-secondary-background)] border-b-2 flex flex-row-reverse items-center z-99">
      <div className="flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="mr-6 cursor-pointer">
              <RxHamburgerMenu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-38 text-main-foreground ml-10 mt-2 bg-[var(--color-secondary-background)]">
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
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-40 text-main-foreground bg-[var(--color-secondary-background)]">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-heading leading-none">Hi {}</h4>
                  <p className="text-sm">Welcome to Dam Jam.</p>
                </div>
                <div className="grid gap-2">
                  <div className="grid items-center gap-4">
                    <NavLink to="/profile">
                      <Button>Profile</Button>
                    </NavLink>
                  </div>
                  <div className="grid items-center gap-4">
                    <Button>Sign Out</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex-1 ml-6">
        <Button>
          <GiBeaver />
        </Button>
      </div>
    </div>
  );
};

const SignedOutMobileNavbar = () => {
  return (
    <div className="top-0 fixed absolute h-[65px] w-full bg-[var(--color-secondary-background)] border-b-2 flex flex-row-reverse items-center z-99">
      <div className="flex">
        <div className="mr-6">
          <NavLink to={"/signin"}>
            <Button>Sign In</Button>
          </NavLink>
        </div>
      </div>
      <div className="flex-1 ml-6">
        <Button>
          <GiBeaver />
        </Button>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  // update to only show if user session is signed in
  if (false) {
    return <SignedInMobileNavbar />;
  }
  return <SignedOutMobileNavbar />;
};

export default MobileNavbar;
