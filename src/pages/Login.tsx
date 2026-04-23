import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import mascotReading from "@/assets/mascot-reading.png";

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("hasLoggedIn", "true");
    localStorage.removeItem("hasCompletedOnboarding");
    navigate("/onboarding", { replace: true });
  };

  return (
    <div className="min-h-screen w-full bg-[hsl(var(--brand-blue-bg))]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left side - illustration */}
        <div className="relative hidden flex-col justify-between overflow-hidden p-10 text-white lg:flex">
          <h2 className="text-3xl font-semibold">Your differentiated learning journey, begins here.</h2>
          <div className="flex items-end justify-center">
            <img src={mascotReading} alt="AVR Shaper mascot reading a book" width={704} height={896} className="max-h-[70vh] w-auto object-contain" />
          </div>
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/30" />
        </div>

        {/* Right side - login form */}
        <div className="relative flex items-center justify-center bg-card p-6 lg:rounded-l-[80px]">
          <div className="absolute right-8 top-8 hidden items-center gap-2 lg:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-destructive text-sm font-bold text-destructive-foreground">C</div>
            <div className="text-xs leading-tight">
              <div className="font-bold text-destructive">AVRCraft Academy</div>
              <div className="text-[10px] text-foreground/60">Crafting Your Path to Success</div>
            </div>
          </div>

          <div className="w-full max-w-md space-y-8">
            <h1 className="text-2xl font-bold text-primary">
              AVR Shaper<sup className="text-xs">TM</sup>
            </h1>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="userid" className="mb-1 block text-sm text-primary">User ID</label>
                <input id="userid" type="text" className="w-full border-0 border-b border-border bg-transparent py-2 text-foreground outline-none focus:border-primary" />
              </div>
              <div className="relative">
                <label htmlFor="password" className="mb-1 block text-sm text-primary">Password</label>
                <input id="password" type={showPwd ? "text" : "password"} className="w-full border-0 border-b border-border bg-transparent py-2 text-foreground outline-none focus:border-primary" />
                <button type="button" onClick={() => setShowPwd(v => !v)} className="absolute right-0 top-7 text-foreground/50" aria-label="Toggle password visibility">
                  {showPwd ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-primary">
                  <input type="checkbox" className="h-4 w-4 rounded border-primary text-primary" defaultChecked />
                  Remember me
                </label>
                <a href="#" className="text-primary hover:underline">Forgot password?</a>
              </div>

              <label className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                <input type="checkbox" className="h-4 w-4 rounded border-border" />
                I agree with the <a className="text-primary underline" href="#">Terms & Conditions</a>
              </label>

              <button
                type="button"
                onClick={handleLogin}
                className="block w-full rounded-full bg-primary py-3 text-center font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Login
              </button>

              <p className="text-center text-sm text-foreground/60">
                Having trouble logging in? <a href="#" className="text-primary underline">Help Center</a>
              </p>
            </form>

            <div className="absolute bottom-6 right-8 hidden items-center gap-2 text-sm font-semibold text-primary lg:flex">
              Powered by <span className="text-lg font-bold">HCLTech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
