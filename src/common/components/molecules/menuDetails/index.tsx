"use client";

import React from "react";
import { useSelector } from "react-redux";
import UserDetails from "./components/userDetails";

const MenuDetails = () => {
  const { mainData } = useSelector((state: any) => state.config);

  return (
    <>{mainData?.type === "user" && <UserDetails data={mainData.data} />}</>
  );
};

export default MenuDetails;
