import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const CalendarWidget = () => {
  const today = new Date(2026, 3, 18); // April 18, 2026 to match screenshot
  const [view, setView] = useState({ month: 3, year: 2026 });

  const firstDay = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const daysInPrevMonth = new Date(view.year, view.month, 0).getDate();

  const cells: { day: number; current: boolean; date: Date }[] = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({
      day: daysInPrevMonth - i,
      current: false,
      date: new Date(view.year, view.month - 1, daysInPrevMonth - i),
    });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true, date: new Date(view.year, view.month, d) });
  }
  while (cells.length % 7 !== 0 || cells.length < 42) {
    const idx = cells.length - daysInMonth - firstDay + 1;
    cells.push({ day: idx, current: false, date: new Date(view.year, view.month + 1, idx) });
    if (cells.length >= 42) break;
  }

  const isToday = (d: Date) =>
    d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();

  const nav = (delta: number) => {
    const m = view.month + delta;
    const y = view.year + Math.floor(m / 12);
    setView({ month: ((m % 12) + 12) % 12, year: y });
  };

  return (
    <div className="rounded-3xl bg-brand-cream p-4 shadow-[var(--shadow-soft)] 2xl:p-5">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={() => nav(-1)} className="rounded-full p-1 text-foreground/60 hover:bg-card" aria-label="Previous month">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="text-base font-semibold text-foreground 2xl:text-lg">
          {months[view.month]} <span className="ml-1">{view.year}</span>
        </h3>
        <button onClick={() => nav(1)} className="rounded-full p-1 text-foreground/60 hover:bg-card" aria-label="Next month">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-medium text-foreground/60">
        {dayLabels.map((d) => (
          <div key={d} className="py-1">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs 2xl:text-sm">
        {cells.map((c, i) => (
          <button
            key={i}
            className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full transition-colors 2xl:h-8 2xl:w-8 ${
              isToday(c.date)
                ? "bg-brand-orange font-semibold text-white"
                : c.current
                ? "text-foreground hover:bg-card"
                : "text-foreground/30"
            }`}
          >
            {c.day}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-1.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary-glow" />
          <span className="text-foreground/70">Completed Event</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-orange" />
          <span className="text-foreground/70">Upcoming Event</span>
        </div>
      </div>
    </div>
  );
};
