"use client"

import { createContext, useContext, type ReactNode, useEffect, useState } from "react"

type Language = "en" | "zh" | "tr"

interface Translations {
  header: {
    features: string
    howToUse: string
    pricing: string
    login: string
    getStarted: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    findPrinter: string
    registerPrinter: string
    stat1Value: string
    stat1Label: string
    stat2Value: string
    stat2Label: string
    stat3Value: string
    stat3Label: string
    nearbyPrinter: string
    realTimeShow: string
    mapLoading: string
    prince: string
    curren: string
    page: string
    format: string
    formats: string
    estimate: string
    time: string
    printNow:string
    starbucks: string
    sevenEleven: string
    libraryPrintCenter: string
    campusPrintShop: string,
    online: string,
    printing: string,
  }
  stats: {
    printers: string
    users: string
    revenue: string
    satisfaction: string
  }
  features: {
    title: string
    subtitle: string
    location: {
      title: string
      description: string
    }
    security: {
      title: string
      description: string
    }
    instant: {
      title: string
      description: string
    }
    wallet: {
      title: string
      description: string
    }
    support: {
      title: string
      description: string
    }
    iot: {
      title: string
      description: string
    }
  }
  howItWorks: {
    title: string
    subtitle: string
    userBadge: string
    ownerBadge: string
    userSteps: {
      step1Title: string
      step1Desc: string
      step2Title: string
      step2Desc: string
      step3Title: string
      step3Desc: string
    }
    ownerSteps: {
      step1Title: string
      step1Desc: string
      step2Title: string
      step2Desc: string
      step3Title: string
      step3Desc: string
    }
  }
  pricing: {
    title: string
    subtitle: string
    merchantValue: {
      badge: string
      title: string
      description: string
      profitShare: string
      platformFee: string
    }
    subscription: {
      title: string
      price: string
      period: string
      description: string
    }
    commission: {
      title: string
      tier1: string
      tier2: string
      tier3: string
      tier4: string
    }
    examples: {
      title: string
      revenue: string
      orders: string
      commission: string
      paymentFee: string
      subscription: string
      netIncome: string
      merchantProfit: string
    }
    fees: {
      title: string
      payment: string
      commission: string
    }
  }
  cta: {
    title: string
    description: string
    primaryButton: string
    secondaryButton: string
    feature1: string
    feature2: string
    feature3: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    header: {
      features: "Features",
      howToUse: "How It Works",
      pricing: "Pricing",
      login: "Sign In",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Smart IOT Connection · Real-time Available",
      title: "Print Anytime",
      titleHighlight: "Anywhere",
      description:
          "Find nearby print locations with smart positioning, no equipment needed. Or connect your idle printer to earn passive income.",
      findPrinter: "Find Nearby Printers",
      registerPrinter: "Register & Earn Money",
      stat1Value: "5,000+",
      stat1Label: "Active Printers",
      stat2Value: "₺0.5/page",
      stat2Label: "Avg. Earnings",
      stat3Value: "24/7",
      stat3Label: "Service",
      nearbyPrinter: "Nearby printing spots",
      realTimeShow: "Real-time display of online devices, intelligently choosing the optimal route",
      mapLoading: "Loading map…",
      prince: "Unit price",
      curren: "₺",
      page: "page",
      format: "Format",
      formats: "PDF, Word, Image",
      estimate: "Estimated",
      time: "3-5 minutes",
      starbucks: "Starbucks Café",
      sevenEleven: "7-Eleven Convenience Store",
      libraryPrintCenter: "Library Printing Center",
      campusPrintShop: "Campus Print Shop",
      printNow: "Print Now",
      online: "Online",
      printing: "Printing"
    },
    stats: {
      printers: "Online Printers",
      users: "Active Users",
      revenue: "Owner Revenue",
      satisfaction: "Satisfaction Rate",
    },
    features: {
      title: "Why Choose",
      subtitle: "Smart tech-driven shared printing platform, making printing simple and efficient",
      location: {
        title: "Smart Location",
        description: "View nearby printers in real-time with accurate navigation, within 5 minutes walk",
      },
      security: {
        title: "Secure & Reliable",
        description: "Enterprise-grade encrypted transmission, automatic file destruction, protecting your privacy",
      },
      instant: {
        title: "Instant Print",
        description: "Upload and print immediately, no waiting, supports multiple file formats",
      },
      wallet: {
        title: "Transparent Earnings",
        description: "Real-time earnings tracking, automatic monthly settlement on the 15th",
      },
      support: {
        title: "24/7 Service",
        description: "Round-the-clock device monitoring, automatic fault alerts, ensuring uninterrupted service",
      },
      iot: {
        title: "IOT Connected",
        description: "Smart device management, remote printer monitoring, consumable reminders",
      },
    },
    howItWorks: {
      title: "How KolaYaz Works",
      subtitle: "Start your smart printing journey in three steps",
      userBadge: "Print Users",
      ownerBadge: "Device Providers",
      userSteps: {
        step1Title: "Find Printers",
        step1Desc: "Open the app and view nearby available print locations",
        step2Title: "Upload Documents",
        step2Desc: "Select files, set print parameters, submit with one click",
        step3Title: "Pick Up",
        step3Desc: "Go to the print location, scan the code to pick up, easy completion",
      },
      ownerSteps: {
        step1Title: "Register Device",
        step1Desc: "Submit printer information and wait for approval",
        step2Title: "Connect Network",
        step2Desc: "Install smart module and connect to IOT platform",
        step3Title: "Start Earning",
        step3Desc: "Accept orders automatically, view earnings in real-time",
      },
    },
    pricing: {
      title: "Simple & Transparent Pricing",
      subtitle: "Clear pricing model with no hidden fees",
      merchantValue: {
        badge: "Merchant First",
        title: "We Give You 89% - 95% of Profits",
        description:
            "Our mission is to serve merchants. We only keep minimal fees to maintain the platform, ensuring you earn the maximum from your printer.",
        profitShare: "Goes to You",
        platformFee: "Platform Fees",
      },
      subscription: {
        title: "Monthly Subscription",
        price: "₺20",
        period: "/ month",
        description: "Fixed monthly fee, unlimited orders",
      },
      commission: {
        title: "Tiered Commission",
        tier1: "₺0 - 500: 1% commission",
        tier2: "₺500 - 1,000: 2% commission",
        tier3: "₺1,000 - 5,000: 3% commission",
        tier4: "> ₺5,000: 4% commission",
      },
      examples: {
        title: "Revenue Examples",
        revenue: "Monthly Revenue",
        orders: "About {count} orders",
        commission: "Platform Fee",
        paymentFee: "Payment Fee",
        subscription: "Subscription",
        netIncome: "Your Earnings",
        merchantProfit: "You Keep",
      },
      fees: {
        title: "Fee Details",
        payment: "2% of transaction + ₺0.5 per order",
        commission: "Commission rate decreases as revenue increases",
      },
    },
    cta: {
      title: "Ready to Get Started?",
      description:
          "Join KolaYaz and experience the convenience of smart shared printing. Whether you need printing services or want to monetize idle equipment, we have the perfect solution for you.",
      primaryButton: "Get Started Now",
      secondaryButton: "Contact Us to Learn More",
      feature1: "No App Download",
      feature2: "Free Registration",
      feature3: "Start Immediately",
    },
  },
  zh: {
    header: {
      features: "功能特点",
      howToUse: "如何使用",
      pricing: "价格方案",
      login: "登录",
      getStarted: "开始使用",
    },
    hero: {
      badge: "智能IOT连接 · 实时可用",
      title: "随时随地",
      titleHighlight: "智能打印",
      description: "通过智能定位找到附近可用打印点，无需自购设备。 或将您的闲置打印机接入网络，轻松赚取被动收入。",
      findPrinter: "查找附近打印点",
      registerPrinter: "注册打印机赚钱",
      stat1Value: "5,000+",
      stat1Label: "活跃打印点",
      stat2Value: "¥12/页",
      stat2Label: "平均收益",
      stat3Value: "24/7",
      stat3Label: "全天候服务",
      nearbyPrinter: "附近打印点",
      realTimeShow : "实时显示在线设备，智能选择最优路线",
      mapLoading : "加载地图中...",
      prince : "单价",
      curren :  "₺",
      page: "页",
      format: "格式",
      formats: "PDF, Word, 图片",
      estimate: "预计",
      time: "3-5 分钟",
      starbucks: "星巴克咖啡馆",
      sevenEleven: "7-11 便利店",
      libraryPrintCenter: "图书馆打印中心",
      campusPrintShop: "校园快印店",
      printNow: "立即打印",
      online: "在线",
      printing: "打印中"
    },
    stats: {
      printers: "在线打印机",
      users: "活跃用户",
      revenue: "设备主收益",
      satisfaction: "服务满意度",
    },
    features: {
      title: "为什么选择",
      subtitle: "智能科技驱动的共享打印平台，让打印变得简单高效",
      location: {
        title: "智能定位",
        description: "实时查看附近可用打印点，精准导航，步行5分钟内即达",
      },
      security: {
        title: "安全可靠",
        description: "企业级加密传输，文件自动销毁，保护您的隐私安全",
      },
      instant: {
        title: "即时打印",
        description: "上传文档即刻打印，无需等待，支持多种文件格式",
      },
      wallet: {
        title: "收益透明",
        description: "设备主实时查看收益，每月15日自动结算到账",
      },
      support: {
        title: "24/7服务",
        description: "全天候设备监控，故障自动报警，确保服务不中断",
      },
      iot: {
        title: "IOT连接",
        description: "智能设备管理，远程监控打印机状态，耗材提醒",
      },
    },
    howItWorks: {
      title: "如何使用 KolaYaz",
      subtitle: "三步开始您的智能打印之旅",
      userBadge: "打印用户",
      ownerBadge: "设备提供者",
      userSteps: {
        step1Title: "查找打印点",
        step1Desc: "打开应用，查看附近可用的打印点位置",
        step2Title: "上传文档",
        step2Desc: "选择文件，设置打印参数，一键提交",
        step3Title: "取件完成",
        step3Desc: "前往打印点，扫码取件，轻松完成",
      },
      ownerSteps: {
        step1Title: "注册设备",
        step1Desc: "提交打印机信息，等待审核通过",
        step2Title: "接入网络",
        step2Desc: "安装智能模块，连接IOT平台",
        step3Title: "开始赚钱",
        step3Desc: "自动接单，实时查看收益明细",
      },
    },
    pricing: {
      title: "简单透明的定价",
      subtitle: "清晰的定价模式,无隐藏费用",
      merchantValue: {
        badge: "商家优先",
        title: "我们将 89% - 95% 的利润交给您",
        description: "我们的使命是服务商家。我们只保留最低限度的费用来维持平台运营,确保您从打印机中获得最大收益。",
        profitShare: "归您所有",
        platformFee: "平台费用",
      },
      subscription: {
        title: "月订阅费",
        price: "₺20",
        period: "/ 每月",
        description: "固定月费,无限订单",
      },
      commission: {
        title: "阶梯式抽成",
        tier1: "₺0 - 500: 抽成 1%",
        tier2: "₺500 - 1,000: 抽成 2%",
        tier3: "₺1,000 - 5,000: 抽成 3%",
        tier4: "> ₺5,000: 抽成 4%",
      },
      examples: {
        title: "收益示例",
        revenue: "月营收",
        orders: "约 {count} 笔订单",
        commission: "平台费用",
        paymentFee: "支付手续费",
        subscription: "订阅费",
        netIncome: "你的收入",
        merchantProfit: "你保留",
      },
      fees: {
        title: "费用说明",
        payment: "交易额的 2% + 每笔 ₺0.5",
        commission: "抽成比例随营收增长而递减",
      },
    },
    cta: {
      title: "准备好开始了吗？",
      description:
          "加入 KolaYaz，体验智能共享打印的便利。 无论您是需要打印服务的用户，还是想将闲置设备变现的设备主， 我们都为您准备了完善的解决方案。",
      primaryButton: "立即开始使用",
      secondaryButton: "联系我们了解更多",
      feature1: "无需下载APP",
      feature2: "免费注册",
      feature3: "即刻上手",
    },
  },
  tr: {
    header: {
      features: "Özellikler",
      howToUse: "Nasıl Çalışır",
      pricing: "Fiyatlandırma",
      login: "Giriş Yap",
      getStarted: "Başla",
    },
    hero: {
      badge: "Akıllı IOT Bağlantısı · Gerçek Zamanlı",
      title: "Her Zaman",
      titleHighlight: "Her Yerde Yazdır",
      description:
          "Akıllı konum ile size en yakın yazdırma noktalarını bulun, boşuna yazıcı almak zorunda kalmayın. Veya, kullanmadığınız yazıcınızı ağa bağlayarak pasif gelir elde edin!",
      findPrinter: "Yakındaki Yazıcıları Bul",
      registerPrinter: "Yazıcı Kaydet & Para Kazan",
      stat1Value: "5.000+",
      stat1Label: "Aktif Yazıcı",
      stat2Value: "₺0,5/sayfa",
      stat2Label: "Ort. Kazanç",
      stat3Value: "7/24",
      stat3Label: "Hizmet",
      nearbyPrinter: "Yakındaki yazıcı noktaları",
      realTimeShow: "Çevrimiçi cihazların gerçek zamanlı gösterimi, optimal rotayı akıllıca seçme",
      mapLoading: "Harita yükleniyor…",
      prince: "Birim fiyat",
      curren: "₺",
      page: "sayfa",
      format: "Format",
      formats: "PDF, Word, Resim",
      estimate: "Tahmini",
      time: "3-5 dakika",
      starbucks: "Starbucks",
      sevenEleven: "7-Eleven Market",
      libraryPrintCenter: "Kütüphane Yazıcı Merkezi",
      campusPrintShop: "Kampüs Baskı Dükkanı",
      printNow: "Şimdi Yazdır",
      online: "online",
      printing: "Yazdırılıyor"
    },
    stats: {
      printers: "Çevrimiçi Yazıcı",
      users: "Aktif Kullanıcı",
      revenue: "Cihaz Sahibi Geliri",
      satisfaction: "Memnuniyet Oranı",
    },
    features: {
      title: "Neden Üye Olmalısın?",
      subtitle: "Akıllı teknoloji destekli paylaşımlı yazdırma platformu, yazdırmayı basit ve verimli hale getirir",
      location: {
        title: "Akıllı Konum",
        description: "Yakındaki yazıcıları gerçek zamanlı görüntüleyin! Size en yakın yazıcıları hızlıca bulun.",
      },
      security: {
        title: "Güvenli & Güvenilir",
        description: "Kurumsal düzeyde şifreli aktarımı ve otomatik dosya imhası ile gizliliğiniz güvence altında.",
      },
      instant: {
        title: "Anında Yazdır",
        description: "Dosyanızı yükleyin ve hemen yazdırın, beklemeye gerek yok, birden fazla dosya formatını destekler",
      },
      wallet: {
        title: "Şeffaf Kazançlar",
        description: "Gerçek zamanlı kazanç takibi, her ayın 15'inde otomatik ödeme",
      },
      support: {
        title: "7/24 Hizmet",
        description: "Kesintisiz cihaz izleme, otomatik arıza uyarısı, kesintisiz hizmet sağlar",
      },
      iot: {
        title: "IOT Bağlantılı",
        description: "Akıllı cihaz yönetimi, uzaktan yazıcı izleme, kartuş ve kağıt hatırlatmaları",
      },
    },
    howItWorks: {
      title: "KolaYaz Nasıl Çalışır",
      subtitle: "Akıllı yazdırma yolculuğunuza üç adımda kolayca başlayın",
      userBadge: "Yazdırma Kullanıcıları",
      ownerBadge: "Cihaz Sağlayıcıları",
      userSteps: {
        step1Title: "Yazıcı Bul",
        step1Desc: "Uygulamayı açın ve yakındaki mevcut çıktı alabileceğiniz konumları görüntüleyin",
        step2Title: "Belge Yükle",
        step2Desc: "Dosyaları seçin, yazdırma parametrelerini ayarlayın, tek tıkla gönderin",
        step3Title: "Teslim Al",
        step3Desc: "Yazdırma noktasına gidin, kodu tarayın ve çıktınızı kolayca teslim alın.",
      },
      ownerSteps: {
        step1Title: "Cihaz Kaydı",
        step1Desc: "Yazıcı bilgilerini gönderin ve onay bekleyin",
        step2Title: "Ağa Bağlan",
        step2Desc: "Akıllı modülü kurun ve IOT platformuna bağlanın",
        step3Title: "Para Kazanmaya Başla",
        step3Desc: "Siparişleri otomatik kabul edin, kazançları gerçek zamanlı görüntüleyin",
      },
    },
    pricing: {
      title: "Basit ve Şeffaf Fiyatlandırma",
      subtitle: "Net fiyatlandırma modeli, gizli ücret yok",
      merchantValue: {
        badge: "Satıcı Önceliği",
        title: "Kârın %89 - %95'ini Size Veriyoruz",
        description:
            "Yalnızca platform gideri için minimum komisyon alıyoruz, yazıcınızdan maksimum kazanç elde etmenizi sağlıyoruz.",
        profitShare: "Yazıcı Sahibi Payı",
        platformFee: "Platform Ücretleri",
      },
      subscription: {
        title: "Aylık Abonelik",
        price: "₺0",
        period: "/ her ay",
        description: "Sabit aylık ücret yok, sınırsız sipariş!",
      },
      commission: {
        title: "Kademeli Komisyon",
        tier1: "₺0 - 500: %10 komisyon",
        tier2: "₺500 - 1.000: %20 komisyon",
        tier3: "₺1.000 - 5.000: %30 komisyon",
        tier4: "> ₺5.000: %40 komisyon",
      },
      examples: {
        title: "Gelir Örnekleri",
        revenue: "Aylık Gelir",
        orders: "Yaklaşık {count} sipariş",
        commission: "Platform Ücreti",
        paymentFee: "Ödeme Ücreti",
        subscription: "Abonelik",
        netIncome: "Kazancınız",
        merchantProfit: "Siz Tutarsınız",
      },
      fees: {
        title: "Ücret Detayları",
        payment: "İlk 3 ay sıfır komisyon!",
        commission: "Satıcı memnuniyeti odaklı komisyon oranları",
      },
    },
    cta: {
      title: "Başlamaya Hazır mısınız?",
      description:
          "KolaYaz'a katılın ve paylaşımlı yazdırmanın rahatlığını yaşayın. İster yazdırma hizmetlerine ihtiyacınız olsun, ister evde boş duran yazıcınızı gelire dönüştürmek isteyin, sizin için mükemmel bir çözümümüz var.",
      primaryButton: "Hemen Başlayın",
      secondaryButton: "Daha Fazla Bilgi İçin Bize Ulaşın",
      feature1: "Uygulama İndirmeye Gerek Yok",
      feature2: "Ücretsiz Kayıt",
      feature3: "Hemen Başlayın",
    },
  },
}

interface I18nContextType {
  language: Language
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

function detectLanguage(): Language {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language.toLowerCase()

  if (browserLang.startsWith("zh")) return "zh"
  if (browserLang.startsWith("tr")) return "tr"

  return "en"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const detectedLang = detectLanguage()
    setLanguage(detectedLang)
  }, [])

  const value: I18nContextType = {
    language,
    t: translations[language],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within I18nProvider")
  }
  return context
}
