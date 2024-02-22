import { ReactNode } from "react";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="min-h-screen pb-40">{children}</div>
      <Footer />
    </div>
  );
}
