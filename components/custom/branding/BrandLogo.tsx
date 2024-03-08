import Link from "next/link"
import { Link as LinkIcon } from "lucide-react"
import { Heading } from "@/components/core/ui/typography"

interface BrandLogoProps {
  brandName?: string
  link?: string
  variant?: "default" | "light"
  props?: any
}

export default function BrandLogo({
  brandName = "Affordibit",
  link = "/",
  variant = "default",
  props
}: BrandLogoProps) {
  return (
    <Link
      href={link}
      className="w-full flex justify-between items-center max-w-[115px] large-mobile-up:max-w-[167px] gap-x-[10px]"
      {...props}
    >
      <span
        className={`${variant === "light" ? "bg-white text-primary" : "bg-primary text-white"} p-2 rounded-sm`}
      >
        <LinkIcon className="stroke-[3px] size-5 large-mobile-down:size-4" />
      </span>{" "}
      <Heading
        level={2}
        className={`${variant === "light" ? "text-white" : "text-gray-900"} block large-mobile-down:text-[20px]`}
      >
        {brandName}
      </Heading>
    </Link>
  )
}
