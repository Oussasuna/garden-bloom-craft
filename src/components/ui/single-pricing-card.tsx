"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { LucideIcon } from "lucide-react"
import { Star } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company?: string
  content: string
  rating: number
  avatar: string
}

export interface Feature {
  text: string
}

export interface Benefit {
  text: string
  icon: LucideIcon
}

export interface SinglePricingCardProps {
  badge?: {
    icon: LucideIcon
    text: string
  }
  title: string
  subtitle: string

  price: {
    current: string
    period?: string
    original?: string
    originalPeriod?: string
    discount?: string
    discountBadgeClassName?: string
  }

  benefits: Benefit[]

  features: Feature[]
  featuresIcon: LucideIcon
  featuresTitle?: string
  featuresBadge?: {
    icon: LucideIcon
    text: string
  }

  primaryButton: {
    text: string
    icon: LucideIcon
    href?: string
    onClick?: () => void
    chevronIcon?: LucideIcon
  }
  secondaryButton?: {
    text: string
    icon: LucideIcon
    href?: string
    onClick?: () => void
  }

  testimonials: Testimonial[]
  testimonialRotationSpeed?: number

  animationEnabled?: boolean

  className?: string
  cardClassName?: string
  maxWidth?: string
}

export function SinglePricingCard({
  badge,
  title,
  subtitle,
  price,
  benefits,
  features,
  featuresIcon,
  featuresTitle = "Included Features",
  featuresBadge,
  primaryButton,
  secondaryButton,
  testimonials,
  testimonialRotationSpeed = 5000,
  animationEnabled = true,
  className,
  cardClassName,
  maxWidth = "max-w-2xl",
}: SinglePricingCardProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    if (testimonials.length <= 1) return
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, testimonialRotationSpeed)
    return () => clearInterval(interval)
  }, [testimonials.length, testimonialRotationSpeed])

  return (
    <div ref={sectionRef} className={`w-full flex justify-center ${className || ""}`}>
      <div className={`w-full ${maxWidth}`}>
        {animationEnabled ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SinglePricingCardContent
              badge={badge}
              title={title}
              subtitle={subtitle}
              price={price}
              benefits={benefits}
              features={features}
              featuresIcon={featuresIcon}
              featuresTitle={featuresTitle}
              featuresBadge={featuresBadge}
              primaryButton={primaryButton}
              secondaryButton={secondaryButton}
              testimonials={testimonials}
              currentTestimonialIndex={currentTestimonialIndex}
              isInView={isInView}
              animationEnabled={animationEnabled}
              cardClassName={cardClassName}
            />
          </motion.div>
        ) : (
          <SinglePricingCardContent
            badge={badge}
            title={title}
            subtitle={subtitle}
            price={price}
            benefits={benefits}
            features={features}
            featuresIcon={featuresIcon}
            featuresTitle={featuresTitle}
            featuresBadge={featuresBadge}
            primaryButton={primaryButton}
            secondaryButton={secondaryButton}
            testimonials={testimonials}
            currentTestimonialIndex={currentTestimonialIndex}
            isInView={isInView}
            animationEnabled={animationEnabled}
            cardClassName={cardClassName}
          />
        )}
      </div>
    </div>
  )
}

interface SinglePricingCardContentProps
  extends Omit<SinglePricingCardProps, "testimonialRotationSpeed" | "className" | "maxWidth"> {
  currentTestimonialIndex: number
  isInView: boolean
  cardClassName?: string
}

function SinglePricingCardContent({
  badge,
  title,
  subtitle,
  price,
  benefits,
  features,
  featuresIcon,
  featuresTitle,
  featuresBadge,
  primaryButton,
  secondaryButton,
  testimonials,
  currentTestimonialIndex,
  isInView,
  animationEnabled,
  cardClassName,
}: SinglePricingCardContentProps) {
  const BadgeIcon = badge?.icon
  const FeaturesBadgeIcon = featuresBadge?.icon
  const FeaturesIcon = featuresIcon
  const PrimaryButtonIcon = primaryButton.icon
  const ChevronIcon = primaryButton.chevronIcon
  const SecondaryButtonIcon = secondaryButton?.icon

  return (
    <Card className={`relative overflow-hidden border-border/50 shadow-lg ${cardClassName || ""}`}>
      {animationEnabled && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative grid grid-cols-1 md:grid-cols-2">
        {/* Left column - Pricing details */}
        <div className="p-8 md:p-10 flex flex-col justify-between">
          {badge && (
            <div className="mb-6">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-sm font-medium">
                {BadgeIcon && <BadgeIcon className="h-4 w-4" />}
                {badge.text}
              </Badge>
            </div>
          )}

          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h3>
          <p className="mt-2 text-muted-foreground text-base">{subtitle}</p>

          <div className="mt-6 space-y-2">
            <div className="flex items-baseline gap-1 flex-nowrap whitespace-nowrap">
              <span className="text-5xl font-extrabold tracking-tight text-foreground">{price.current}</span>
              {price.period && (
                <span className="text-xl text-muted-foreground font-medium">{price.period}</span>
              )}
            </div>
            {(price.original || price.discount) && (
              <div className="flex items-center gap-3">
                {price.original && (
                  <span className="text-base text-muted-foreground line-through opacity-60 whitespace-nowrap">
                    {price.original}{price.originalPeriod ? ` ${price.originalPeriod}` : ""}
                  </span>
                )}
                {price.discount && (
                  <Badge className={price.discountBadgeClassName || "bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20"}>
                    {price.discount}
                  </Badge>
                )}
              </div>
            )}
          </div>

          <div className="mt-8 space-y-3">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon
              return (
                <div key={index} className="flex items-center gap-3 text-sm text-foreground">
                  <BenefitIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  {benefit.text}
                </div>
              )
            })}
          </div>

          <div className="mt-8 space-y-3">
            <Button size="lg" className="w-full gap-2" asChild={!!primaryButton.href} onClick={primaryButton.onClick}>
              {primaryButton.href ? (
                <Link to={primaryButton.href}>
                  <PrimaryButtonIcon className="h-5 w-5" />
                  {primaryButton.text}
                  {ChevronIcon && <ChevronIcon className="h-4 w-4 ml-1" />}
                </Link>
              ) : (
                <>
                  <PrimaryButtonIcon className="h-5 w-5" />
                  {primaryButton.text}
                  {ChevronIcon && <ChevronIcon className="h-4 w-4 ml-1" />}
                </>
              )}
            </Button>

            {secondaryButton && (
              <Button variant="outline" size="lg" className="w-full gap-2" asChild={!!secondaryButton.href} onClick={secondaryButton.onClick}>
                {secondaryButton.href ? (
                  <Link to={secondaryButton.href}>
                    {secondaryButton.text}
                    {SecondaryButtonIcon && <SecondaryButtonIcon className="h-4 w-4" />}
                  </Link>
                ) : (
                  <>
                    {secondaryButton.text}
                    {SecondaryButtonIcon && <SecondaryButtonIcon className="h-4 w-4" />}
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Right column - Features */}
        <div className="bg-muted/30 p-8 md:p-10 border-t md:border-t-0 md:border-l border-border/50">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-semibold text-foreground">{featuresTitle}</h4>
            {featuresBadge && FeaturesBadgeIcon && (
              <Badge variant="outline" className="gap-1">
                <FeaturesBadgeIcon className="h-3 w-3" />
                {featuresBadge.text}
              </Badge>
            )}
          </div>

          <div className="space-y-3">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <FeaturesIcon className="h-3 w-3 text-primary" />
                </div>
                {feature.text}
              </div>
            ))}
          </div>

          {testimonials.length > 0 && (
            <>
              <Separator className="my-6" />

              <div className="min-h-[180px]">
                <AnimatePresence mode="wait">
                  {testimonials.map(
                    (testimonial, index) =>
                      index === currentTestimonialIndex && (
                        <motion.div
                          key={testimonial.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden">
                              <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {testimonial.role}
                                {testimonial.company && ` at ${testimonial.company}`}
                              </p>
                            </div>
                            <div className="ml-auto flex gap-0.5">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.content}</p>
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>

              {testimonials.length > 1 && (
                <div className="flex justify-center gap-1.5 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentTestimonialIndex ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
                      }`}
                      onClick={() => {}}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  )
}
