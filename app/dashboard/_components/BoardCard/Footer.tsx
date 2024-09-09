import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface IFooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled,
}: IFooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onClick();
  };
  return (
    <div className="relative bg-white p-2">
      <div className="text-[13px] truncate max-w-[calc(100%-30px)]">
        <p className="max-md:text-lg md:text-sm xl:text-base ">{title}</p>
        <p
          className="opacity-0 group-hover:opacity-100 transition-opacity
          cursor-pointer text-[11px] text-muted-foreground mt-[-10px] truncate"
        >
          {authorLabel}, {createdAtLabel}
        </p>
        <button
          disabled={disabled}
          onClick={handleClick}
          className={cn(
            "\
            opacity-0 group-hover:opacity-100 transition absolute top-3 \
            right-3 text-muted-foreground hover:text-blue-600 \
            ",
            disabled && "cursor-not-allowed opacity-75"
          )}
        >
          <Star
            className={cn(
              "h-4 w-4",
              isFavorite && "fill-blue-600 text-blue-600"
            )}
          />
        </button>
      </div>
    </div>
  );
};
