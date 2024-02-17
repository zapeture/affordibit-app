import { Button } from "@/components/ui/button/button"
import { Heading } from "@/components/ui/typography"

export const metadata = {
  title: "Main Page"
}

export default function Page() {
  return (
    <div>
      <Heading level={1}>Hello World</Heading>
      <Button variant={"secondary"}>Growth</Button>
    </div>
  )
}
