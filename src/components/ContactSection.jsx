"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export const ContactSection = () => {
  const form = useRef();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Set time on client side to avoid hydration issues
  useEffect(() => {
    setCurrentTime(new Date().toLocaleString());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        form.current.reset();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Contact Me
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In
            <span className="text-gradient"> Touch</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
          <div className="space-y-8 w-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 w-full">
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <Link
                    href="mailto:a.s.purab0@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    a.s.purab0@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Phone</h4>
                  <div className="flex items-center gap-2">
                    <Link
                      href="tel:+8801626868986"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +880 1626-868986
                    </Link>
                    <Link
                      href="https://wa.me/8801626868986"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600"
                      title="Chat on WhatsApp"
                    >
                      <FaWhatsapp size={18} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Dhaka-1207, Bangladesh
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 w-full">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex gap-4 justify-center">
                <Link
                  href="https://linkedin.com/in/a-s-purab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  href="https://x.com/A_S_Purab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={24} />
                </Link>
                <Link
                  href="https://github.com/Purab2001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs w-full flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-6 w-full max-w-md"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Abir Shahadat..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <input type="hidden" name="time" value={currentTime} />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
