import type { StorybookConfig } from "@storybook/nextjs"
import * as path from "path"

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: "tag"
  },
  core: {
    disableTelemetry: true
  },
  staticDirs: ["../public"]
}
export default config
