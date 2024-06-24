import type { LocalePrefix } from "node_modules/next-intl/dist/types/src/shared/types";

const localePrefix: LocalePrefix = "as-needed";

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: "Affordibit App",
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix,
  auth: {
    signInUrl: "/sign-in",
    signUpUrl: "/sign-up",
    dashboardUrl: "/dashboard",
  },
};
