import DashboardSidebar from "@/templates/dashboard/DashboardSidebar";
import DashboardTemplate from "@/templates/dashboard/DashboardTemplate";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <DashboardTemplate sidebar={<DashboardSidebar />}>
      {props.children}
    </DashboardTemplate>
  );
}
