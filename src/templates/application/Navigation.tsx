"use client";

import { AnimatePresence, motion as animation } from "framer-motion";
import Link from "next/link";
import { useWindowSize } from "react-use";

import AffordibitLogo from "@/components/branding/AffordibitLogo";
import { useDashboardStore } from "@/utils/store";

function SideBarHeader() {
  return (
    <header className="mx-[32px] flex basis-1/5 items-center justify-center border border-red-700">
      <AffordibitLogo variant="light" />
    </header>
  );
}

function SidebarMenus() {
  return (
    <section className="mx-[32px] basis-[70%] border border-blue-700">
      <div className="menu-group">
        <h5 className="menu-title text-[12px] font-bold uppercase text-gray-400">
          Menu
        </h5>
        <ul className="menu-list">
          <li className="menu-item">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="menu-item">
            <Link href="/">My Links</Link>
          </li>
          <li className="menu-item">
            <Link href="/">QR Codes</Link>
          </li>
          <li className="menu-item">
            <Link href="/">Pages</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

function SideBarFooter() {
  return (
    <footer className="mx-[32px] basis-[10%] border border-blue-700">
      footer
    </footer>
  );
}

function SideBarInner() {
  return (
    <div className="flex h-screen w-full flex-col border border-black">
      <SideBarHeader />
      <SidebarMenus />
      <SideBarFooter />
    </div>
  );
}

export default function Navigation() {
  const { isSidebarOpen } = useDashboardStore();
  const { width } = useWindowSize();

  const animations = {
    desktop: {
      initial: { opacity: 0, x: -300 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -300 },
      transition: { duration: 0.5, type: "easeIn" },
    },
    mobile: {
      initial: { opacity: 0, y: -300 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -300 },
      transition: { duration: 0.5, type: "easeIn" },
    },
  };

  const currentAnimation =
    width > 1024 ? animations.desktop : animations.mobile;

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <animation.section
          className="h-full w-1/4  desktop-up:w-1/5 desktop-down:absolute desktop-down:left-0 desktop-down:top-0 desktop-down:w-full"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={currentAnimation.transition}
          variants={currentAnimation}
        >
          <SideBarInner />
        </animation.section>
      )}
    </AnimatePresence>
  );
}
