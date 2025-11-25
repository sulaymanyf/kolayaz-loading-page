"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Printer, Clock, DollarSign } from "lucide-react"
import 'leaflet/dist/leaflet.css';
import { useTranslation } from "@/lib/i18n"
//41.009216, 28.982623

declare global {
  interface Window {
    L: any
  }
}

export function NetworkMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [selectedLocation, setSelectedLocation] = useState<(typeof mockLocations)[0] | null>(null)
  const mapInstanceRef = useRef<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const { t } = useTranslation()

  const mockLocations = [

    {
      id: 1,
      name: t.hero.starbucks,
      status: "online",
      price: "0.2",
      distance: "300m",
      lat: 41.036130,
      lng: 28.969245,
    },
    {
      id: 2,
      name: t.hero.sevenEleven,
      status: "printing",
      price: "0.15",
      distance: "500m",
      lat: 41.014796,
      lng: 28.957607,
    },
    {
      id: 3,
      name: t.hero.libraryPrintCenter,
      status: "online",
      price: "0.18",
      distance: "800m",
      lat: 41.022756,
      lng: 29.011771,
    },
    {
      id: 4,
      name: t.hero.campusPrintShop,
      status: "online",
      price: "0.12",
      distance: "1.2km",
      lat: 41.009216,
      lng: 28.982623,
    },
  ]


  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    link.rel = "stylesheet"
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    link.crossOrigin = ""
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    script.crossOrigin = ""
    script.async = true

    script.onload = () => {
      setMapLoaded(true)
      initializeMap()
    }

    document.head.appendChild(script)

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }
      if (link.parentNode) {
        link.parentNode.removeChild(link)
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  const initializeMap = () => {
    if (!mapContainerRef.current || mapInstanceRef.current || !window.L) return

    const map = window.L.map(mapContainerRef.current).setView([ 41.026777, 28.970768], 13)

    window.L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map)

    mapInstanceRef.current = map

    const userIcon = window.L.divIcon({
      className: "custom-user-marker",
      html: `
        <div style="
          width: 24px;
          height: 24px;
          background: #40FFD8;
          border: 3px solid #fff;
          border-radius: 50%;
          box-shadow: 0 0 20px #40FFD8, 0 0 40px #40FFD8;
          animation: pulse-user 2s infinite;
        "></div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    })

    window.L.marker([41.026777, 28.970768], { icon: userIcon }).addTo(map)

    mockLocations.forEach((location) => {
      const color = location.status === "online" ? "#2A8CFF" : "#6F4CFF"
      const printerIcon = window.L.divIcon({
        className: "custom-print-marker",
        html: `
          <div class="print-marker-wrapper" style="
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transform-origin: center;
            transition: transform 0.2s;
          ">
            <div style="
              width: 32px;
              height: 32px;
              background: ${color};
              border: 3px solid #fff;
              border-radius: 50%;
              box-shadow: 0 0 20px ${color}, 0 0 40px ${color};
              display: flex;
              align-items: center;
              justify-content: center;
              animation: pulse-marker 2s infinite;
            ">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
            </div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      })

      const marker = window.L.marker([location.lat, location.lng], { icon: printerIcon }).addTo(map)

      marker.on("click", () => {
        setSelectedLocation(location)
        map.flyTo([location.lat, location.lng], 15, {
          duration: 1,
        })
      })

      marker.on("mouseover", (e: any) => {
        const markerElement = e.target.getElement()
        const wrapper = markerElement.querySelector(".print-marker-wrapper")
        if (wrapper) {
          wrapper.style.transform = "scale(1.2)"
        }
      })

      marker.on("mouseout", (e: any) => {
        const markerElement = e.target.getElement()
        const wrapper = markerElement.querySelector(".print-marker-wrapper")
        if (wrapper) {
          wrapper.style.transform = "scale(1)"
        }
      })
    })
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-background/50 to-background">
      <style jsx global>{`
        @keyframes pulse-user {
          0%,
          100% {
            box-shadow: 0 0 20px #40ffd8, 0 0 40px #40ffd8;
          }
          50% {
            box-shadow: 0 0 30px #40ffd8, 0 0 60px #40ffd8;
          }
        }
        @keyframes pulse-marker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .leaflet-control-attribution {
          background: rgba(10, 14, 26, 0.8) !important;
          color: #2a8cff !important;
          font-size: 10px !important;
        }
        .leaflet-control-attribution a {
          color: #2a8cff !important;
        }
        .leaflet-control-zoom a {
          background: rgba(10, 14, 26, 0.8) !important;
          border: 1px solid #2a8cff !important;
          color: #2a8cff !important;
        }
        .leaflet-control-zoom a:hover {
          background: rgba(42, 140, 255, 0.2) !important;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{t.hero.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground">{t.hero.realTimeShow}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 relative">
            <div ref={mapContainerRef} className="relative w-full h-[600px] bg-slate-950" />

            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-10">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-muted-foreground">{t.hero.mapLoading}</p>
                </div>
              </div>
            )}

            {selectedLocation && (
              <div className="absolute bottom-4 right-4 w-80 max-w-[calc(100%-2rem)] z-[1000] animate-in slide-in-from-right duration-300">
                <Card className="glass-card border-primary/50 shadow-2xl">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg">{selectedLocation.name}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant={selectedLocation.status === "online" ? "default" : "secondary"}>
                            {selectedLocation.status === "online" ? "在线" : "打印中"}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{selectedLocation.distance}</span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedLocation(null)
                        }}
                        className="text-muted-foreground hover:text-foreground transition-colors text-xl leading-none"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{t.hero.prince}：</span>
                        <span className="font-semibold">{t.hero.curren}{selectedLocation.price}{t.hero.page}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Printer className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{t.hero.format}：</span>
                        <span>{t.hero.formats}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{t.hero.estimate}：</span>
                        <span>{t.hero.time}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                      {t.hero.printNow}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
