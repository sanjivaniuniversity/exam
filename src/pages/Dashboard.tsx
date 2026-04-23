import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Star, ChevronRight, Info } from "lucide-react";
import { useState } from "react";

const tabs = ["Completed", "Ongoing", "Upcoming"] as const;
type Tab = typeof tabs[number];

const courses = [
  { name: "Springboot", progress: 0 },
  { name: "DEVOPS", progress: 0 },
];

const quizItems = [
  { name: "FA_DQ_SE_11", date: "18 Jun 2025", score: 80 },
  { name: "DQ_SE_1", date: "18 Jun 2025", score: 70 },
  { name: "FA_DQ_Threads", date: "18 Jun 2025", score: 90 },
  { name: "FA_DQ_Introduction_To_Java", date: "18 Jun 2025", score: 90 },
  { name: "FA_DQ_Exception", date: "18 Jun 2025", score: 60 },
];

const ProgressRing = ({ value, label }: { value: number; label: string }) => {
  const r = 36;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg width="100" height="100" viewBox="0 0 100 100" className="-rotate-90">
          <circle cx="50" cy="50" r={r} stroke="hsl(var(--accent))" strokeWidth="8" fill="none" />
          <circle cx="50" cy="50" r={r} stroke="hsl(var(--primary))" strokeWidth="8" fill="none" strokeDasharray={`${dash} ${c}`} strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-foreground">{value}%</div>
      </div>
      <div className="flex items-center gap-1.5 text-sm">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="text-foreground/70">{label}</span>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [tab, setTab] = useState<Tab>("Upcoming");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Top row: courses tabs + Jordy's word */}
        <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
          <div className="rounded-3xl bg-card p-4 shadow-[var(--shadow-soft)] sm:p-6">
            <div className="flex gap-6 overflow-x-auto border-b border-border">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative whitespace-nowrap pb-3 text-sm font-medium transition-colors sm:text-base ${
                    tab === t ? "text-primary" : "text-foreground/50 hover:text-foreground"
                  }`}
                >
                  {t}
                  {tab === t && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary" />}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {courses.map((c) => (
                <button key={c.name} className="card-soft group flex h-32 flex-col justify-between rounded-2xl p-4 text-left transition-transform hover:-translate-y-0.5">
                  <div className="flex items-start justify-between">
                    <span className="font-medium text-foreground">{c.name}</span>
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-end justify-between">
                    <Star className="h-6 w-6 fill-brand-yellow text-brand-yellow" />
                    <span className="rounded-full bg-card px-2.5 py-0.5 text-xs font-semibold text-foreground/60 shadow-sm">{c.progress}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-card p-4 shadow-[var(--shadow-soft)] sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl">📖</div>
              <div>
                <div className="font-bold text-success">Jordy's</div>
                <div className="text-lg font-bold text-foreground">Word Factory</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-destructive">Kindle</span>
              <ChevronRight className="h-5 w-5 text-primary" />
            </div>
            <p className="mt-2 text-sm text-foreground/70">transitive verb <em>(kindle)</em></p>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
              <li>to start (a fire) burning : light using dry twigs, to kindle a fire</li>
              <li>to stir up : arouse, kindle a child's interest in art</li>
              <li>to bring into being : start</li>
              <li>to cause to glow : illuminate animation kindling his pale face</li>
            </ul>
          </div>
        </div>

        {/* Second row: Performance, Participation, Educators */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div className="card-soft rounded-3xl p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Performance</h3>
              <Info className="h-4 w-4 text-foreground/40" />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2">
              <ProgressRing value={78} label="Mine" />
              <ProgressRing value={75} label="My peers" />
            </div>
          </div>

          <div className="card-soft rounded-3xl p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Participation</h3>
              <Info className="h-4 w-4 text-foreground/40" />
            </div>
            <p className="mt-4 text-sm text-foreground">The Required Attendance is 75 %.</p>
            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary" /> Mine
                </div>
                <span className="font-semibold text-destructive">64%</span>
              </div>
              <div className="h-2 rounded-full bg-card">
                <div className="h-full rounded-full bg-primary-glow" style={{ width: "64%" }} />
              </div>
            </div>
          </div>

          <div className="card-green rounded-3xl p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-foreground">Your Educator(s)</h3>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-sm font-bold text-foreground/70">AY</div>
              <span className="font-medium">Ashish Yadav</span>
            </div>
            <div className="mt-6 flex justify-center gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-foreground" : "bg-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Third row: Quiz, Labs, People Skills */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div className="card-soft rounded-3xl p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Quiz</h3>
              <Info className="h-4 w-4 text-foreground/40" />
            </div>
            <ul className="mt-4 space-y-3">
              {quizItems.map((q) => (
                <li key={q.name} className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground">{q.name}</div>
                    <div className="text-xs text-destructive">{q.date}</div>
                  </div>
                  <span className="text-sm font-bold text-primary">{q.score}%</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft rounded-3xl p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Labs</h3>
              <Info className="h-4 w-4 text-foreground/40" />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <span className="text-sm text-foreground">Spring Boot Assignment – 1</span>
              <span className="text-sm font-bold text-primary">0%</span>
            </div>
          </div>
          <div className="card-soft rounded-3xl p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">People Skills</h3>
              <Info className="h-4 w-4 text-foreground/40" />
            </div>
            <p className="mt-4 text-sm text-foreground/60">No records found.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
