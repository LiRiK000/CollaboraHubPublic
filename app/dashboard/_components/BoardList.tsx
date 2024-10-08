"use client";

import { BoardCard } from "./BoardCard";
import { EmptyBoards } from "./EmptyBoards";
import { EmptyFavorites } from "./EmptyFavorites";
import { EmptySearch } from "./EmptySearch";
import { NewBoardButton } from "./NewBoardButton";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data: any = useQuery(api.boards.get, { orgId, ...query });
  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl font-semibold">
          {query.favorites ? "Favorites Boards" : "Team Boards"}
        </h2>
        <div
          className="grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
        gap-5 mt-8 pb-10"
        >
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }
  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }
  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold">
        {query.favorites ? "Favorites Boards" : "Team Boards"}
      </h2>
      <div
        className="grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
        gap-5 mt-8 pb-10"
      >
        <NewBoardButton orgId={orgId} />
        {data?.map((board: any) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
