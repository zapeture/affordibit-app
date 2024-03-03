import type { StorybookConfig } from "@storybook/nextjs"

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
  }
}
export default config
