import React, { useState } from "react";
import Modal from "@/src/components/common/Modal";
import LoginForm from "@/src/components/business/LoginForm";
import { useUser } from "@/src/hooks/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "classnames";
import { SearchInput } from "@/src/components/business/SearchInput";
import { Button } from "../../common";
import { publicLinks, privateLinks } from "@/src/constants/navLinks";
import PublicHeader from "./PublicHeader";
import { INavLink } from "@/src/types/shared";

interface HeaderProps {}

const PrivateHeader: React.FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { user, removeUser } = useUser();

  const handleLoginModalOpen = () => {
    setIsOpen(true);
  };

  const handleLogoutModalClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#fff] sticky top-0 z-40 flex justify-between items-center p-4 shadow-md gap-x-2">
      <nav className=" md:flex space-x-1">
        {privateLinks.map((link: INavLink) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "hover:text-blue-500 text-base md:px-5 md:py-3 p-2  rounded-full",
              router.route === link.href && "bg-dark text-white "
            )}
          >
            <span className="hidden md:inline-block"> {link.label}</span>
            <span className="md:hidden inline-block"> {link.label.slice(0,1)}</span>
          </Link>
        ))}
      </nav>

      <SearchInput placeholder="Search" />
      <div className="relative inline-block text-left">
        <Button onClick={removeUser} className="text-sm md:text-base">Log out</Button>
      </div>
    </header>
  );
};

export default PrivateHeader;
