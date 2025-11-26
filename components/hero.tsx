"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Zap } from "lucide-react"
import { NetworkMap } from "@/components/network-map"
import { useTranslation } from "@/lib/i18n"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32">
      {/* 背景网格 */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-primary">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.hero.title}
              <br />
              <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>

            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.hero.description}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-base" onClick={() => {
                console.log('Navigating to kolayaz.com')
                window.open('https://kolayaz.com', '_blank');
              }}>
                <MapPin className="h-5 w-5" />
                {t.hero.findPrinter}
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" onClick={() => {
                window.open('https://merchant.kolayaz.com/register', '_blank');
                window.location.href = ''
              }}>
                {t.hero.registerPrinter}
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">{t.hero.stat1Value}</div>
                <div className="text-sm text-muted-foreground">{t.hero.stat1Label}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-accent">{t.hero.stat2Value}</div>
                <div className="text-sm text-muted-foreground">{t.hero.stat2Label}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">{t.hero.stat3Value}</div>
                <div className="text-sm text-muted-foreground">{t.hero.stat3Label}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <NetworkMap />
          </div>
        </div>
      </div>
    </section>
  )
}
