import Link from "next/link";

import MenuRule from "@/components/rules/MenuRule";
import getIconComponent from "@/utils/getIconComponent";

import ThemeSwitcher from "./ThemeSwitcher";

export default function Footer() {
  const SettingsIcon = getIconComponent("settings");
  return (
    <footer className="w-full flex-none">
      <MenuRule />
      <ul className="w-full max-w-[218px]">
        <li className="group flex min-h-12 items-center justify-start gap-x-4 rounded-xl px-4 hover:bg-[#F8FAFC] hover:text-aff-blue">
          <SettingsIcon className="size-[22px] text-aff-deeper-gray group-hover:text-aff-blue" />
          <Link
            href="/settings"
            className="text-[0.875rem] text-aff-deeper-gray group-hover:font-bold group-hover:text-aff-blue"
            role="link"
          >
            Settings
          </Link>
        </li>
        <ThemeSwitcher />
      </ul>
    </footer>
  );
}
