import Menu from "@/layouts/components/Menu";
import Footer from "@/layouts/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const GuestLayout = ({ children }: LayoutProps) => {
  return (
    <main className={`flex min-h-screen flex-col text-center relative`}>
      {/* <Menu /> */}
      {children}
      <Footer />
    </main>
  );
};

export default GuestLayout;
