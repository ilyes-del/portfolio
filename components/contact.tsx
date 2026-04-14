"use client"

import * as React from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [isSending, setIsSending] = React.useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim()) {
      toast({ title: 'Message is empty', description: 'Please add a message before sending.' })
      return
    }

    setIsSending(true)

    fetch('/api/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })
      .then(async (res) => {
        const json = await res.json()
        if (res.ok && json.ok) {
          toast({ title: 'Message sent', description: 'Thanks! I will get back to you soon.' })
          setName('')
          setEmail('')
          setMessage('')
        } else {
          toast({ title: 'Send failed', description: 'Failed to send message. Try again later.' })
        }
      })
      .catch(() => {
        toast({ title: 'Send failed', description: 'Network error. Please try again later.' })
      })
      .finally(() => setIsSending(false))
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Get in Touch
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-12"></div>

        <div className="space-y-8">
          <p className="text-lg text-foreground/70">
            Have a project in mind? I'd love to hear about it. Feel free to
            reach out!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                className="bg-secondary/50 border-primary/30 text-foreground placeholder:text-foreground/50"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="bg-secondary/50 border-primary/30 text-foreground placeholder:text-foreground/50"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              className="w-full px-4 py-3 bg-secondary/50 border border-primary/30 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <Button disabled={isSending} type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
              {isSending ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center pt-8 border-t border-border">
            <a
              href="https://github.com/ilyes-del"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition font-medium"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ilyes-dellaoui/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition font-medium"
            >
              LinkedIn
            </a>

            <a
              href="mailto:ilyesdellaoui@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition font-medium"
            >
              Email
            </a>
            <a
              href="tel:+213557691508"
              className="text-foreground/60 hover:text-primary transition font-medium"
              aria-label="Call +213557691508"
            >
              Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
