import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/typography"

export const metadata = {
  title: "Main Page",
}

export default function Page() {
  return (
    <div>
      <Heading level={1}>Hello World</Heading>
      <Button>Growth</Button>
    </div>
  )
}
