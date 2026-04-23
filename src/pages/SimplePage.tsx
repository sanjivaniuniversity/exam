import { DashboardLayout } from "@/components/layout/DashboardLayout";

const SimplePage = ({ title, body }: { title: string; body: string }) => (
  <DashboardLayout>
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <div className="rounded-3xl bg-card p-5 text-foreground/60 shadow-[var(--shadow-soft)] sm:p-8">{body}</div>
    </div>
  </DashboardLayout>
);

export default SimplePage;
