import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface MultiStepSignupProps {
  onComplete: () => void;
}

const profileOptions = [
  { value: "student", emoji: "🎓", label: "Student" },
  { value: "job_seeker", emoji: "👔", label: "Job Seeker" },
  { value: "university", emoji: "🏢", label: "University / Institution" },
  { value: "recruiter", emoji: "💼", label: "Recruiter" },
];

const referralOptions = [
  "Google Search",
  "Social Media",
  "Friend / Referral",
  "University",
  "Other",
];

function getPasswordStrength(pw: string): { label: string; pct: number; color: string } {
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 1) return { label: "Weak", pct: 20, color: "bg-red-500" };
  if (score <= 2) return { label: "Fair", pct: 40, color: "bg-orange-400" };
  if (score <= 3) return { label: "Good", pct: 60, color: "bg-yellow-400" };
  if (score <= 4) return { label: "Strong", pct: 80, color: "bg-green-400" };
  return { label: "Very Strong", pct: 100, color: "bg-green-600" };
}

const inputClass =
  "w-full px-4 py-3 border border-gray-200 rounded-xl text-[15px] outline-none focus:border-black transition-colors";

export default function MultiStepSignup({ onComplete }: MultiStepSignupProps) {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [profileType, setProfileType] = useState("");
  const [referral, setReferral] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(1);
  const { toast } = useToast();

  const go = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const canNext1 = firstName.trim() && lastName.trim() && email.trim();
  const canNext2 = password.length >= 8 && password === confirmPassword;
  const canNext3 = !!profileType;
  const canSubmit = termsAccepted && privacyAccepted;

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: `${firstName} ${lastName}`,
            first_name: firstName,
            last_name: lastName,
            profile_type: profileType,
            referral_source: referral || undefined,
          },
          emailRedirectTo: window.location.origin,
        },
      });
      if (error) throw error;
      toast({ title: "Check your email", description: "We sent you a confirmation link to verify your account." });
      onComplete();
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const strength = getPasswordStrength(password);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div className="w-full">
      {/* Progress */}
      <div className="mb-5">
        <p className="text-[13px] text-gray-400 mb-2">Step {step} of 4</p>
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#111] rounded-full transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {step === 1 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#0f0f0f]">Personal Info</h3>
              <div className="flex gap-3">
                <input placeholder="First Name *" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputClass} />
                <input placeholder="Last Name *" value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputClass} />
              </div>
              <input type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
              <button disabled={!canNext1} onClick={() => go(2)} className="w-full py-3 rounded-full bg-[#111] text-white font-semibold text-[15px] hover:bg-[#333] transition-colors disabled:opacity-40 mt-2">
                Next →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <button onClick={() => go(1)} className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-black transition-colors mb-1"><ArrowLeft size={14} /> Back</button>
              <h3 className="text-lg font-semibold text-[#0f0f0f]">Create Password</h3>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Password (min 8 chars) *" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass + " pr-12"} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {password && (
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-300 ${strength.color}`} style={{ width: `${strength.pct}%` }} />
                  </div>
                  <p className="text-[12px] text-gray-400">{strength.label}</p>
                </div>
              )}
              <div className="relative">
                <input type={showConfirm ? "text" : "password"} placeholder="Confirm Password *" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={inputClass + " pr-12"} />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {confirmPassword && password !== confirmPassword && (
                <p className="text-[12px] text-red-500">Passwords do not match</p>
              )}
              <button disabled={!canNext2} onClick={() => go(3)} className="w-full py-3 rounded-full bg-[#111] text-white font-semibold text-[15px] hover:bg-[#333] transition-colors disabled:opacity-40 mt-2">
                Next →
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <button onClick={() => go(2)} className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-black transition-colors mb-1"><ArrowLeft size={14} /> Back</button>
              <h3 className="text-lg font-semibold text-[#0f0f0f]">What describes you best?</h3>
              <div className="grid grid-cols-2 gap-3">
                {profileOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setProfileType(opt.value)}
                    className={`flex flex-col items-center gap-2 p-5 border-2 rounded-2xl text-center transition-all ${
                      profileType === opt.value
                        ? "border-black bg-black/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className="text-[14px] font-medium text-[#0f0f0f]">{opt.label}</span>
                  </button>
                ))}
              </div>
              <button disabled={!canNext3} onClick={() => go(4)} className="w-full py-3 rounded-full bg-[#111] text-white font-semibold text-[15px] hover:bg-[#333] transition-colors disabled:opacity-40 mt-2">
                Next →
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <button onClick={() => go(3)} className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-black transition-colors mb-1"><ArrowLeft size={14} /> Back</button>
              <h3 className="text-lg font-semibold text-[#0f0f0f]">Almost done!</h3>
              <div>
                <label className="text-[13px] text-gray-500 mb-1 block">How did you hear about us? (optional)</label>
                <select value={referral} onChange={(e) => setReferral(e.target.value)} className={inputClass + " appearance-none cursor-pointer"}>
                  <option value="">Select an option</option>
                  {referralOptions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${termsAccepted ? "bg-black border-black" : "border-gray-300"}`} onClick={() => setTermsAccepted(!termsAccepted)}>
                  {termsAccepted && <Check size={14} className="text-white" />}
                </div>
                <span className="text-[13px] text-gray-600">I agree to the <a href="#" className="underline text-black">Terms & Conditions</a></span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${privacyAccepted ? "bg-black border-black" : "border-gray-300"}`} onClick={() => setPrivacyAccepted(!privacyAccepted)}>
                  {privacyAccepted && <Check size={14} className="text-white" />}
                </div>
                <span className="text-[13px] text-gray-600">I acknowledge the <a href="#" className="underline text-black">Privacy Policy</a></span>
              </label>
              <button disabled={!canSubmit || loading} onClick={handleSubmit} className="w-full py-3 rounded-full bg-[#111] text-white font-semibold text-[15px] hover:bg-[#333] transition-colors disabled:opacity-40">
                {loading ? "Creating account..." : "Create My Account"}
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
