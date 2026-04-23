import { LogOut, MessageCircle, User } from "lucide-react";
import { Link } from "react-router-dom";

interface TopBarProps {
  userName?: string;
  programCode?: string;
  announcement?: string;
}

export const TopBar = ({
  userName = "VAIBHAV SANTOSH MORE",
  programCode = "Sanjivani_AMJ25_FSJava_Y3_S5_01",
  announcement = "There are no announcements",
}: TopBarProps) => {
  return (
    <header className="flex flex-col gap-4 px-4 pb-2 pt-14 sm:gap-6 sm:px-6 sm:pt-16 lg:px-10 lg:pt-6">
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
            <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16">
              <circle cx="32" cy="32" r="28" fill="hsl(var(--accent))" />
              <circle cx="32" cy="32" r="22" fill="hsl(var(--card))" />
            </svg>
            <span className="absolute text-xs font-semibold text-primary">0%</span>
          </div>
          <div className="min-w-0">
            <h2 className="break-words text-lg font-bold text-primary sm:text-xl lg:text-2xl">
              Hi {userName} <span className="text-success">:)</span>
            </h2>
            <p className="text-sm text-foreground/70">You are doing great!</p>
          </div>
        </div>

        <div className="w-full md:flex-1 md:px-4 lg:px-8">
          <div className="rounded-full bg-accent px-6 py-3 text-center text-sm text-foreground/80">
            {announcement}
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
          <div className="flex items-center gap-1 rounded-full border-2 border-primary px-3 py-1.5">
            <button className="rounded-full p-1.5 text-primary hover:bg-accent" aria-label="Logout">
              <LogOut className="h-4 w-4" />
            </button>
            <button className="rounded-full p-1.5 text-primary hover:bg-accent" aria-label="Messages">
              <Link to="/messages"><MessageCircle className="h-4 w-4" /></Link>
            </button>
            <Link to="/profile" className="rounded-full bg-muted p-1.5 text-foreground/60 hover:bg-accent" aria-label="Profile">
              <User className="h-4 w-4" />
            </Link>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-xs font-bold text-destructive-foreground">
              C
            </div>
            <div className="text-xs leading-tight">
              <div className="font-bold text-destructive">AVRCraft Academy</div>
              <div className="text-[10px] text-foreground/60">Crafting Your Path to Success</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-card px-4 py-3 text-center shadow-[var(--shadow-soft)] sm:rounded-full sm:px-8 sm:py-4">
        <span className="break-all text-sm font-semibold text-primary sm:text-base">{programCode}</span>
      </div>
    </header>
  );
};
