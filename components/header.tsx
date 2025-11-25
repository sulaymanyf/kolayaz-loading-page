"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Printer className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">PrintHub</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.header.features}
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.header.howToUse}
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.header.pricing}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              {t.header.login}
            </Button>
            <Button size="sm">{t.header.getStarted}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
