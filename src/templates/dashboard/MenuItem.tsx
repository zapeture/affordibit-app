import Link from "next/link";

import getIconComponent, { type IconTypes } from "@/utils/getIconComponent";

export interface MenuItemProps {
  id?: string | number;
  itemTitle: string;
  link: string;
  icon: IconTypes;
}

export default function MenuItem({ menuItem }: { menuItem: MenuItemProps }) {
  const IconComponent = getIconComponent(menuItem.icon);
  return (
    <li
      key={menuItem.id}
      className="group flex min-h-12 items-center justify-start gap-x-4 rounded-xl px-4 hover:bg-[#F8FAFC] hover:text-aff-blue"
    >
      <IconComponent className="size-[22px] text-aff-deeper-gray group-hover:text-aff-blue" />
      <Link
        href={menuItem.link}
        className="text-[0.875rem] text-aff-deeper-gray group-hover:font-bold group-hover:text-aff-blue"
        role="link"
      >
        {menuItem.itemTitle}
      </Link>
    </li>
  );
}
