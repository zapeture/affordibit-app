import BrandLogo from "@/components/custom/branding/BrandLogo"

export default function AuthHeader() {
  return (
    <nav className="auth-navbar pt-[40px] pb-[50px] large-mobile-up:pt-[50px] large-mobile-up:pb-[60px]">
      <span className="hidden large-mobile-up:block">
        <BrandLogo variant="light" />
      </span>
      <span className="large-mobile-up:hidden">
        <BrandLogo />
      </span>
    </nav>
  )
}
