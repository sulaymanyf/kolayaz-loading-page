"use client"

import { Check } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

function calculateEarnings(monthlyRevenue: number, orderCount: number) {
  let commissionRate = 0.1 // 1%
  if (monthlyRevenue > 5000) {
    commissionRate = 0.4 // 4%
  } else if (monthlyRevenue > 1000) {
    commissionRate = 0.3 // 3%
  } else if (monthlyRevenue > 500) {
    commissionRate = 0.2 // 2%
  }

  const avgOrderAmount = monthlyRevenue / orderCount
  const totalPaymentFees = orderCount * (avgOrderAmount * 0.02 + 0.5)
  const totalPlatformFee = monthlyRevenue * commissionRate
  const merchantEarnings = monthlyRevenue - totalPaymentFees - totalPlatformFee

  return {
    paymentFee: Math.round(totalPaymentFees),
    platformFee: Math.round(totalPlatformFee),
    merchantEarnings: Math.round(merchantEarnings),
    commission: `${(commissionRate * 100).toFixed(0)}%`,
  }
}

const tierExamples = [
  { revenue: 400, orders: 20 },
  { revenue: 800, orders: 40 },
  { revenue: 2000, orders: 100 },
  { revenue: 6000, orders: 200 },
]

export function Pricing() {
  const { t } = useTranslation()

  const tiers = tierExamples.map((example) => ({
    revenue: example.revenue,
    orders: example.orders,
    ...calculateEarnings(example.revenue, example.orders),
  }))

  const commissionRates = [
    { range: t.pricing.commission.tier1.split(":")[0], rate: "10%" },
    { range: t.pricing.commission.tier2.split(":")[0], rate: "20%" },
    { range: t.pricing.commission.tier3.split(":")[0], rate: "30%" },
    { range: t.pricing.commission.tier4.split(":")[0], rate: "40%" },
  ]

  return (
      <section id="pricing" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{t.pricing.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">{t.pricing.subtitle}</p>
          </div>

          {/*<div className="max-w-4xl mx-auto mb-12">*/}
          {/*  <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/40 rounded-2xl p-8 overflow-hidden">*/}
          {/*    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />*/}
          {/*    <div className="relative z-10 text-center">*/}
          {/*      <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">*/}
          {/*        {t.pricing.merchantValue.badge}*/}
          {/*      </div>*/}
          {/*      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-balance">{t.pricing.merchantValue.title}</h3>*/}
          {/*      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">*/}
          {/*        {t.pricing.merchantValue.description}*/}
          {/*      </p>*/}
          {/*      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-8">*/}
          {/*        <div className="text-center">*/}
          {/*          <div className="text-5xl md:text-6xl font-bold text-primary mb-2">89% - 95%</div>*/}
          {/*          <div className="text-sm text-muted-foreground">{t.pricing.merchantValue.profitShare}</div>*/}
          {/*        </div>*/}
          {/*        <div className="hidden md:block w-px h-16 bg-border" />*/}
          {/*        <div className="text-center">*/}
          {/*          <div className="text-3xl md:text-4xl font-bold mb-2">5% - 11%</div>*/}
          {/*          <div className="text-sm text-muted-foreground">{t.pricing.merchantValue.platformFee}</div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{t.pricing.subscription.title}</h3>
                  <p className="text-muted-foreground">{t.pricing.subscription.description}</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary">{t.pricing.subscription.price}</div>
                  <div className="text-muted-foreground mt-1">{t.pricing.subscription.period}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.pricing.commission.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {commissionRates.map((tier, index) => (
                  <div
                      key={index}
                      className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
                  >
                    <div className="text-sm text-muted-foreground mb-2">{tier.range}</div>
                    <div className="text-3xl font-bold text-primary">{tier.rate}</div>
                  </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.pricing.examples.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, index) => {
                const profitPercentage = ((tier.merchantEarnings / tier.revenue) * 100).toFixed(1)

                return (
                    <div
                        key={index}
                        className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105"
                    >
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-primary mb-1">{tier.revenue.toLocaleString()} TL</div>
                        <div className="text-sm text-muted-foreground">{t.pricing.examples.revenue}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {t.pricing.examples.orders.replace("{count}", tier.orders.toString())}
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-muted-foreground">{t.pricing.examples.paymentFee}</span>
                          <span className="font-semibold">-{tier.paymentFee} TL</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                          <span className="text-muted-foreground">{t.pricing.examples.commission}</span>
                          <span className="font-semibold">-{tier.platformFee} TL</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="font-semibold">{t.pricing.examples.netIncome}</span>
                          <span className="text-xl font-bold text-primary">
                        {tier.merchantEarnings.toLocaleString()} TL
                      </span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{t.pricing.examples.merchantProfit}</span>
                          <span className="text-lg font-bold text-primary">{profitPercentage}%</span>
                        </div>
                      </div>
                    </div>
                )
              })}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">{t.pricing.fees.title}</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">{t.pricing.examples.paymentFee}</div>
                    <div className="bg-blue-500 text-white text-lg font-semibold shadow-sm p-2 rounded">{t.pricing.fees.payment}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">{t.pricing.examples.commission}</div>
                    <div className="text-muted-foreground">{t.pricing.fees.commission}</div>

                  </div>
                </div>
                <div className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">{t.pricing.subscription.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.pricing.subscription.price} {t.pricing.subscription.period}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
