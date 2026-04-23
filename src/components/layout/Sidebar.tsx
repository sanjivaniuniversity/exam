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
  { to: "/job-learning/recording", label: "Session recording", icon: Video },
  { to: "/job-learning/assessment", label: "Summative_Assessment", icon: GraduationCap },
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
    `flex items-center gap-3 rounded-full px-4 py-3 text-[14px] font-medium transition-colors sm:px-5 sm:text-[15px] ${
      isActive
        ? "bg-primary text-primary-foreground shadow-md"
        : "text-foreground/80 hover:bg-accent hover:text-primary"
    }`;

  const subLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors sm:px-5 sm:text-[14px] ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-foreground/80 hover:bg-accent hover:text-primary"
    }`;

  return (
    <aside className="flex h-full w-full shrink-0 flex-col overflow-x-hidden bg-sidebar px-3 pb-6 pt-6 sm:px-4 lg:w-56 xl:w-60 2xl:w-64">
      <div className="px-4 pb-6">
        <h1 className="text-2xl font-bold text-primary">
          AVR Shaper<sup className="text-xs">TM</sup>
        </h1>
      </div>

      <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto" onClick={onNavigate}>
        {mainItems.map((item) => (
          <NavLink key={item.to} to={item.to} end className={linkClass}>
            <item.icon className="h-5 w-5 shrink-0" />
            <span className="min-w-0 truncate">{item.label}</span>
          </NavLink>
        ))}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setJobOpen((v) => !v);
          }}
          className={`flex items-center gap-3 rounded-full px-4 py-3 text-[14px] font-medium transition-colors sm:px-5 sm:text-[15px] ${
            jobOpen ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-accent hover:text-primary"
          }`}
        >
          <Briefcase className="h-5 w-5 shrink-0" />
          <span className="flex-1 text-left">My Job Learning</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${jobOpen ? "rotate-180" : ""}`} />
        </button>

        {jobOpen && (
          <div className="ml-4 flex flex-col gap-1 border-l border-border pl-2">
            {jobLearningItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={subLinkClass}>
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="min-w-0 truncate">{item.label}</span>
              </NavLink>
            ))}
          </div>
        )}

        {bottomItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={linkClass}>
            <item.icon className="h-5 w-5 shrink-0" />
            <span className="min-w-0 truncate">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="relative mt-4 hidden xl:block">
        <p className="px-4 text-sm text-foreground/70">Need help?</p>
        <img
          src={mascotPresent}
          alt="AVR Shaper assistant mascot"
          loading="lazy"
          width={512}
          height={896}
          className="pointer-events-none absolute -bottom-2 left-2 h-24 w-auto"
        />
      </div>
    </aside>
  );
};
