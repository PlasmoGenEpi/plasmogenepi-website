import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="min-h-screen">
        <NavBar />
        <div className="mx-auto max-w-6xl">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
