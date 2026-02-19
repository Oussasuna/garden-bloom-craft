import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useToast } from "@/hooks/use-toast";
import { X, Eye, EyeOff, RefreshCw } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "signin" | "signup";
}

const TeamIllustration = () => (
  <svg width="220" height="85" viewBox="0 0 220 85" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="24" r="15" fill="#F5F5F5" stroke="#1a1a1a" strokeWidth="1.5"/>
    <path d="M13 72c0-12.2 9.8-22 22-22s22 9.8 22 22" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
    <circle cx="30" cy="24" r="1.8" fill="#1a1a1a"/><circle cx="40" cy="24" r="1.8" fill="#1a1a1a"/>
    <path d="M31 29c1.5 2 7 2 8 0" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
    <path d="M27 17c2-4 9-5 13-3" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
    <circle cx="80" cy="22" r="15" fill="#E8F4FF" stroke="#1a1a1a" strokeWidth="1.5"/>
    <path d="M58 70c0-12.2 9.8-22 22-22s22 9.8 22 22" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
    <circle cx="75" cy="22" r="1.8" fill="#1a1a1a"/><circle cx="85" cy="22" r="1.8" fill="#1a1a1a"/>
    <path d="M76 27c1.5 2 7 2 8 0" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
    <path d="M71 15c2-3 10-4 13-2" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
    <circle cx="135" cy="24" r="15" fill="#FFF0F5" stroke="#1a1a1a" strokeWidth="1.5"/>
    <path d="M113 72c0-12.2 9.8-22 22-22s22 9.8 22 22" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
    <circle cx="130" cy="24" r="1.8" fill="#1a1a1a"/><circle cx="140" cy="24" r="1.8" fill="#1a1a1a"/>
    <path d="M131 29c1.5 2 7 2 8 0" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
    <path d="M120 18c3-5 10-6 15-4" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
    <circle cx="185" cy="22" r="15" fill="#F0FFF4" stroke="#1a1a1a" strokeWidth="1.5"/>
    <path d="M163 70c0-12.2 9.8-22 22-22s22 9.8 22 22" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
    <circle cx="180" cy="22" r="1.8" fill="#1a1a1a"/><circle cx="190" cy="22" r="1.8" fill="#1a1a1a"/>
    <path d="M181 27c1.5 2 7 2 8 0" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
    <path d="M173 15c3-4 11-5 14-3" stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const universities = [
  "Harvard University", "MIT", "Stanford University", "Yale University",
  "Oxford University", "Cambridge University", "Columbia University",
  "Princeton University", "UC Berkeley", "UCLA", "Hong Kong University",
  "Graphic Era University"
];

export default function AuthModal({ isOpen, onClose, defaultMode = "signup" }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode);
  const [isUniversityMode, setIsUniversityMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: "",
        options: { emailRedirectTo: window.location.origin }
      });
      if (error) throw error;
      toast({ title: "Check your email", description: "We sent you a signup link." });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast({ title: "Welcome back!" });
      onClose();
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      const { error } = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (error) {
        toast({ title: "Error", description: String(error), variant: "destructive" });
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[460px] mx-4 p-8 animate-in slide-in-from-bottom-4 zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex justify-center mb-4">
          <TeamIllustration />
        </div>

        {isUniversityMode ? (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-1">JobExCV Academia</h2>
            <p className="text-[15px] text-gray-500 mb-6">Sign in and supercharge your career.</p>

            <select
              value={selectedUniversity}
              onChange={(e) => setSelectedUniversity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-full text-[15px] outline-none mb-4 bg-white appearance-none cursor-pointer text-gray-500 focus:border-gray-400 transition-colors"
            >
              <option value="" disabled>Select your organization</option>
              {universities.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>

            <button
              disabled={!selectedUniversity || loading}
              className="w-full py-3 rounded-full text-white font-semibold text-[15px] bg-[#888] hover:bg-[#666] transition-colors disabled:opacity-50 mb-4"
            >
              Continue
            </button>

            <button
              onClick={() => setIsUniversityMode(false)}
              className="w-full py-3 border border-gray-200 rounded-full bg-white cursor-pointer text-[13px] text-gray-500 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <RefreshCw size={14} />
              Click for public version
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-1">
              {mode === "signup" ? "Create an account" : "Welcome back!"}
            </h2>
            <p className="text-[15px] text-gray-500 mb-6">
              {mode === "signup"
                ? "Join JobExCV and supercharge your career."
                : "Sign in to JobExCV and supercharge your career."}
            </p>

            {mode === "signin" ? (
              <form onSubmit={handleSignIn} className="w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-full text-[15px] outline-none mb-3 focus:border-gray-400 transition-colors"
                />
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-full text-[15px] outline-none focus:border-gray-400 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full bg-[#111] text-white font-semibold text-[15px] hover:bg-[#333] transition-colors disabled:opacity-50"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </form>
            ) : (
              <button
                onClick={handleSignUp}
                disabled={loading}
                className="w-full py-3 rounded-full border border-gray-200 text-[15px] font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Sign up with Email
              </button>
            )}

            <p className="text-[12px] text-gray-400 mt-3 mb-4 text-center leading-relaxed">
              By continuing, you agree to JobExCV's{" "}
              <a href="#" className="underline">Terms of Service</a> and acknowledge you've read our{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>

            <div className="flex items-center w-full mb-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="px-4 text-[13px] text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button
              onClick={handleGoogleAuth}
              disabled={loading}
              className="w-full py-3 rounded-full border border-gray-200 text-[15px] font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <GoogleIcon />
              {mode === "signup" ? "Sign up with Google" : "Sign in with Google"}
            </button>

            <p className="text-[15px] text-gray-700 mt-4 mb-4">
              {mode === "signup" ? "Already have an account? " : "New to JobExCV? "}
              <button
                onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
                className="font-bold text-[#0f0f0f] hover:underline"
              >
                {mode === "signup" ? "Sign in" : "Sign up"}
              </button>
            </p>

            <button
              onClick={() => setIsUniversityMode(true)}
              className="w-full py-3 border border-gray-200 rounded-full bg-white cursor-pointer text-[13px] text-gray-500 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <RefreshCw size={14} />
              Click for university/organization version
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
