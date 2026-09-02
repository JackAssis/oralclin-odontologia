"use client";

import { event } from "@/lib/analytics/gtag";
import type { ReactNode } from "react";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  children: ReactNode;
  className?: string;
};

export function TrackedLink({ href, eventName, children, className = "" }: TrackedLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => event(eventName)}
      className={className}
    >
      {children}
    </a>
  );
}
