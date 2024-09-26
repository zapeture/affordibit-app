import AffordibitLogo from "@/components/branding/AffordibitLogo";
import AuthFooterLinks from "@/components/navigation/AuthFooterLinks";

interface AuthLayoutProps {
  cover: React.ReactNode;
  children?: React.ReactNode;
}

export default function AuthTemplate({ children, cover }: AuthLayoutProps) {
  return (
    <section className="min-h-screen w-full bg-white bg-fixed bg-no-repeat py-10 tablet-up:bg-auth-background">
      <div className="container mx-auto max-w-[1180px]">
        <header className="w-full">
          <span className="hidden  tablet-up:inline">
            <AffordibitLogo variant="blue" />
          </span>
          <span className="inline-block tablet-up:hidden">
            <AffordibitLogo variant="light" />
          </span>
        </header>
        <div className="mt-12 grid grid-cols-1 tablet-up:grid-cols-2">
          <div className="hidden items-center justify-center tablet-up:flex">
            {cover}
          </div>
          <div className="flex flex-col items-center justify-center">
            {children}
            <AuthFooterLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
