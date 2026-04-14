"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

import Link from "next/link"
import { projects } from "@/lib/data"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary rounded mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={project.title} className="block">
              <Card
                className={`h-full overflow-hidden hover:shadow-lg transition-all duration-500 group cursor-pointer ${isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-40 bg-gradient-to-br from-secondary to-primary/20 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
