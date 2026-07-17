import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Database, EyeOff, FileClock, LockKeyhole, Mail, UserRound } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy | KolaYaz",
  description: "KolaYaz privacy page explaining what data is collected, how it is used, and how users can contact us.",
}

const privacySections = [
  {
    icon: UserRound,
    title: "Information we collect",
    items: [
      "Account information such as name, email address, phone number, role, and merchant profile details.",
      "Order information such as print settings, selected printer, pickup location, timestamps, payment status, and support history.",
      "Device and usage information such as browser type, IP address, app events, device status, logs, and diagnostic data.",
    ],
  },
  {
    icon: Database,
    title: "How we use information",
    items: [
      "To create accounts, process print orders, route jobs to printers, manage merchant devices, and provide customer support.",
      "To monitor reliability, prevent fraud, improve product performance, and maintain platform security.",
      "To send service messages, receipts, policy updates, and operational notices related to KolaYaz.",
    ],
  },
  {
    icon: EyeOff,
    title: "Document handling",
    items: [
      "Uploaded documents are used to complete the requested print workflow.",
      "KolaYaz is designed to limit document retention and clean up files after the print process is complete.",
      "Users should avoid uploading documents they are not authorized to print or share.",
    ],
  },
  {
    icon: LockKeyhole,
    title: "Security and sharing",
    items: [
      "We use technical and organizational measures intended to protect accounts, orders, documents, and merchant systems.",
      "Information may be shared with payment processors, infrastructure providers, support tools, merchants involved in an order, or authorities when legally required.",
      "No internet service can guarantee absolute security, but we work to reduce risk and respond to issues promptly.",
    ],
  },
]

const rights = [
  "Request access to information associated with your account",
  "Ask us to correct inaccurate account or merchant details",
  "Request deletion where legally and operationally possible",
  "Contact us about privacy, security, or document handling questions",
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
              Privacy
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              How KolaYaz handles information
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              This page explains what information KolaYaz may collect, why we use it, how documents are handled, and how to contact us about privacy.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: July 17, 2026</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {privacySections.map((section) => {
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
                        <FileClock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <Card className="border-border/50 bg-card/50 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">Your choices</h2>
              <div className="mt-6 space-y-4">
                {rights.map((right) => (
                  <div key={right} className="flex gap-3">
                    <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{right}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                For privacy questions or data requests, contact the KolaYaz team.
              </p>
              <a className="mt-5 block text-sm font-medium text-primary" href="mailto:privacy@kolayaz.com">
                privacy@kolayaz.com
              </a>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
