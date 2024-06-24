export default function DashboardTemplate(props: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <main className="w-full overflow-hidden">
      <div className="grid w-full grid-cols-4 gap-2 desktop-up:grid-cols-5">
        <section className="col-span-1 min-h-screen bg-orange-500 desktop-up:col-span-1">
          {props.sidebar}
        </section>
        <section className="col-span-3 min-h-screen bg-purple-500 desktop-up:col-span-4">
          {props.children}
        </section>
      </div>
    </main>
  );
}
