import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "For Universities", href: "/academia", internal: true },
  {
    name: "Features",
    href: "#",
    dropdown: [
      { name: "Auto Apply", href: "#" },
      { name: "One Click Apply", href: "#" },
      { name: "Job Application Tracker", href: "#" },
      { name: "Dynamic Emails", href: "#" },
      { name: "CV Improvements", href: "#" },
      { name: "Exclude Companies", href: "#" },
      { name: "Job Posting Aggregator", href: "#" },
      { name: "Job Matching", href: "#" },
      { name: "Job Filtering", href: "#" },
      { name: "Email Finder", href: "#" },
      { name: "LinkedIn Apply Extension", href: "#" },
      { name: "AI Question Answering", href: "#" },
      { name: "AI CV Checker", href: "#" },
      { name: "AI CV Builder", href: "#" },
      { name: "AI Cover Letter Generator", href: "#" },
      { name: "AI Mock Interview", href: "#" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    isResources: true,
    dropdown: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Discounts", href: "#" },
    ],
    bottomItem: { name: "FirstResume Ambassador Program (Coming soon)", href: "#" },
  },
  { name: "Pricing", href: "/pricing", internal: true },
  {
    name: "Join our communities",
    href: "#",
    isSocial: true,
    dropdown: [
      { name: "Twitter", href: "https://x.com/firstresumeai", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/67174bb23e82a55c540728a0_twitter-2.avif" },
      { name: "Instagram", href: "https://www.instagram.com/firstresume_ai/", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/67174bc389304f4be072fe4e_instagram-3.avif" },
      { name: "Discord", href: "https://discord.gg/FXkNtWPG3B", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3cede011-02d0-436d-8d5d-66ecb52fb49b-firstresume-ai/assets/images/67174bb2c0a7cbe6e618638e_discord-4.avif" },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center items-center py-2.5 px-4 h-[74px]`}>
      <div
        className={`flex items-center justify-between w-full max-w-[1400px] h-[64px] px-10 transition-all duration-300 rounded-[1000px] ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_0_rgba(0,0,0,0.1)]"
            : "bg-white/60 backdrop-blur-sm shadow-[0_2px_20px_0_rgba(0,0,0,0.1)]"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="https://cdn.prod.website-files.com/67065b18171e78a558433e90/68b9090815615209acfcecb0_Firstresume%20Logo%20with%20name_border.png"
            alt="FirstResume logo"
            className="h-[43px] w-auto object-contain rounded-xl"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {item.dropdown ? (
                <div className="flex items-center px-2.5 py-1.5 cursor-pointer rounded-md hover:bg-black/5 transition-colors">
                  <span className="text-[14px] font-medium text-[#050505] mr-1">{item.name}</span>
                  <ChevronDown className="w-4 h-4 text-[#050505] transition-transform duration-200 group-hover:rotate-180" />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-2 ${
                      item.isSocial ? 'min-w-[180px]' : item.isResources ? 'min-w-[320px]' : (item.dropdown?.length ?? 0) > 6 ? 'min-w-[480px]' : 'min-w-[240px]'
                    }`}>
                      {item.isSocial ? (
                        <div className="flex justify-around items-center p-2">
                          {item.dropdown.map((sub, sIdx) => (
                            <a key={sIdx} href={sub.href} className="p-2 hover:scale-110 transition-transform">
                              <img src={(sub as any).icon} alt={sub.name} className="w-8 h-8 rounded-lg" />
                            </a>
                          ))}
                        </div>
                      ) : item.isResources ? (
                        <div>
                          <div className="grid grid-cols-2 gap-0">
                            {item.dropdown.map((sub, sIdx) => (
                              <a key={sIdx} href={sub.href} className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-black rounded-xl transition-colors whitespace-nowrap">
                                {sub.name}
                              </a>
                            ))}
                          </div>
                          {item.bottomItem && (
                            <>
                              <div className="border-t border-gray-100 mx-2" />
                              <a href={item.bottomItem.href} className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-black rounded-xl transition-colors whitespace-nowrap">
                                {item.bottomItem.name}
                              </a>
                            </>
                          )}
                        </div>
                      ) : (
                        <div className={(item.dropdown?.length ?? 0) > 6 ? 'grid grid-cols-2 gap-0' : ''}>
                          {item.dropdown.map((sub, sIdx) => (
                            <a key={sIdx} href={sub.href} className="block px-4 py-3 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-black rounded-xl transition-colors whitespace-nowrap">
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <a href={item.href} className="px-3 py-1.5 text-[14px] font-medium transition-colors rounded-md hover:bg-black/5 text-[#333333]">
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="https://app.firstresume.ai" className="bg-[#111111] text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 lg:hidden overflow-hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="font-semibold text-gray-900 py-2 border-b border-gray-50">{item.name}</div>
                {item.dropdown && !item.isSocial && (
                  <div className="pl-4 flex flex-col space-y-2 mt-2">
                    {item.dropdown.map((sub, sIdx) => (
                      <a key={sIdx} href={sub.href} className="text-[14px] text-gray-600 py-1">{sub.name}</a>
                    ))}
                    {item.bottomItem && (
                      <a href={item.bottomItem.href} className="text-[14px] text-gray-600 py-1">{item.bottomItem.name}</a>
                    )}
                  </div>
                )}
                {item.isSocial && item.dropdown && (
                  <div className="flex space-x-4 mt-2 py-2">
                    {item.dropdown.map((sub, sIdx) => (
                      <a key={sIdx} href={sub.href}>
                        <img src={(sub as any).icon} alt={sub.name} className="w-8 h-8 rounded-lg" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="https://app.firstresume.ai" className="bg-[#111111] text-white w-full py-4 rounded-xl text-center font-bold text-[16px]">
              Get Started
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
