import AuthHeader from "@/components/pages/Auth/AuthHeader"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="auth-layout"
      className="w-full h-[900px] bg-white large-mobile-up:bg-auth-bg"
    >
      <div className="container max-w-[1260px] border border-black">
        <AuthHeader />
        <div className="grid large-mobile-up:grid-cols-2">
          <div className="auth-col auth-carousel hidden large-mobile-up:block"></div>
          <div className="auth-col auth-form">{children}</div>
        </div>
      </div>
    </section>
  )
}
