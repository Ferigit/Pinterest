import React, { useState } from "react";
import { useUser } from "@/src/hooks/useUser";
import PublicHeader from "./PublicHeader";
import PrivateHeader from "./PrivateHeader";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { user } = useUser();

  if (!user) {
    return <PublicHeader />;
  }
  return <PrivateHeader />;
};

export default Header;
