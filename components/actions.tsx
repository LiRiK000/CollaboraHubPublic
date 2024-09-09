"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link2, LucidePencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/ConfirmModal";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useRenameModal } from "@/store/useRenameModal";

interface IActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffSet?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffSet,
  id,
  title,
}: IActionsProps) => {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);

  /*
   * @description A function to copy the link to the clipboard
   */
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/board/${id}`
      );
      toast.success(`Link copied to clipboard: ${title}`);
    } catch (error) {
      console.error("Failed to copy link", error);
      toast.error("Failed to copy link");
    }
  };

  /*
   * @description A function to delete the board
   */
  const handleDeleteBoard = () => {
    mutate({ id })
      .then(() => {
        toast.success("Board deleted");
      })
      .catch(() => {
        toast.error("Failed to delete board");
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffSet}
        className="w-64"
      >
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={handleCopyLink}
        >
          <Link2 className="w-4 h-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onClick={() => onOpen(id, title)}
        >
          <LucidePencil className="w-4 h-4 mr-2" />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header={"Delete board?"}
          description="This action cannot be undone. Are you sure you want
  to delete this board?"
          disabled={pending}
          onConfirm={handleDeleteBoard}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete board
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
