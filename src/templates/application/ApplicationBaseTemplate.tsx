import Navigation from "@/templates/application/Navigation";
import Pages from "@/templates/application/Pages";

export default function ApplicationBaseTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen">
      <Navigation />
      <Pages content={children} />
    </div>
  );
}
