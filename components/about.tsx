"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    "JavaScript/TypeScript",
    "React Native",
    "Next.js",
    "Python",
    "Java",
    "C/C++",
    "Mobile (iOS/Android)",
    "Arduino",
    ".NET",
    "MySQL/SQLite",
    "System Design",
    "UI/UX",
  ]

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`space-y-6 transition-all duration-900 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm Ilyes Dellaoui, a versatile developer with strong expertise across multiple programming languages and
              frameworks. I specialize in building complete technical ecosystems and solving complex challenges.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              With experience in full-cycle app development—from mobile (iOS/Android) to desktop applications to web
              platforms—I excel at structuring multi-app systems and integrating complex features like authentication,
              databases, and file storage.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Fluent in Arabic, French, and English, I bring diverse perspectives to problem-solving and communicate
              effectively across teams.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I was selected as one of the winners in Huawei ICT  competition 2026 in national stage .
            </p>
          </div>

          <div
            className={`space-y-4 transition-all duration-1100 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-semibold text-foreground">Core Competencies</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium text-center hover:bg-primary/20 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
