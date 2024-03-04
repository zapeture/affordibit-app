import React from "react"

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const baseClass = "font-bold"
  let sizeClass = ""

  switch (level) {
    case 1:
      sizeClass = "text-5xl"
      break
    case 2:
      sizeClass = "text-4xl"
      break
    case 3:
      sizeClass = "text-3xl"
      break
    case 4:
      sizeClass = "text-2xl"
      break
    case 5:
      sizeClass = "text-xl"
      break
    case 6:
      sizeClass = "text-lg"
      break
    default:
      sizeClass = "text-xl"
  }

  const classNames = `${baseClass} ${sizeClass} ${className}`

  return <Tag className={classNames}>{children}</Tag>
}

export default Heading
