import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { CalendarWidget } from "@/components/dashboard/CalendarWidget";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  showCalendar?: boolean;
}

export const DashboardLayout = ({ children, showCalendar = true }: DashboardLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-3 top-3 z-30 rounded-full bg-card p-2 shadow-md sm:left-4 sm:top-4 lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5 text-primary" />
      </button>

      <div className="flex">
        {/* Desktop sidebar */}
        <div className="sticky top-0 hidden h-screen lg:block">
          <Sidebar />
        </div>

        {/* Mobile sidebar */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
            <div className="absolute left-0 top-0 h-full w-[84vw] max-w-72">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-2 top-2 z-50 rounded-full bg-card p-1.5 shadow"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
              <Sidebar onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        )}

        <main className="flex-1 min-w-0">
          <TopBar />
          <div className="grid gap-4 px-4 pb-8 pt-2 sm:gap-6 sm:px-6 sm:pb-10 lg:px-7 xl:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] xl:px-8 2xl:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] 2xl:px-10">
            <div className="min-w-0">{children}</div>
            {showCalendar && (
              <aside className="space-y-6 min-w-0">
                <CalendarWidget />
              </aside>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
