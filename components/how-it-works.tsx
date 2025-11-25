"use client"

import { Card } from "@/components/ui/card"
import { Search, Upload, CheckCircle, DollarSign } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function HowItWorks() {
  const { t } = useTranslation()

  const userSteps = [
    {
      icon: Search,
      title: t.howItWorks.userSteps.step1Title,
      description: t.howItWorks.userSteps.step1Desc,
    },
    {
      icon: Upload,
      title: t.howItWorks.userSteps.step2Title,
      description: t.howItWorks.userSteps.step2Desc,
    },
    {
      icon: CheckCircle,
      title: t.howItWorks.userSteps.step3Title,
      description: t.howItWorks.userSteps.step3Desc,
    },
  ]

  const ownerSteps = [
    {
      icon: Upload,
      title: t.howItWorks.ownerSteps.step1Title,
      description: t.howItWorks.ownerSteps.step1Desc,
    },
    {
      icon: CheckCircle,
      title: t.howItWorks.ownerSteps.step2Title,
      description: t.howItWorks.ownerSteps.step2Desc,
    },
    {
      icon: DollarSign,
      title: t.howItWorks.ownerSteps.step3Title,
      description: t.howItWorks.ownerSteps.step3Desc,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">{t.howItWorks.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t.howItWorks.subtitle}</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* 用户端 */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm border border-primary/20">
              <span className="text-primary font-medium">{t.howItWorks.userBadge}</span>
            </div>

            <div className="space-y-4">
              {userSteps.map((step, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                      {index + 1}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <step.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* 设备主端 */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm border border-accent/20">
              <span className="text-accent font-medium">{t.howItWorks.ownerBadge}</span>
            </div>

            <div className="space-y-4">
              {ownerSteps.map((step, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold">
                      {index + 1}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <step.icon className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
