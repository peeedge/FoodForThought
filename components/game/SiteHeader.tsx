import type { ReactNode } from "react";
import { PlateMark } from "@/components/ui/Icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function SiteHeader({ actions }: { actions?: ReactNode }) {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex h-16 w-full max-w-[42rem] items-center justify-between px-5">
        <h1 className="flex items-center gap-2.5">
          <PlateMark className="h-7 w-7 text-accent" />
          <span className="font-display text-[1.65rem] leading-none tracking-tight">
            Food <em className="font-normal italic">for Thought</em>
          </span>
        </h1>
        <div className="-mr-2 flex items-center">
          {actions}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
