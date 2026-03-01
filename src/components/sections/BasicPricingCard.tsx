import { Check, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/contexts/I18nContext";

const basicFeatures = [
  "Up to 1 job search loop per month",
  "Up to 10 applications or emails per month",
  "3 job sites included",
  "Low priority applications",
  "Chrome extension access",
  "Up to 2 AI CV checks",
];

export default function BasicPricingCard() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Card className="relative overflow-hidden border-border/50 shadow-lg h-full">
          <div className="p-8 md:p-10 flex flex-col h-full">
            {/* Header */}
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {t("Basic Plan")}
            </h3>
            <p className="mt-2 text-muted-foreground text-base">
              {t("Perfect to get started and explore JobExCV")}
            </p>

            {/* Price */}
            <div className="mt-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-foreground">
                  $0
                </span>
                <span className="text-xl text-muted-foreground font-medium">
                  {t("Free")}
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button
                size="lg"
                className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
                asChild
              >
                <a href="https://app.jobexcv.ai?plan=basic">
                  {t("Get Started Free")}
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-3 flex-1">
              {basicFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-green-500" />
                  </div>
                  {t(feature)}
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  SK
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Sarah K.</p>
                  <p className="text-xs text-muted-foreground">{t("Recent Graduate")}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("JobExCV helped me land my first job in just 2 weeks! The free plan was more than enough to get started.")}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
