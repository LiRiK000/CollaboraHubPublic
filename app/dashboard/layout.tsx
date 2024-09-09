import { Navbar } from "./_components/navbar";
import OrgSidebar from "./_components/org-sidebar";
import React from "react";
import Sidebar from "./_components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className="h-full flex text-xl 3xl:text-2xl 4xl:text-4xl">
      <div className="flex fixed h-full ">
        <Sidebar />
      </div>
      <div
        className="h-full flex-1 
        max-md:ml-[80px] md:ml-[80px] 3xl:ml-[120px] 4xl:ml-[160px]"
      >
        <div className="flex h-full">
          <OrgSidebar />
          <div className="h-full w-full flex-1">
            <Navbar />
            <main className="max-w-[80vw] max-lg:max-w-[100vw]">
              {children}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
