"use client"
import React from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import LoadingScreen from '~/app/login/page';

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const session = useSession();
  const router = useRouter();
  const currentPath = usePathname()
  if (session.status !== 'loading') {
    if (session.status === 'unauthenticated') {
      if (currentPath === '/login') {
        return (
          <>{children}</>
        );
      } else {
        router.push("/login");
      }
    } else if (session.status === 'authenticated') {
      if (currentPath !== '/login') {
        return (
          <>{children}</>
        );
      } else {
        router.push("/dashboard/analysis");
      }
    }
  }

  return <LoadingScreen/>;
}
