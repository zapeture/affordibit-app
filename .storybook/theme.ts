import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  brandTitle: "Affordibit Storybook",
  brandUrl: `${process.env.NEXT_PUBLIC_STORYBOOK_URL || "http://localhost:6006"}`,
  brandImage:
    "https://res.cloudinary.com/zapeture/image/upload/v1717864961/affordibit/development/Exclude_z8n33z.svg",
  brandTarget: "_blank",
  fontBase: '"Inter", sans-serif',
  colorPrimary: "#2563eb",
});
