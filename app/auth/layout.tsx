import AuthCarousel from "@/components/custom/carousel/AuthCarousel"
import AuthHeader from "@/components/pages/Auth/AuthHeader"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect("/blog")
  }

  const slides = [
    {
      heading: "Customizable Multipurpose Dashboard",
      subHeading: "Everything you need in an easily customizable dashboard.",
      image:
        "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
    },
    {
      heading: "Customizable Multipurpose Dashboard",
      subHeading: "Everything you need in an easily customizable dashboard.",
      image:
        "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
    },
    {
      heading: "Customizable Multipurpose Dashboard",
      subHeading: "Everything you need in an easily customizable dashboard.",
      image:
        "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
    }
  ]
  return (
    <section
      id="auth-layout"
      className="w-full min-h-[900px] bg-white large-mobile-up:bg-auth-bg"
    >
      <div className="container max-w-[1180px]">
        <AuthHeader />
        <div className="grid large-mobile-up:grid-cols-2 gap-x-6">
          <div className="auth-col auth-carousel hidden large-mobile-up:block">
            <AuthCarousel slides={slides} />
          </div>
          <div className="auth-col auth-form">{children}</div>
        </div>
      </div>
    </section>
  )
}
