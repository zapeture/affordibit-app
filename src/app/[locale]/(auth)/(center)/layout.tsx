import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import AuthCoverCarousels from "@/components/carousels/AuthCoverCarousel";
import AuthTemplate from "@/templates/AuthTemplate";
import { AppConfig } from "@/utils/AppConfig";

export default function AuthLayout(props: { children: React.ReactNode }) {
  const { userId } = auth();

  if (userId) {
    redirect(AppConfig.auth.dashboardUrl);
  }

  const sampleSlides = [
    {
      headline: "Customizable Multipurpose Dashboard",
      subHeadline: "Everything you need in an easily customizable dashboard.",
      image: "assets/images/graphics/AnalyticsGraphic.svg",
    },
    {
      headline: "Customizable Multipurpose Dashboard",
      subHeadline: "Everything you need in an easily customizable dashboard.",
      image: "assets/images/graphics/AnalyticsGraphic.svg",
    },
    {
      headline: "Customizable Multipurpose Dashboard",
      subHeadline: "Everything you need in an easily customizable dashboard.",
      image: "assets/images/graphics/AnalyticsGraphic.svg",
    },
  ];

  return (
    <AuthTemplate cover={<AuthCoverCarousels slides={sampleSlides} />}>
      {props.children}
    </AuthTemplate>
  );
}
