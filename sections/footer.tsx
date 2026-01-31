"use client";

import { resume } from "@/data/resume";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {resume.personal.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
