import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "@/src/components/shared/Header";
import { AuthProvider } from "@/src/contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <section className="min-h-screen bg-white">
        <Header />
        <main className="">{children}</main>
        <ToastContainer />
      </section>
    </AuthProvider>
  );
};

export default Layout;
