export default function TextHorizontalRule({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <hr className="flex-grow" />
      <span className="mx-3 text-[12px] text-[#64748B]">{text}</span>
      <hr className="flex-grow" />
    </div>
  )
}
