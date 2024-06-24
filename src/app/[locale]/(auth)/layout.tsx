import { enUS, frFR } from "@clerk/localizations";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";

import AuthLoader from "@/components/loaders/AuthLoader";
import { AppConfig } from "@/utils/AppConfig";
import { authAppearance } from "@/utils/ClerkAppearance";

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let clerkLocale = enUS;
  let { signInUrl } = AppConfig.auth;
  let { signUpUrl } = AppConfig.auth;
  let { dashboardUrl } = AppConfig.auth;

  if (props.params.locale === "fr") {
    clerkLocale = frFR;
  }

  if (props.params.locale !== "en") {
    signInUrl = `/${props.params.locale}${signInUrl}`;
    signUpUrl = `/${props.params.locale}${signUpUrl}`;
    dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  }

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      appearance={authAppearance}
    >
      <ClerkLoading>
        <AuthLoader />
      </ClerkLoading>
      <ClerkLoaded>{props.children}</ClerkLoaded>
    </ClerkProvider>
  );
}
