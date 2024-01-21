"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthFooterLinks() {
  const pathname = usePathname();

  const linkText: string =
    pathname === "/sign-in"
      ? "Don't have an account?"
      : "Already have an account?";

  const redirectUrl: string = pathname === "/sign-in" ? "/sign-up" : "/sign-in";

  return (
    <div className="w-full" data-testid="auth-footer-links">
      <p className="text-center text-[12px] font-medium">
        <span className="me-1">{linkText}</span>
        <span className="text-[#2563EB]">
          <Link href={redirectUrl}>
            {pathname === "/sign-in" ? "Signup" : "Signin"}
          </Link>
        </span>
      </p>
    </div>
  );
}
