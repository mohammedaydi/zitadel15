"use client"
import { SessionProvider } from "next-auth/react";

const SessionContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider >{children}</SessionProvider>;
};

export default SessionContextWrapper;

