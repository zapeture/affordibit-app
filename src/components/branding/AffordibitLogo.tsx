import Link from "next/link";

interface AffordibitLogoProps {
  title?: string;
  linkUrl?: string;
  variant?: "light" | "blue";
  textColorLight?: string;
  textColorBlue?: string;
  customFillColorLight?: string;
  customFillColorBlue?: string;
  className?: string;
}

interface AffordibitIconProps {
  variant: "light" | "blue";
  customFillColorLight?: string;
  customFillColorBlue?: string;
}

const AffordibitIcon = function Logo({
  variant,
  customFillColorLight,
  customFillColorBlue,
}: AffordibitIconProps) {
  const fillColor =
    variant === "light"
      ? customFillColorLight || "#2563EB"
      : customFillColorBlue || "#FFFFFF";

  return (
    <svg
      data-testid="affordibit-logo"
      width="34"
      height="34"
      viewBox="0 0 810 810"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    >
      <g id="Interface---External_Link">
        <path
          id="Vector"
          d="M343.538,189.863l-55.321,-0c-34.425,-0 -51.65,-0 -64.799,6.699c-11.566,5.893 -20.963,15.29 -26.856,26.856c-6.699,13.149 -6.699,30.374 -6.699,64.799l-0,233.578c-0,34.425 -0,51.63 6.699,64.778c5.893,11.565 15.29,20.979 26.856,26.87c13.136,6.694 30.34,6.694 64.698,6.694l233.768,0c34.357,0 51.538,0 64.673,-6.694c11.566,-5.891 20.995,-15.314 26.886,-26.879c6.694,-13.136 6.694,-30.323 6.694,-64.68l0,-55.416m30.734,-153.67l0,-153.669m0,-0l-153.669,-0m153.669,-0l-215.137,215.137"
          style={{
            fill: "none",
            fillRule: "nonzero",
            stroke: fillColor,
            strokeWidth: "61.47px",
          }}
        />
      </g>
    </svg>
  );
};

export default function AffordibitLogo({
  title = "Affordibit",
  linkUrl = "/",
  variant = "light",
  textColorLight = "#0F172A",
  textColorBlue = "#FFFFFF",
  customFillColorLight,
  customFillColorBlue,
  className = "",
}: AffordibitLogoProps) {
  const textColor = variant === "light" ? textColorLight : textColorBlue;

  return (
    <Link
      href={linkUrl}
      className={`flex max-w-[170px] items-center justify-start ${className}`}
      role="link"
      title={title}
    >
      <AffordibitIcon
        variant={variant}
        customFillColorLight={customFillColorLight}
        customFillColorBlue={customFillColorBlue}
      />
      <span
        className="ms-3 text-2xl font-bold capitalize"
        style={{ color: textColor }}
      >
        {title}
      </span>
    </Link>
  );
}
