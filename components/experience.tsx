"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const experiences = [
    {
      title: "Full-Stack Development",
      focus: "Multi-Platform Expertise",
      description:
        "Built mobile apps (iOS/Android with React Native), desktop applications (JavaFX, .NET), and web platforms. Expert in integrating complex features and managing full-cycle development.",
      icon: "🚀",
    },
    {
      title: "System Architecture & Design",
      focus: "Complex Problem Solving",
      description:
        "Designed multi-module systems with clear data flow and controllers. Experience with database optimization, authentication systems, and scalable architecture patterns.",
      icon: "⚙️",
    },
    {
      title: "Technical Versatility",
      focus: "Polyglot Developer",
      description:
        "Proficient in 10+ programming languages (C, C++, Python, Java, JavaScript, Kotlin, PHP, SQL, etc.). Quick learner who picks up new tools and frameworks as needed.",
      icon: "💡",
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">Core Strengths</h2>
          <div className="w-16 h-1 bg-primary rounded mb-12"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title}
              className={`p-6 border-l-4 border-l-primary hover:shadow-md transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{exp.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium mb-2">{exp.focus}</p>
                  <p className="text-foreground/70">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
