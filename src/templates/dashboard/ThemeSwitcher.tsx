"use client";

import { Switch } from "@/components/ui/switch";
import getIconComponent from "@/utils/getIconComponent";

export default function ThemeSwitcher() {
  const NightIcon = getIconComponent("night");

  return (
    <li className="flex min-h-12 items-center justify-start gap-x-4 rounded-xl px-4">
      <NightIcon className="size-[15px] text-aff-deeper-gray" />
      <span className="text-[0.875rem] text-aff-deeper-gray group-hover:font-bold">
        Dark Mode
      </span>
      <span className="me-0 ms-auto">
        <Switch />
      </span>
    </li>
  );
}
