import { Plus } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useRouter } from "next/navigation";

interface INewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: INewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const router = useRouter();

  const handleClick = () => {
    mutate({ title: "Untitled Board", orgId })
      .then((id: string) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      onClick={handleClick}
      disabled={pending || disabled}
      className={cn(
        "col-span-1 aspect-[100/127] \
        bg-blue-600 rounded-lg hover:bg-blue-800 transition \
        flex flex-col items-center justify-center py-6",
        (pending || disabled) && "cursor-not-allowed opacity-75"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-white text-sm font-light">New Board</p>
    </button>
  );
};
