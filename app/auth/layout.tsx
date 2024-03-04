export default function Layout({ children }: { children: React.ReactNode }) {
  const images = [
    "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png",
    "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png",
    "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png",
    "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png",
    "https://res.cloudinary.com/zapeture/image/upload/v1709504118/affordibit/development/illustration_ndlg5h.png"
  ]
  return (
    <section id="auth-page" className="w-full max-w-1440px">
      <div className="w-full grid grid-cols-2 grid-rows-1">
        <div className="bg-primary min-h-[100vh]">
          {/*  */}
          <div className="border border-red-700 mx-10"></div>
          {/*  */}
        </div>
        <div className="bg-white auth-card min-h-[100vh]">{children}</div>
      </div>
    </section>
  )
}
