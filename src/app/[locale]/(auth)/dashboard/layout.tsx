import ApplicationBaseTemplate from "@/templates/application/ApplicationBaseTemplate";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApplicationBaseTemplate>{children}</ApplicationBaseTemplate>;
}
