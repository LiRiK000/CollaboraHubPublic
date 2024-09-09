"use client";

import { ChangeEvent, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import qs from "query-string";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [debounceValue] = useDebounceValue(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/dashboard",
        query: {
          search: debounceValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debounceValue]);

  return (
    <div className="relative w-full">
      <Search
        className="absolute top-1/2 left-3 transform
        -translate-y-1/2 text-muted-foreground h-4 w-4"
      />
      <Input
        className="pl-8 border-[1px] border-[#868686] focus:border-[#000] transition"
        placeholder="Search"
        onChange={handleChange}
        value={value}
        type="search"
      />
    </div>
  );
};
