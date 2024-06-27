import { authOptions } from "~/utils/libraries/nextAuth/authOptions";
import { getServerSession } from "next-auth/next";
import Login from './login/page';
import {LoadingScreen} from '~/common/components/shared/LoadingScreen';
import Dashboard from './dashboard/page';
import React from "react";
import { redirect } from 'next/navigation'

const Home = async (): Promise<any> => {
  const session: any = await getServerSession(authOptions);
  if(session){
    redirect("/dashboard")
    return <LoadingScreen />
  }
  return <Login />;
};

export default Home;
