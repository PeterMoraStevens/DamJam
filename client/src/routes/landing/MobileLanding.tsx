import React from "react";
import MobileNavbar from "../../components/mobileNavbar";
import { IoMdMusicalNote } from "react-icons/io";
import { motion } from "framer-motion";

export const MobileLanding = () => {
  return (
    <div className="bg-[var(--color-background)]">
      <MobileNavbar />
      <div className="min-h-screen">
        <div className="relative flex min-h-[100dvh] flex-col overflow-hidden items-center justify-center bg-background px-5 md:py-[200px] py-[100px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
          <motion.h1
            className="text-3xl bg-main/50 p-10 rounded-xl border-1 items-center flex flex-col"
            animate={{}}
          >
            <div className="mb-4 font-semibold">Welcome to</div>
            <span className="relative px-2 sm:mr-2 mr-0 md:[&_svg]:size-[45px] sm:[&_svg]:size-7 bg-secondary-background/50 rounded-base border-2 border-border/40 dark:border-border/70">
              <motion.div
                animate={{ y: ["-5px", "5px", "-5px"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-opacity-25 bg-[var(--color-secondary-background)] border border-1 rounded-full"
              >
                <IoMdMusicalNote />
              </motion.div>
              Dam Jam
              <motion.div
                animate={{ y: ["-5px", "5px", "-5px"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-opacity-25 bg-[var(--color-secondary-background)] border border-1 rounded-full"
              >
                <IoMdMusicalNote />
              </motion.div>
              !
            </span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};
