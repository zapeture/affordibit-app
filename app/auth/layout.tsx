import AuthCarousel from "@/components/custom/carousel/AuthCarousel"
import AuthHeader from "@/components/pages/Auth/AuthHeader"

export default function Layout({ children }: { children: React.ReactNode }) {
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
      className="w-full h-[900px] bg-white large-mobile-up:bg-auth-bg"
    >
      <div className="container max-w-[1260px]">
        <AuthHeader />
        <div className="grid large-mobile-up:grid-cols-2">
          <div className="auth-col auth-carousel hidden large-mobile-up:block">
            <AuthCarousel slides={slides} />
          </div>
          <div className="auth-col auth-form">{children}</div>
        </div>
      </div>
    </section>
  )
}
