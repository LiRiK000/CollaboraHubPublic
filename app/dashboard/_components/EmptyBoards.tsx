import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const handleClick = () => {
    if (!organization) return;
    mutate({
      title: "Untitled Board",
      orgId: organization.id,
    })
      .then((id: string) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" width={110} height={110} alt="Empty Favorites" />
      <h2 className="text-2xl font-semibold mt-6">Create yout first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} size="lg" onClick={handleClick}>
          Create Board
        </Button>
      </div>
    </div>
  );
};
