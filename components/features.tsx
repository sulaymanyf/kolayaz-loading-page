"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Shield, Zap, Wallet, Clock, Network } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: MapPin,
      title: t.features.location.title,
      description: t.features.location.description,
    },
    {
      icon: Shield,
      title: t.features.security.title,
      description: t.features.security.description,
    },
    {
      icon: Zap,
      title: t.features.instant.title,
      description: t.features.instant.description,
    },
    {
      icon: Wallet,
      title: t.features.wallet.title,
      description: t.features.wallet.description,
    },
    {
      icon: Clock,
      title: t.features.support.title,
      description: t.features.support.description,
    },
    {
      icon: Network,
      title: t.features.iot.title,
      description: t.features.iot.description,
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {t.features.title} <span className="text-primary">PrintHub</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t.features.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
