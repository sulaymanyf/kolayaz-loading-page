import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AlertCircle, CreditCard, FileText, Printer, RefreshCcw, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Policy | KolaYaz",
  description: "KolaYaz service policy for printing, merchant participation, payments, refunds, and platform use.",
}

const policySections = [
  {
    icon: Printer,
    title: "Printing service",
    items: [
      "Users are responsible for checking file content, print settings, page count, color mode, and pickup location before confirming an order.",
      "Print availability depends on device status, paper, ink or toner, connectivity, and merchant operating conditions.",
      "KolaYaz may cancel or pause orders when a device is offline, unavailable, unsafe, or unable to complete the requested job.",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments and fees",
    items: [
      "Prices, platform fees, payment processing fees, and merchant earnings are shown before or during the order workflow where applicable.",
      "Merchants are responsible for keeping payout information accurate and complying with local tax or reporting obligations.",
      "KolaYaz may update pricing, commission, or subscription terms with reasonable notice through the platform or merchant portal.",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Refunds and disputes",
    items: [
      "Refund reviews require the order ID, printer location, issue description, and supporting details when available.",
      "Refunds may be approved when the print job fails, the device cannot complete the job, or the output materially differs from confirmed settings.",
      "Refunds may be declined for incorrect user-uploaded files, wrong print settings, or orders collected successfully.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Acceptable use",
    items: [
      "Users may not upload unlawful, harmful, abusive, fraudulent, infringing, or unsafe content.",
      "Users and merchants may not attempt to bypass pricing, interfere with devices, scrape systems, or misuse account access.",
      "KolaYaz may restrict accounts, orders, or devices that violate this policy or create risk for users, merchants, or the platform.",
    ],
  },
]

export default function PolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
              Service Policy
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              KolaYaz platform policy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              These terms explain the expected use of KolaYaz printing services, merchant tools, payments, refunds, and platform access.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: July 17, 2026</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {policySections.map((section) => {
              const Icon = section.icon

              return (
                <Card key={section.title} className="border-border/50 bg-card/50 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <div className="mt-5 space-y-4">
                    {section.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="mx-auto max-w-4xl border-border/50 bg-card/50 p-6 sm:p-8">
            <div className="flex gap-4">
              <AlertCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h2 className="text-2xl font-semibold">Important note</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  This page is a practical service policy for the KolaYaz platform. It is not a substitute for legal advice. If your business needs jurisdiction-specific terms, review this policy with a qualified legal professional before launch.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
