import { BaseTemplate } from "@/templates/BaseTemplate";

export default function Layout(props: { children: React.ReactNode }) {
  return <BaseTemplate>{props.children}</BaseTemplate>;
}
