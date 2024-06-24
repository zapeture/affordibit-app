import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export default function DashboardSidebar() {
  return (
    <section className="flex min-h-screen w-full flex-col justify-between bg-white">
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {/* Body Start */}
      <Body />
      {/* Body End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </section>
  );
}
