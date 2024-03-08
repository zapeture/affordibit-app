import BrandLogo from "@/components/custom/branding/BrandLogo"

export default function AuthHeader() {
  return (
    <nav className="auth-navbar mt-[40px] large-mobile-up:mt-[50px]">
      <span className="hidden large-mobile-up:block">
        <BrandLogo variant="light" />
      </span>
      <span className="large-mobile-up:hidden">
        <BrandLogo />
      </span>
    </nav>
  )
}
