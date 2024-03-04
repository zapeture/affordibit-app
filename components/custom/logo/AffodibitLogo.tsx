import { Heading } from "@/components/core/ui/typography"
import Link from "next/link"

export default function AffodibitLogo() {
  return (
    <Link href={"/"}>
      <Heading
        level={2}
        className="text-white w-14 flex justify-center items-center aspect-square bg-white rounded-md"
      >
        <span className="text-primary">AF</span>
      </Heading>
    </Link>
  )
}
