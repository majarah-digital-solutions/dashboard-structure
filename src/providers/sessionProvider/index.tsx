"use client"
import { SessionProvider as Provider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionProviderProps {
  children: ReactNode;
}

function SessionProvider({ children }: SessionProviderProps) {
  return (
    <Provider>
      {children}
    </Provider>
  );
}

export default SessionProvider;
