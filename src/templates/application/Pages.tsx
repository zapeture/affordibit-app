"use client";

import { motion as animation } from "framer-motion";

import { useDashboardStore } from "@/utils/store";

export default function Pages({ content }: { content: React.ReactNode }) {
  const { toggleSidebar } = useDashboardStore();
  return (
    <animation.section
      className="size-full bg-green-400 transition-all delay-150 ease-in-out"
      layout
    >
      <button type="button" onClick={() => toggleSidebar()} className="m-4">
        Toggle Layout
      </button>

      <header className="w-full" />

      {content}
    </animation.section>
  );
}
