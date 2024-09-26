import { BsMoonStars } from "react-icons/bs";
import { CiGrid41, CiSettings } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { IoQrCodeOutline } from "react-icons/io5";
import { PiPlaceholderThin } from "react-icons/pi";
import { SiPowerpages } from "react-icons/si";
import { WiDaySunny } from "react-icons/wi";

export type IconTypes =
  | "menu"
  | "links"
  | "qr"
  | "pages"
  | "settings"
  | "day"
  | "night";

export default function getIconComponent(icon: IconTypes) {
  switch (icon) {
    case "menu":
      return CiGrid41;
    case "links":
      return IoIosLink;
    case "qr":
      return IoQrCodeOutline;
    case "pages":
      return SiPowerpages;
    case "settings":
      return CiSettings;
    case "night":
      return BsMoonStars;
    case "day":
      return WiDaySunny;
    default:
      return PiPlaceholderThin;
  }
}
