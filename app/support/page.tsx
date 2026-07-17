import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, Mail, MessageCircle, Printer, ShieldCheck, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Support | KolaYaz",
  description: "Get help with KolaYaz printing, merchant onboarding, device setup, billing, and account support.",
}

const contactOptions = [
  {
    icon: MessageCircle,
    title: "General support",
    description: "Questions about printing, accounts, payments, or using KolaYaz.",
    value: "support@kolayaz.com",
  },
  {
    icon: Wrench,
    title: "Merchant and device help",
    description: "Printer setup, device status, order flow, and technical troubleshooting.",
    value: "merchant@kolayaz.com",
  },
  {
    icon: ShieldCheck,
    title: "Privacy and security",
    description: "Document handling, account safety, data requests, and security concerns.",
    value: "privacy@kolayaz.com",
  },
]

const faqs = [
  {
    question: "How do I get help with a failed print order?",
    answer:
      "Send the order number, print location, file type, and a short description of the issue. Our team will check the order status and guide the next step.",
  },
  {
    question: "How can I register my printer as a merchant?",
    answer:
      "Use the merchant portal to submit your printer details. After review, we will help you connect the device and start accepting print orders.",
  },
  {
    question: "What should I do if a printer appears offline?",
    answer:
      "Check the device power, network connection, paper, and consumables first. If it still shows offline, contact merchant support with the device name.",
  },
  {
    question: "Are uploaded documents stored permanently?",
    answer:
      "No. KolaYaz is designed around secure document handling and automatic cleanup after the print workflow is completed.",
  },
]

const supportSteps = [
  "Share your account email or merchant name",
  "Include the order ID, printer name, or device ID when available",
  "Attach screenshots only when they help explain the issue",
]

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
              KolaYaz Support
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Help for printing, merchants, and devices
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Tell us what happened and include the relevant order or device details. We will help you resolve the issue as quickly as possible.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 text-base">
                <a href="mailto:support@kolayaz.com">
                  <Mail className="h-5 w-5" />
                  Email support
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent text-base">
                <a href="https://merchant.kolayaz.com/" target="_blank" rel="noreferrer">
                  <Printer className="h-5 w-5" />
                  Merchant portal
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {contactOptions.map((option) => {
              const Icon = option.icon

              return (
                <Card key={option.title} className="border-border/50 bg-card/50 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">{option.title}</h2>
                  <p className="mt-3 min-h-20 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
                  <a className="mt-5 block text-sm font-medium text-primary" href={`mailto:${option.value}`}>
                    {option.value}
                  </a>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Badge className="mb-5 border-accent/20 bg-accent/10 text-accent hover:bg-accent/10">
                Faster replies
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What to include</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Clear details help us find the right order, printer, or account without extra back and forth.
              </p>
              <div className="mt-8 space-y-4">
                {supportSteps.map((step) => (
                  <div key={step} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-lg border border-border/50 bg-card/40 p-4">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Typical response time is within one business day. Urgent merchant device issues are prioritized.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} className="border-border/50 bg-card/50 p-6">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
