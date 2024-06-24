import MenuRule from "@/components/rules/MenuRule";

import type { MenuProps } from "./Menu";
import Menu from "./Menu";

export default function Body() {
  const menus: MenuProps[] = [
    {
      title: "Menu",
      menuItems: [
        {
          itemTitle: "Dashboard",
          link: "/dashboard",
          icon: "menu",
        },
        {
          itemTitle: "Links",
          link: "/links",
          icon: "links",
        },
        {
          itemTitle: "QR Code",
          link: "/qr",
          icon: "qr",
        },
        {
          itemTitle: "Pages",
          link: "/pages",
          icon: "pages",
        },
      ],
    },
  ];
  return (
    <section className="grow">
      <MenuRule />
      {menus.map((menu: MenuProps) => {
        return (
          <Menu
            key={crypto.randomUUID()}
            title={menu.title}
            menuItems={menu.menuItems}
          />
        );
      })}
    </section>
  );
}
