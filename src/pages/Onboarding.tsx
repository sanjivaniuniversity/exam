import { useNavigate } from "react-router-dom";
import mascotWave from "@/assets/mascot-wave.png";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("hasCompletedOnboarding", "true");
    navigate("/", { replace: true });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: "var(--gradient-onboarding)" }}>
      {/* Decorative triangle */}
      <svg className="absolute left-10 top-1/3 hidden opacity-30 lg:block" width="280" height="220" viewBox="0 0 280 220" fill="none">
        <path d="M20 200 L260 30 L200 210 Z" stroke="white" strokeWidth="3" />
      </svg>
      {/* Plant decoration */}
      <div className="absolute bottom-6 left-10 hidden lg:block">
        <div className="relative">
          <div className="h-12 w-16 rounded-b-2xl bg-card" />
          <div className="absolute -top-10 left-2 h-12 w-3 rotate-12 rounded-full bg-success" />
          <div className="absolute -top-12 left-6 h-14 w-3 rounded-full bg-success" />
          <div className="absolute -top-10 left-10 h-12 w-3 -rotate-12 rounded-full bg-success" />
        </div>
      </div>

      <div className="relative z-10 ml-auto flex min-h-screen w-full flex-col bg-card p-6 lg:w-[70%] lg:rounded-l-[120px] lg:p-12">
        <div className="flex items-start justify-between">
          <h1 className="text-2xl font-bold text-primary">
            AVR Shaper<sup className="text-xs">TM</sup>
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-destructive text-sm font-bold text-destructive-foreground">C</div>
            <div className="text-xs leading-tight">
              <div className="font-bold text-destructive">AVRCraft Academy</div>
              <div className="text-[10px] text-foreground/60">Crafting Your Path to Success</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-1 items-center gap-8">
          <img src={mascotWave} alt="AVR Shaper mascot waving" width={512} height={896} className="hidden h-[60vh] w-auto md:block" />

          <div className="flex-1 rounded-3xl bg-card p-6 shadow-[var(--shadow-card)] md:p-10">
            <p className="text-xl text-foreground md:text-2xl">
              It's great to know that you are passionate about becoming a Welcome to Full Stack Java Developer
            </p>
            <p className="mt-6 text-2xl font-bold text-success md:text-3xl">
              Well, you're in the right place!
            </p>
            <div className="mt-10 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full border-2 border-primary px-8 py-2.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-2 text-sm font-semibold text-primary">
          Powered by <span className="text-lg font-bold">HCLTech</span>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
