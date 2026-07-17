"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import Link from "next/link"

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Printer className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">KolaYaz</span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex lg:gap-8">
            <Link href="/#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.header.features}
            </Link>
            <Link href="/#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.header.howToUse}
            </Link>
            <Link href="/#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.header.pricing}
            </Link>
            <Link href="/support" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.header.support}
            </Link>
            <Link href="/policy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.header.policy}
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t.header.privacy}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button size="sm" onClick={() =>{
                window.open('https://merchant.kolayaz.com/', '_blank');
            }}>{t.header.getStarted}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
