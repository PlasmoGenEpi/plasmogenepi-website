import Footer from "./components/Footer/Footer";
import LandingContent from "./components/Home/LandingContent";
import LandingImage from "./components/Home/LandingImage";
import NavBar2 from "./components/NavBar2/NavBar2";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen overflow-hidden   bg-zinc-50  pb-40 ">
        <NavBar2 />
        {/* <div className="overflow-hidden"> */}
        <LandingImage />
        <LandingContent />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
