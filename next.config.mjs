/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import { fileURLToPath } from "node:url";

import withBundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";
import createJiti from "jiti";
import withNextIntl from "next-intl/plugin";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/libs/Env");

const withNextIntlConfig = withNextIntl("./src/libs/i18n.ts");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
export default withSentryConfig(
  bundleAnalyzer(
    withNextIntlConfig({
      eslint: {
        dirs: ["."],
      },
      poweredByHeader: false,
      reactStrictMode: true,
      // serverExternalPackages: ["pino"],
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "via.placeholder.com",
          },
        ],
      },
    }),
  ),
  {
    silent: true,
    org: "affordibit-app-org",
    project: "affordibit-app",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  },
);
