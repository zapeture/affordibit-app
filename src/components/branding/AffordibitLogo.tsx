import Link from "next/link";

interface AffordibitLogoProps {
  title?: string;
  linkUrl?: string;
}

const AffordibitIcon = function Logo() {
  return (
    <svg
      data-testid="affordibit-logo"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.632969 5.82614C0 7.35426 0 9.29149 0 13.166V21.4813C0 25.3558 0 27.293 0.632969 28.8211C1.47693 30.8586 3.09571 32.4774 5.13321 33.3214C6.66133 33.9543 8.59856 33.9543 12.473 33.9543H20.7884C24.6629 33.9543 26.6001 33.9543 28.1282 33.3214C30.1657 32.4774 31.7845 30.8586 32.6284 28.8211C33.2614 27.293 33.2614 25.3558 33.2614 21.4813V13.166C33.2614 9.29149 33.2614 7.35426 32.6284 5.82614C31.7845 3.78864 30.1657 2.16986 28.1282 1.3259C26.6001 0.692932 24.6629 0.692932 20.7884 0.692932H12.473C8.59856 0.692932 6.66133 0.692932 5.13321 1.3259C3.09571 2.16986 1.47693 3.78864 0.632969 5.82614ZM19.1819 9.79941C19.2176 9.67002 19.0669 9.57051 18.9619 9.65415L9.67958 17.05C9.591 17.1205 9.61989 17.2618 9.72908 17.292L14.677 18.6573C14.7508 18.6776 14.7941 18.7539 14.7737 18.8277L13.2036 24.5178C13.1679 24.6472 13.3186 24.7467 13.4236 24.663L22.7059 17.2672C22.7945 17.1966 22.7656 17.0554 22.6564 17.0252L17.7085 15.6599C17.6347 15.6396 17.5914 15.5633 17.6118 15.4895L19.1819 9.79941Z"
        className="fill-[#2563EB] tablet-up:fill-white"
      />
    </svg>
  );
};

export default function AffordibitLogo({
  title = "Affordibit",
  linkUrl = "/",
}: AffordibitLogoProps) {
  return (
    <Link
      href={linkUrl}
      className="flex max-w-[170px] items-center justify-start"
      role="link"
      title={title}
    >
      <AffordibitIcon />
      <span className="ms-3 text-2xl font-bold capitalize text-[#0F172A] tablet-up:text-white">
        {title}
      </span>
    </Link>
  );
}
