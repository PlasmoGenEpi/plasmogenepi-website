import Footer from "./components/Footer/Footer";
import LandingContent from "./components/Home/LandingContent";
import LandingImage from "./components/Home/LandingImage";
import NavBar2 from "./components/NavBar2/NavBar2";
import NavBar3 from "./components/NavBar3/NavBar3";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen overflow-x-hidden   bg-zinc-50  pb-40 dark:text-[#ececec]">
        {/* <NavBar2 /> */}
        <NavBar3 />
        {/* <div className="overflow-hidden"> */}
        <LandingImage />
        <LandingContent />
      </div>
      <Footer />
    </div>
  );
}
