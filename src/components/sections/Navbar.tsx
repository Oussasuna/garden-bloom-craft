import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, LogOut, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useI18n, languages } from "@/contexts/I18nContext";
import AuthModal from "@/components/AuthModal";

const navItems = [
{ name: "For Universities", href: "/academia", internal: true },
{
  name: "Features",
  href: "#",
  dropdown: [
  { name: "Auto Apply", href: "/features/auto-apply" },
  { name: "One Click Apply", href: "/features/one-click-apply" },
  { name: "Job Application Tracker", href: "/features/job-application-tracker" },
  { name: "Dynamic Emails", href: "/features/dynamic-emails" },
  { name: "CV Improvements", href: "/features/cv-improvements" },
  { name: "Exclude Companies", href: "/features/exclude-companies" },
  { name: "Job Posting Aggregator", href: "/features/job-posting-aggregator" },
  { name: "Job Matching", href: "/features/job-matching" },
  { name: "Job Filtering", href: "/features/job-filtering" },
  { name: "Email Finder", href: "/features/email-finder" },
  { name: "LinkedIn Apply Extension", href: "/features/linkedin-apply-extension" },
  { name: "AI Question Answering", href: "/features/ai-question-answering" },
  { name: "AI CV Checker", href: "/features/ai-cv-checker" },
  { name: "AI CV Builder", href: "/features/ai-cv-builder" },
  { name: "AI Cover Letter Generator", href: "/features/ai-cover-letter-generator" },
  { name: "AI Mock Interview", href: "/features/ai-mock-interview" }]

},
{
  name: "Resources",
  href: "#",
  isResources: true,
  dropdown: [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" }],

  bottomItem: { name: "JobExCV Ambassador Program (Coming soon)", href: "#" }
},
{ name: "Pricing", href: "/pricing", internal: true },
{
  name: "Join our communities",
  href: "#",
  isSocial: true,
  dropdown: [
  { name: "Twitter", href: "https://x.com/jobexcvai", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/67174bb23e82a55c540728a0_twitter-2.avif" },
  { name: "Instagram", href: "https://www.instagram.com/jobexcv_ai/", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/67174bc389304f4be072fe4e_instagram-3.avif" },
  { name: "Discord", href: "https://discord.gg/FXkNtWPG3B", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/67174bb2c0a7cbe6e618638e_discord-4.avif" }]

}];

const languages = [
  { code: "EN", name: "English" },
  { code: "FR", name: "French" },
  { code: "ES", name: "Spanish" },
  { code: "AR", name: "Arabic" },
  { code: "DE", name: "German" },
  { code: "IT", name: "Italian" },
  { code: "PT", name: "Portuguese" },
  { code: "NL", name: "Dutch" },
  { code: "TR", name: "Turkish" },
  { code: "RU", name: "Russian" },
  { code: "JA", name: "Japanese" },
  { code: "ZH", name: "Mandarin Chinese" },
  { code: "KO", name: "Korean" },
  { code: "HI", name: "Hindi" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center items-center py-2.5 px-4 h-[74px]`}>
      <div
        className={`flex items-center justify-between w-full max-w-[1400px] h-[64px] px-10 transition-all duration-300 ease-in-out rounded-[1000px] ${
        scrolled ?
        "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_0_rgba(0,0,0,0.1)]" :
        "bg-white/60 backdrop-blur-sm shadow-[0_2px_20px_0_rgba(0,0,0,0.1)]"}`
        }>

        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img

            alt="JobExCV logo"
            className="h-[43px] w-auto object-contain rounded-xl" src="/lovable-uploads/f78ef4c0-77ab-4a45-8304-3d8b9b369e18.png" />

        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item, idx) =>
          <div key={idx} className="relative group"
            onMouseEnter={() => setActiveNav(item.name)}
            onMouseLeave={() => setActiveNav(null)}
          >
              {activeNav === item.name && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-gray-400/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-gray-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-gray-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
              {item.dropdown ?
            <div className="flex items-center px-2.5 py-1.5 cursor-pointer rounded-full transition-colors">
                  <span className="text-[14px] font-medium text-[#050505] mr-1">{item.name}</span>
                  <ChevronDown className="w-4 h-4 text-[#050505] transition-transform duration-200 group-hover:rotate-180" />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-2 ${
                item.isSocial ? 'min-w-[180px]' : item.isResources ? 'min-w-[320px]' : (item.dropdown?.length ?? 0) > 6 ? 'min-w-[480px]' : 'min-w-[240px]'}`
                }>
                      {item.isSocial ?
                  <div className="flex justify-around items-center p-2">
                          {item.dropdown.map((sub, sIdx) =>
                    <a key={sIdx} href={sub.href} className="p-2 hover:scale-110 transition-transform">
                              <img src={(sub as any).icon} alt={sub.name} className="w-8 h-8 rounded-lg" />
                            </a>
                    )}
                        </div> :
                  item.isResources ?
                  <div>
                          <div className="grid grid-cols-2 gap-0">
                            {item.dropdown.map((sub, sIdx) =>
                      <Link key={sIdx} to={sub.href} className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-black rounded-xl transition-colors whitespace-nowrap">
                                {sub.name}
                              </Link>
                      )}
                          </div>
                          {item.bottomItem &&
                    <>
                              <div className="border-t border-gray-100 mx-2" />
                              <span className="block px-4 py-3 text-[14px] text-gray-400 rounded-xl whitespace-nowrap cursor-default">
                                {item.bottomItem.name}
                              </span>
                            </>
                    }
                        </div> :

                  <div className={(item.dropdown?.length ?? 0) > 6 ? 'grid grid-cols-2 gap-0' : ''}>
                          {item.dropdown.map((sub, sIdx) =>
                    <Link key={sIdx} to={sub.href} className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-black rounded-xl transition-colors whitespace-nowrap">
                              {sub.name}
                            </Link>
                    )}
                        </div>
                  }
                    </div>
                  </div>
                </div> :

            <Link to={item.href} className="px-3 py-1.5 text-[14px] font-medium transition-colors rounded-full text-[#333333]">
                  {item.name}
                </Link>
            }
            </div>
          )}
        </nav>

        {/* CTA / User Button */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
            >
              <Globe size={18} className="text-foreground" />
              <span className="text-[13px] font-medium text-foreground">{selectedLang}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-2 w-[200px] bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 max-h-[320px] overflow-y-auto"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setSelectedLang(lang.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-gray-50 transition-colors ${
                        selectedLang === lang.code ? "font-bold text-black" : "text-gray-600"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {user ? (
            <>
              <span className="text-[14px] font-medium text-[#333] truncate max-w-[150px]">
                {user.user_metadata?.display_name || user.email}
              </span>
              <button
                onClick={signOut}
                className="flex items-center gap-1.5 text-[14px] font-medium text-[#555] hover:text-black transition-colors"
              >
                <LogOut size={16} />
                Log out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => { setAuthMode("signin"); setAuthOpen(true); }}
                className="border border-gray-300 rounded-full px-5 py-2.5 text-[14px] font-medium hover:bg-gray-50 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => { setAuthMode("signup"); setAuthOpen(true); }}
                className="bg-[#111111] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-90 transition-opacity"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile: Globe + Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 rounded-full border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
            >
              <Globe size={16} className="text-foreground" />
              <span className="text-[12px] font-medium text-foreground">{selectedLang}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-2 w-[180px] bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 max-h-[280px] overflow-y-auto"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setSelectedLang(lang.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-gray-50 transition-colors ${
                        selectedLang === lang.code ? "font-bold text-black" : "text-gray-600"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button className="p-2 text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 lg:hidden overflow-hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item, idx) =>
          <div key={idx} className="flex flex-col">
                <div className="font-semibold text-gray-900 py-2 border-b border-gray-50">{item.name}</div>
                {item.dropdown && !item.isSocial &&
            <div className="pl-4 flex flex-col space-y-2 mt-2">
                    {item.dropdown.map((sub, sIdx) =>
              <Link key={sIdx} to={sub.href} className="text-[14px] text-gray-600 py-1" onClick={() => setMobileMenuOpen(false)}>{sub.name}</Link>
              )}
                    {item.bottomItem &&
              <a href={item.bottomItem.href} className="text-[14px] text-gray-600 py-1">{item.bottomItem.name}</a>
              }
                  </div>
            }
                {item.isSocial && item.dropdown &&
            <div className="flex space-x-4 mt-2 py-2">
                    {item.dropdown.map((sub, sIdx) =>
              <a key={sIdx} href={sub.href}>
                        <img src={(sub as any).icon} alt={sub.name} className="w-8 h-8 rounded-lg" />
                      </a>
              )}
                  </div>
            }
              </div>
          )}
            {user ? (
              <button onClick={() => { signOut(); setMobileMenuOpen(false); }} className="bg-[#111111] text-white w-full py-4 rounded-xl text-center font-bold text-[16px]">
                Log out
              </button>
            ) : (
              <>
                <button onClick={() => { setAuthMode("signin"); setAuthOpen(true); setMobileMenuOpen(false); }} className="w-full py-4 rounded-xl text-center font-bold text-[16px] border border-gray-300">
                  Login
                </button>
                <button onClick={() => { setAuthMode("signup"); setAuthOpen(true); setMobileMenuOpen(false); }} className="bg-[#111111] text-white w-full py-4 rounded-xl text-center font-bold text-[16px]">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      }

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} defaultMode={authMode} />
    </div>);

};

export default Navbar;
