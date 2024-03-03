import { Meta, StoryObj } from "@storybook/react"
import { Heading } from "@/components/ui/typography"

const meta: Meta = {
  title: "Components/Ui/Typography",
  component: Heading
}

export default meta

/**
 * Description
 * @param {any} level:1|2|3|4|5|6
 * @returns {any}
 */
const createHeadingStory = (
  level: 1 | 2 | 3 | 4 | 5 | 6
): StoryObj<typeof Heading> => ({
  args: {
    children: `H${level}`,
    level
  }
})

export const H1 = createHeadingStory(1)
export const H2 = createHeadingStory(2)
export const H3 = createHeadingStory(3)
export const H4 = createHeadingStory(4)
export const H5 = createHeadingStory(5)
export const H6 = createHeadingStory(6)
