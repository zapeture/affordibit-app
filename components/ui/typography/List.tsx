export default function List({ items }: { items: string[] }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {items.map((item) => {
        const id: string = self.crypto.randomUUID()
        return <li key={id}>{item}</li>
      })}
    </ul>
  )
}
