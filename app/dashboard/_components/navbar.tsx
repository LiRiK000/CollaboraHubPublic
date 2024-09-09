"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";

import { InviteBtn } from "@/app/dashboard/_components/invite-btn";
import { SearchInput } from "./search-input";

export const Navbar = () => {
  const { organization } = useOrganization();
  return (
    <div className="flex gap-x-4 p-5">
      <div className="hidden items-center lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {organization && <InviteBtn />}

      <UserButton />
    </div>
  );
};
