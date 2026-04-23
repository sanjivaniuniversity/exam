import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Plus, ChevronDown } from "lucide-react";

const tasks = [
  { num: 1, title: "Introduction_to_DevOps_Day_2", priority: "Low", deadline: "09 February 27" },
  { num: 2, title: "Linux_and_Shell_Scripting_Day_3", priority: "Low", deadline: "09 February 27" },
  { num: 3, title: "Linux_and_Shell_Scripting_Day_6", priority: "Low", deadline: "09 February 27" },
  { num: 4, title: "Software_Version_Control_Day_11", priority: "Low", deadline: "09 February 27" },
  { num: 5, title: "Software_Version_Control_Day_12", priority: "Low", deadline: "09 February 27" },
  { num: 6, title: "Docker_Day_30", priority: "Low", deadline: "09 February 27" },
];

const Tasks = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">My Daily Task List</h2>

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="flex flex-wrap gap-6">
            {["Filter by Time", "Filter by Status"].map((label) => (
              <div key={label}>
                <label className="mb-1 block text-sm text-primary">{label}</label>
                <button className="flex w-44 items-center justify-between rounded-full border border-primary bg-card px-4 py-2 text-sm">
                  All <ChevronDown className="h-4 w-4 text-primary" />
                </button>
              </div>
            ))}
          </div>
          <button className="flex items-center gap-2 rounded-full bg-primary-glow px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-90">
            <Plus className="h-4 w-4" /> Add task
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {tasks.map((t) => (
            <article key={t.num} className="card-soft rounded-2xl p-5">
              <p className="text-sm text-foreground">
                You have a pending quiz <span className="font-bold">{t.num}</span>. {t.title}.
              </p>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Complete now ›
              </a>
              <div className="mt-3">
                <span className="rounded-full bg-success px-3 py-1 text-xs font-medium text-success-foreground">{t.priority}</span>
              </div>
              <p className="mt-3 text-xs text-destructive">Deadline on: {t.deadline}</p>
            </article>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tasks;
