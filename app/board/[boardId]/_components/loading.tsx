import { InfoSkeleton } from "./info";
import { Loader } from "lucide-react";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "@/app/board/[boardId]/_components/toolbar";

export const Loading = () => {
  return (
    <main
      className="w-full h-full relative bg-neutral-100 
      touch-none flex justify-center items-center"
    >
      <Loader className="w-8 h-8 text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
