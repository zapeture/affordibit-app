const localePrefix: any = "as-needed";

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
