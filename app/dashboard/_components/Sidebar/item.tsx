"use client";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Hint } from "@/components/hint";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = id === organization?.id;

  const handleClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };
  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="center" sideOffset={18}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          onClick={handleClick}
          className={cn(
            "rounded-lg cursor-pointer opacity-60 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};
