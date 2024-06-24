import MenuItem, { type MenuItemProps } from "./MenuItem";

export interface MenuProps {
  title: string;
  menuItems: MenuItemProps[];
}

export default function Menu({ title, menuItems }: MenuProps) {
  return (
    <div className="mx-auto w-full max-w-[218px] bg-white py-2">
      <h2 className="my-4 px-4 text-[0.75rem] font-bold uppercase text-aff-graysacale">
        {title}
      </h2>
      <ul className="w-full">
        {menuItems.map((menuItem: MenuItemProps) => (
          <MenuItem
            menuItem={menuItem}
            key={menuItem.id || crypto.randomUUID()}
          />
        ))}
      </ul>
    </div>
  );
}
