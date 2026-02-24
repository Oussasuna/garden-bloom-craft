import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";

type DecorIconProps = {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
};

export function DecorIcon({ position, className }: DecorIconProps) {
  const positionClasses = {
    "top-left": "-top-3 -left-3",
    "top-right": "-top-3 -right-3",
    "bottom-left": "-bottom-3 -left-3",
    "bottom-right": "-bottom-3 -right-3",
  };

  return (
    <div
      className={cn(
        "absolute z-10 rounded-full border bg-background p-0.5 shadow-sm",
        positionClasses[position],
        className
      )}
    >
      <PlusIcon className="size-4 text-muted-foreground" />
    </div>
  );
}
