import React, { useState } from "react";
import Modal from "@/src/components/common/Modal";
import LoginForm from "@/src/components/business/LoginForm";
import { useUser } from "@/src/hooks/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "classnames";
import { Button } from "../../common";
import { publicLinks } from "@/src/constants/navLinks";
import { INavLink } from "@/src/types/shared";
interface HeaderProps {}

const PublicHeader: React.FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginModalOpen = () => {
    setIsOpen(true);
  };
  const handleLogoutModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleLogoutModalClose}>
        <LoginForm onSubmit={handleLogoutModalClose} />
      </Modal>

      <header className="bg-white sticky top-0 z-40 flex justify-between items-center p-4 shadow-md gap-x-2">
        <h3 className="font-medium text-red-100 text-xl">Pinterest</h3>
        <nav className="hidden md:flex space-x-1">
          {publicLinks.map((link: INavLink) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "hover:text-blue-500 text-base px-5 py-3 rounded-full",
                router.route === link.href && "bg-dark text-white "
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button onClick={handleLoginModalOpen}>Login</Button>
      </header>
    </>
  );
};

export default PublicHeader;
