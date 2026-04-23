import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useState } from "react";

const tabs = ["MCQ", "Communication", "LAB"] as const;

const Stat = ({ value, label }: { value: string; label: string }) => {
  const r = 28;
  const c = 2 * Math.PI * r;
  const num = parseFloat(value) || 0;
  const dash = (num / 100) * c;
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
          <circle cx="40" cy="40" r={r} stroke="hsl(var(--accent))" strokeWidth="6" fill="none" />
          <circle cx="40" cy="40" r={r} stroke="hsl(var(--primary))" strokeWidth="6" fill="none" strokeDasharray={`${dash} ${c}`} strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-base font-bold">{value}</div>
      </div>
      <div className="text-sm text-foreground/70">{label}</div>
    </div>
  );
};

const ProgressCard = () => {
  const [tab, setTab] = useState<typeof tabs[number]>("MCQ");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)]">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-foreground/50">👤</div>
              <div>
                <h2 className="text-lg font-bold text-foreground">VAIBHAV SANTOSH MORE</h2>
                <p className="text-sm text-foreground/60">T-code : vaibhav.more_24uce@sanjivani.edu.in</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <Stat value="-" label="JRI Score" />
              <Stat value="64%" label="Attendance" />
              <Stat value="78%" label="Daily Quiz Avg.Score" />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-t-2xl px-8 py-3 text-sm font-medium transition-colors ${
                tab === t ? "bg-accent text-primary" : "bg-card text-foreground/60 hover:bg-accent/50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)]">
          <div className="grid gap-6 md:grid-cols-[280px_1fr]">
            <div className="rounded-2xl border border-border p-5">
              <h3 className="font-semibold text-foreground">{tab} Assessments</h3>
              <p className="mt-2 text-sm text-foreground/70">Avg.score : <span className="font-bold">0%</span></p>
            </div>
            <div>
              <div className="mb-3 flex justify-between border-b border-border pb-2 text-sm font-semibold">
                <span>Assessments</span>
                <span>%</span>
              </div>
              <p className="text-sm text-foreground/60">No records found.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProgressCard;
