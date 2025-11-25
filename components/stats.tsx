"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Printer, DollarSign } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function Stats() {
  const { t } = useTranslation()

  const stats = [
    {
      icon: Printer,
      value: "5,000+",
      label: t.stats.printers,
      trend: "+28%",
    },
    {
      icon: Users,
      value: "50,000+",
      label: t.stats.users,
      trend: "+142%",
    },
    {
      icon: DollarSign,
      value: "₺2.8M",
      label: t.stats.revenue,
      trend: "+89%",
    },
    {
      icon: TrendingUp,
      value: "98.5%",
      label: t.stats.satisfaction,
      trend: "+5%",
    },
  ]

  return (
    <section className="py-16 sm:py-24 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                  <TrendingUp className="h-3 w-3" />
                  {stat.trend}
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
