"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Hi, I'm <span className="text-primary">Ilyes Dellaoui</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Full-stack developer & innovator specializing in building scalable applications across mobile, desktop,
              and web. I turn complex challenges into elegant, performant solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="#projects">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 animate-fade-in-up">
                  View My Work
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="px-8 border-primary text-primary hover:bg-secondary bg-transparent animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          <div
            className={`relative h-96 rounded-2xl overflow-hidden transition-all duration-1000 ${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <Image
              src="/1730544647500.jpeg"
              alt="Ilyes Dellaoui"
              fill
              className="object-cover animate-float"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
