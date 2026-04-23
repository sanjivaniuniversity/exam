import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ChevronRight, Star } from "lucide-react";
import mascotPresent from "@/assets/mascot-present.png";

const TechnicalSkills = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <nav className="flex items-center gap-3 text-xl">
          <span className="font-semibold text-foreground">My Job Learning</span>
          <ChevronRight className="h-5 w-5 text-foreground/40" />
          <span className="font-semibold text-foreground">Technical Skills</span>
        </nav>

        <div className="flex items-end gap-6">
          <img src={mascotPresent} alt="Mascot presenting courses" width={512} height={896} loading="lazy" className="hidden h-72 w-auto md:block" />
          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            {["Springboot", "DEVOPS"].map((c) => (
              <button key={c} className="card-soft group flex h-36 flex-col justify-between rounded-2xl p-4 text-left transition-transform hover:-translate-y-0.5">
                <div className="flex items-start justify-between">
                  <span className="font-medium text-foreground">{c}</span>
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
                <div className="flex items-end justify-between">
                  <Star className="h-6 w-6 fill-brand-yellow text-brand-yellow" />
                  <span className="rounded-full bg-card px-2.5 py-0.5 text-xs font-semibold text-foreground/60 shadow-sm">0%</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-2 flex justify-center">
          <span className="h-2 w-2 rounded-full bg-foreground/40" />
        </div>

        <div className="space-y-4 pt-6">
          <h2 className="text-2xl font-bold text-foreground">Springboot</h2>
          <h3 className="text-lg font-semibold text-foreground/70">BATCH CALENDER</h3>
          <div className="rounded-3xl bg-card p-6 text-foreground/60 shadow-[var(--shadow-soft)]">
            No upcoming sessions scheduled. Check back soon!
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TechnicalSkills;
