"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resume } from "@/data/resume";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or ways to collaborate. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild>
              <a href={`mailto:${resume.personal.email}`}>
                <Mail className="h-4 w-4 mr-2" />
                {resume.personal.email}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`tel:${resume.personal.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                {resume.personal.phone}
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={resume.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={resume.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-1">
            <MapPin className="h-4 w-4" />
            {resume.personal.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
