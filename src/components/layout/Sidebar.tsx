import { NavLink } from "react-router-dom";
import {
  User,
  Gauge,
  ListChecks,
  Bookmark,
  ClipboardList,
  Pencil,
  HelpCircle,
  ChevronDown,
  Briefcase,
  Star,
  CalendarDays,
  Video,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import mascotPresent from "@/assets/mascot-present.png";

const mainItems = [
  { to: "/onboarding", label: "My Onboarding", icon: User },
  { to: "/", label: "My Program Progress", icon: Gauge },
];

const jobLearningItems = [
  { to: "/job-learning/technical", label: "Technical Skills", icon: Star },
  { to: "/job-learning/calendar", label: "Batch Calendar", icon: CalendarDays },
  { to: "/job-learning/recording", label: "Session Recording", icon: Video },
  { to: "/job-learning/assessment", label: "Summative Assessment", icon: GraduationCap },
];

const bottomItems = [
  { to: "/tasks", label: "My Daily Task List", icon: ListChecks },
  { to: "/bookmarks", label: "My Bookmarks", icon: Bookmark },
  { to: "/progress-card", label: "My Progress Card", icon: ClipboardList },
  { to: "/feedback", label: "My Feedback", icon: Pencil },
  { to: "/help", label: "Help & Support", icon: HelpCircle },
];

interface SidebarProps {
  onNavigate?: () => void;
}

export const Sidebar = ({ onNavigate }: SidebarProps) => {
  const [jobOpen, setJobOpen] = useState(true);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-[22px] px-4 py-3 text-[14px] font-medium leading-tight tracking-[0.01em] transition-colors sm:px-5 ${
      isActive
        ? "bg-primary text-primary-foreground shadow-md"
        : "text-primary hover:bg-accent"
    }`;

  const subLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium leading-tight tracking-[0.01em] transition-colors ${
      isActive
        ? "bg-white/15 text-white"
        : "text-white/95 hover:bg-white/10"
    }`;

  return (
    <aside className="flex h-full w-full shrink-0 flex-col overflow-x-hidden border-r border-border/70 bg-sidebar px-3 pb-5 pt-6 sm:px-4 lg:w-[268px]">
      <div className="px-4 pb-6">
        <h1 className="text-[33px] font-semibold tracking-tight text-primary">
          AVR Shaper<sup className="text-xs">TM</sup>
        </h1>
      </div>

      <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto pr-1" onClick={onNavigate}>
        {mainItems.map((item) => (
          <NavLink key={item.to} to={item.to} end className={linkClass}>
            <item.icon className="h-5 w-5 shrink-0" />
            <span className="min-w-0 whitespace-nowrap">{item.label}</span>
          </NavLink>
        ))}

        <div className={`mt-1 rounded-[24px] p-2 ${jobOpen ? "bg-primary" : ""}`}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setJobOpen((v) => !v);
            }}
            className={`flex w-full items-center gap-3 rounded-[20px] px-3 py-3 text-[14px] font-medium leading-tight tracking-[0.01em] transition-colors ${
              jobOpen ? "text-white" : "text-primary hover:bg-accent"
            }`}
          >
            <Briefcase className="h-5 w-5 shrink-0" />
            <span className="flex-1 text-left">My Job Learning</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${jobOpen ? "rotate-180" : ""}`} />
          </button>

          {jobOpen && (
            <div className="mt-1 flex flex-col gap-1 px-1 pb-1">
              {jobLearningItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={subLinkClass}>
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="min-w-0 truncate">{item.label}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <div className="mt-2 space-y-1.5">
          {bottomItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              <item.icon className="h-5 w-5 shrink-0" />
              <span className="min-w-0 whitespace-nowrap">{item.label}</span>
            </NavLink>
          ))}
        </div>

      </nav>

      <div className="mt-3 hidden border-t border-border/70 px-2 pt-3 xl:block">
        <p className="px-2 text-sm font-medium tracking-[0.01em] text-foreground/70">Need help?</p>
        <img
          src={mascotPresent}
          alt="AVR Shaper assistant mascot"
          loading="lazy"
          width={512}
          height={896}
          className="pointer-events-none mt-2 h-20 w-auto"
        />
      </div>
    </aside>
  );
};
