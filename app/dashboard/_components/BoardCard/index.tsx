"use client";

import { Actions } from "@/components/actions";
import { Footer } from "./Footer";
import Image from "next/image";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { Overlay } from "./overlay";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useAuth } from "@clerk/nextjs";

interface IBoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  authorName,
  authorId,
  createAt,
  imageUrl,
  orgId,
  isFavorite,
}: IBoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName.split(" ")[0];
  const createdAtLabel = formatDistanceToNow(createAt, {
    addSuffix: true,
  });
  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite
  );
  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(
    api.board.unfavorite
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnfavorite({ id })
        .then(() => toast.success("success unfavorited"))
        .catch(() => toast.error("Failed to unfavorite"));
    } else {
      onFavorite({ id, orgId })
        .then(() => toast.success("success favorited"))
        .catch(() => toast.error("Failed to favorite"));
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div
        className="group aspect-[100/127] border rounded-lg 
        flex flex-col justify-between overflow-hidden 
        cursor-pointer lg:hover:scale-105 transition"
      >
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button
              className="absolute top-1 right-1 opacity-0 group-hover:opacity-100
              transition-opacity px-3 py-2 outline-none"
            >
              <MoreHorizontal
                className="text-white opacity-75 hover:opacity-100
                cursor:pointer transition-opacity w-8 h-8"
              />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnfavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = () => {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full animate-pulse " />
    </div>
  );
};
