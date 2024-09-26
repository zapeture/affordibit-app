import { SignIn } from "@clerk/nextjs";
import { getTranslations } from "next-intl/server";

import { AppConfig } from "@/utils/AppConfig";
import { getI18nPath } from "@/utils/Helpers";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "SignIn",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const SignInPage = (props: { params: { locale: string } }) => (
  <SignIn
    path={getI18nPath(AppConfig.auth.signInUrl, props.params.locale)}
    fallbackRedirectUrl={AppConfig.auth.dashboardUrl}
  />
);

export default SignInPage;
