import React, { HTMLAttributes } from "react"

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  items: string[]
}

const List: React.FC<ListProps> = ({ items, ...props }) => {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List
