import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Check, ChevronRight, CreditCard, Crown, ExternalLink, Heart, Shield, ShoppingCart, Stars, Zap, Sparkles } from "lucide-react";
import { SinglePricingCard, type Testimonial } from "@/components/ui/single-pricing-card";

export default function PricingPage() {
  const features = [
    "Unlimited AI resume tailorings",
    "Unlimited cover letters",
    "Advanced job application tracker",
    "Full job match analysis",
    "5 active job search loops",
    "AI interview preparation",
    "Dynamic outreach emails",
    "AI question answering",
    "LinkedIn Auto Apply extension",
    "Email finder",
    "Priority support",
    "Advanced analytics",
  ].map((text) => ({ text }));

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah",
      role: "Product Manager",
      company: "Google",
      content:
        "Tried chatgpt for weeks and got zero interviews... JobExCV got me 3 callbacks in the first month. Actually sounds like me and takes 2 mins. Worth every penny!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 2,
      name: "Michael",
      role: "Business Analyst",
      company: "PwC",
      content:
        "Been using JobExCV for the past month and wow... applied to 40 jobs already and got 4 interviews! Usually I'd spend forever tweaking each resume but this does it so much better.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Software Engineer",
      company: "Meta",
      content:
        "The AI-powered resume tailoring is incredible. Each application feels personal and targeted. Got my dream job within 3 weeks!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Data Analyst",
      company: "Deloitte",
      content:
        "As a career changer, JobExCV helped me highlight transferable skills I didn't even know I had. Landed 5 interviews in my first week.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 5,
      name: "Priya Sharma",
      role: "Marketing Manager",
      company: "HubSpot",
      content:
        "The auto-apply feature saved me 20+ hours a week. I went from applying to 5 jobs a day to 50, with better results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 6,
      name: "Rachel Thompson",
      role: "Consultant",
      company: "McKinsey",
      content:
        "From resume building to interview prep, JobExCV is the complete package. Couldn't have landed my role without it.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <section className="pt-[120px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Crown className="h-4 w-4" />
              Simple Pricing
            </div>
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-foreground mb-4 tracking-[-0.02em]">
              One plan, endless possibilities
            </h1>
            <p className="text-[18px] text-muted-foreground max-w-[600px] mx-auto">
              Everything you need to land your dream job with AI-powered tools
            </p>
          </div>

          <SinglePricingCard
            badge={{ icon: Sparkles, text: "Most Popular" }}
            title="Pro Plan"
            subtitle="For serious job seekers who want to maximise their chances."
            price={{
              current: "$35/mo",
              original: "$70/mo",
              discount: "50% OFF",
            }}
            benefits={[
              { text: "Cancel anytime, no long-term contracts", icon: Shield },
              { text: "Instant access to all AI features", icon: Zap },
              { text: "Loved by 10,000+ job seekers", icon: Heart },
            ]}
            features={features}
            featuresIcon={Check}
            featuresTitle="Everything Included"
            featuresBadge={{ icon: Stars, text: "Full Access" }}
            primaryButton={{
              text: "Get Started Now",
              icon: ShoppingCart,
              href: "https://app.jobexcv.ai",
              chevronIcon: ChevronRight,
            }}
            secondaryButton={{
              text: "Try Free Plan",
              icon: ExternalLink,
              href: "https://app.jobexcv.ai",
            }}
            testimonials={testimonials}
            maxWidth="max-w-3xl"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] bg-muted/30">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-[36px] font-extrabold text-foreground mb-12">Pricing FAQs</h2>
          <div className="space-y-6 text-left">
            {[
              { q: "Can I cancel anytime?", a: "Yes! There are no long-term contracts. Cancel anytime from your account settings." },
              { q: "Is there a free trial for Pro?", a: "We offer a free tier with limited usage. You can upgrade to Pro at any time to unlock unlimited access." },
              { q: "Do you offer student discounts?", a: "Yes! We offer special discounts for students. Visit our Discounts page or contact us for details." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for enterprise accounts." },
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
