import React, { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, MessageCircleIcon, TwitterIcon } from "lucide-react";
import contactHero from "@/assets/contact-hero.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <section className="pt-[120px] pb-[100px]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center mb-10">
            <img alt="Contact Us" className="max-w-md w-full h-auto" src="/lovable-uploads/b362d2c7-199c-4841-9bc3-f2ed26a2f886.jpg" />
          </div>
          <ContactCard
            title="Get in touch"
            description="Have a question, feedback, or want to partner with us? We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours."
            contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "hello@jobexcv.ai"
            },
            {
              icon: MessageCircleIcon,
              label: "Discord",
              value: "discord.gg/FXkNtWPG3B"
            },
            {
              icon: TwitterIcon,
              label: "Twitter",
              value: "@jobexcvai",
              className: "col-span-2"
            }]
            }>

            {submitted ?
            <div className="text-center py-12 w-full">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div> :

            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label>First Name</Label>
                    <Input type="text" required placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Last Name</Label>
                    <Input type="text" required placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Email</Label>
                  <Input type="email" required placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Subject</Label>
                  <Input type="text" placeholder="General inquiry" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Message</Label>
                  <Textarea required rows={5} placeholder="Tell us how we can help..." />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            }
          </ContactCard>
        </div>
      </section>
      <Footer />
    </div>);

}