import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
