import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Search, Settings, Users, ChevronRight } from "lucide-react";

const groups = [
  { label: "Starred", count: 1 },
  { label: "Group", count: 0 },
  { label: "Private", count: 0 },
];

const Messages = () => {
  return (
    <DashboardLayout>
      <div className="rounded-3xl bg-card p-4 shadow-[var(--shadow-soft)] sm:p-6">
        <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input placeholder="Search" className="w-full rounded-full border border-border bg-card py-2 pl-4 pr-10 text-sm outline-none focus:border-primary" />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-foreground/40" />
              </div>
              <button className="rounded-full border border-border p-2 hover:bg-accent" aria-label="Settings">
                <Settings className="h-4 w-4 text-foreground/60" />
              </button>
            </div>

            <button className="flex w-full items-center justify-end gap-2 text-sm text-primary">
              <Users className="h-4 w-4" /> Contacts
            </button>

            <ul className="space-y-2">
              {groups.map((g) => (
                <li key={g.label}>
                  <button className="flex w-full items-center gap-2 rounded-xl bg-accent px-4 py-3 text-left text-sm text-primary hover:bg-accent/80">
                    <ChevronRight className="h-4 w-4" />
                    <span className="flex-1">{g.label} ({g.count})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-h-[260px] items-center justify-center rounded-2xl bg-muted/30 p-4 text-center text-foreground/50 sm:min-h-[400px]">
            Select a conversation to start messaging
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
