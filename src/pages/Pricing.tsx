import React, { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Check, ChevronRight, CreditCard, Crown, ExternalLink, Heart, Shield, ShoppingCart, Stars, Zap, Sparkles } from "lucide-react";
import { SinglePricingCard, type Testimonial } from "@/components/ui/single-pricing-card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/contexts/I18nContext";

const MONTHLY_PRICE = 35;
const QUARTERLY_DISCOUNT = 0.15;
const QUARTERLY_TOTAL = parseFloat((MONTHLY_PRICE * 3 * (1 - QUARTERLY_DISCOUNT)).toFixed(2)); // 89.25
const QUARTERLY_MONTHLY_EQ = parseFloat((QUARTERLY_TOTAL / 3).toFixed(2)); // 29.75

export default function PricingPage() {
  const { t } = useI18n();

  const [isQuarterly, setIsQuarterly] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const billing = params.get("billing");
      if (billing === "3months") return true;
      if (billing === "monthly") return false;
      return localStorage.getItem("pricing_billing_period") === "3months";
    }
    return false;
  });

  useEffect(() => {
    const value = isQuarterly ? "3months" : "monthly";
    localStorage.setItem("pricing_billing_period", value);
    const url = new URL(window.location.href);
    url.searchParams.set("billing", value);
    window.history.replaceState({}, "", url.toString());
  }, [isQuarterly]);

  const features = [
    t("Unlimited AI resume tailorings"),
    t("Unlimited cover letters"),
    t("Advanced job application tracker"),
    t("Full job match analysis"),
    t("5 active job search loops"),
    t("AI interview preparation"),
    t("Dynamic outreach emails"),
    t("AI question answering"),
    t("LinkedIn Auto Apply extension"),
    t("Email finder"),
    t("Priority support"),
    t("Advanced analytics"),
  ].map((text) => ({ text }));

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah",
      role: t("Product Manager"),
      company: "Google",
      content: t("Tried chatgpt for weeks and got zero interviews... JobExCV got me 3 callbacks in the first month. Actually sounds like me and takes 2 mins. Worth every penny!"),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 2,
      name: "Michael",
      role: t("Business Analyst"),
      company: "PwC",
      content: t("Been using JobExCV for the past month and wow... applied to 40 jobs already and got 4 interviews! Usually I'd spend forever tweaking each resume but this does it so much better."),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: t("Software Engineer"),
      company: "Meta",
      content: t("The AI-powered resume tailoring is incredible. Each application feels personal and targeted. Got my dream job within 3 weeks!"),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 4,
      name: "James Wilson",
      role: t("Data Analyst"),
      company: "Deloitte",
      content: t("As a career changer, JobExCV helped me highlight transferable skills I didn't even know I had. Landed 5 interviews in my first week."),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 5,
      name: "Priya Sharma",
      role: t("Marketing Manager"),
      company: "HubSpot",
      content: t("The auto-apply feature saved me 20+ hours a week. I went from applying to 5 jobs a day to 50, with better results."),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 6,
      name: "Rachel Thompson",
      role: t("Consultant"),
      company: "McKinsey",
      content: t("From resume building to interview prep, JobExCV is the complete package. Couldn't have landed my role without it."),
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    },
  ];

  const currentPrice = isQuarterly
    ? `$${QUARTERLY_TOTAL.toFixed(2)}`
    : `$${MONTHLY_PRICE}`;
  const currentPeriod = isQuarterly ? "/ 3 months" : "/mo";
  const originalPrice = isQuarterly ? `$${(MONTHLY_PRICE * 3).toFixed(0)}` : "$70";
  const originalPeriod = isQuarterly ? "/ 3 months" : "/mo";
  const discount = isQuarterly ? "15% OFF" : "50% OFF";
  const checkoutUrl = isQuarterly
    ? "https://app.jobexcv.ai?billing=3months"
    : "https://app.jobexcv.ai";

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <section className="pt-[120px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Crown className="h-4 w-4" />
              {t("Simple Pricing")}
            </div>
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-foreground mb-4 tracking-[-0.02em]">
              {t("One plan, endless possibilities")}
            </h1>
            <p className="text-[18px] text-muted-foreground max-w-[600px] mx-auto">
              {t("Everything you need to land your dream job with AI-powered tools")}
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setIsQuarterly(false)}
                className={`text-[15px] font-semibold transition-colors cursor-pointer ${
                  !isQuarterly ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {t("Monthly")}
              </button>
              <Switch
                checked={isQuarterly}
                onCheckedChange={setIsQuarterly}
                className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-input"
                aria-label="Toggle billing period"
              />
              <button
                onClick={() => setIsQuarterly(true)}
                className={`text-[15px] font-semibold transition-colors cursor-pointer ${
                  isQuarterly ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {t("3 Months")}
              </button>
              <Badge className="bg-green-500 text-white hover:bg-green-600 border-transparent text-xs px-2.5 py-0.5">
                {t("Save 15%")}
              </Badge>
            </div>
          </div>

          <SinglePricingCard
            badge={{ icon: Sparkles, text: t("Most Popular") }}
            title={t("Pro Plan")}
            subtitle={t("For serious job seekers who want to maximise their chances.")}
            price={{
              current: currentPrice,
              period: currentPeriod,
              original: originalPrice,
              originalPeriod: originalPeriod,
              discount,
            }}
            benefits={[
              { text: isQuarterly ? t("Billed every 3 months") : t("Cancel anytime, no long-term contracts"), icon: Shield },
              { text: isQuarterly ? `${t("Equivalent to")} $${QUARTERLY_MONTHLY_EQ.toFixed(2)}/mo` : t("Instant access to all AI features"), icon: Zap },
              { text: t("Loved by 10,000+ job seekers"), icon: Heart },
            ]}
            features={features}
            featuresIcon={Check}
            featuresTitle={t("Everything Included")}
            featuresBadge={{ icon: Stars, text: t("Full Access") }}
            primaryButton={{
              text: t("Get Started Now"),
              icon: ShoppingCart,
              href: checkoutUrl,
              chevronIcon: ChevronRight,
            }}
            testimonials={testimonials}
            maxWidth="max-w-3xl"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] bg-muted/30">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-[36px] font-extrabold text-foreground mb-12">{t("Pricing FAQs")}</h2>
          <div className="space-y-6 text-left">
            {[
              { q: t("Can I cancel anytime?"), a: t("Yes! There are no long-term contracts. Cancel anytime from your account settings.") },
              { q: t("Is there a free trial for Pro?"), a: t("We offer a free tier with limited usage. You can upgrade to Pro at any time to unlock unlimited access.") },
              { q: t("Do you offer student discounts?"), a: t("Yes! We offer special discounts for students. Visit our Discounts page or contact us for details.") },
              { q: t("What payment methods do you accept?"), a: t("We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.") },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-[16px] p-6 border border-border">
                <h4 className="text-[17px] font-bold text-foreground mb-2">{item.q}</h4>
                <p className="text-[15px] text-muted-foreground leading-[1.6]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
