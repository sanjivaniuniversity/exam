import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import TechnicalSkills from "./pages/TechnicalSkills";
import Tasks from "./pages/Tasks";
import ProgressCard from "./pages/ProgressCard";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import SimplePage from "./pages/SimplePage";

const queryClient = new QueryClient();

const hasLoggedIn = () => localStorage.getItem("hasLoggedIn") === "true";
const hasCompletedOnboarding = () => localStorage.getItem("hasCompletedOnboarding") === "true";

const RootRoute = () => {
  if (!hasLoggedIn()) return <Navigate to="/login" replace />;
  if (!hasCompletedOnboarding()) return <Navigate to="/onboarding" replace />;
  return <Index />;
};

const LoginRoute = () => {
  if (!hasLoggedIn()) return <Login />;
  if (!hasCompletedOnboarding()) return <Navigate to="/onboarding" replace />;
  return <Navigate to="/" replace />;
};

const OnboardingRoute = () => {
  if (!hasLoggedIn()) return <Navigate to="/login" replace />;
  if (hasCompletedOnboarding()) return <Navigate to="/" replace />;
  return <Onboarding />;
};

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  if (!hasLoggedIn()) return <Navigate to="/login" replace />;
  if (!hasCompletedOnboarding()) return <Navigate to="/onboarding" replace />;
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/onboarding" element={<OnboardingRoute />} />
          <Route path="/job-learning/technical" element={<ProtectedRoute><TechnicalSkills /></ProtectedRoute>} />
          <Route path="/job-learning/calendar" element={<ProtectedRoute><SimplePage title="Batch Calendar" body="No batch sessions scheduled." /></ProtectedRoute>} />
          <Route path="/job-learning/recording" element={<ProtectedRoute><SimplePage title="Session Recording" body="No recordings available yet." /></ProtectedRoute>} />
          <Route path="/job-learning/assessment" element={<ProtectedRoute><SimplePage title="Summative Assessment" body="No assessments scheduled." /></ProtectedRoute>} />
          <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
          <Route path="/bookmarks" element={<ProtectedRoute><SimplePage title="My Bookmarks" body="You have no bookmarks yet." /></ProtectedRoute>} />
          <Route path="/progress-card" element={<ProtectedRoute><ProgressCard /></ProtectedRoute>} />
          <Route path="/feedback" element={<ProtectedRoute><SimplePage title="My Feedback" body="No feedback recorded." /></ProtectedRoute>} />
          <Route path="/help" element={<ProtectedRoute><SimplePage title="Help & Support" body="Contact support@careershaper.com" /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
