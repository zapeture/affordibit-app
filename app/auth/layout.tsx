import AuthCarousel from "@/components/custom/carousel/AuthCarousel"
import AffodibitLogo from "@/components/custom/logo/AffodibitLogo"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="auth"
      className="w-full min-h-[100vh] max-w-[unset] flex justify-center items-center overflow-hidden px-0 bg-white tablet-up:bg-auth-bg gap-y-8"
    >
      <div className="container">
        <header className="auth-header w-full min-h-[80px] mb-5 flex justify-start items-center">
          <AffodibitLogo />
        </header>
        <div className="w-full max-w-[1186px] mx-auto flex justify-between items-center">
          <div className="flex-1 hidden tablet-up:block">
            <AuthCarousel
              slides={[
                {
                  heading: "Customizable Multipurpose Dashboard",
                  subheading:
                    "Everything you need in an easily customizable dashboard.",
                  image:
                    "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
                },
                {
                  heading: "Customizable Multipurpose Dashboard",
                  subheading:
                    "Everything you need in an easily customizable dashboard.",
                  image:
                    "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
                }
              ]}
            />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </section>
  )
}
