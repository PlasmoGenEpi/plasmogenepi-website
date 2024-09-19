import Image from "next/image";
import FullscreenImageWrapper from "../Images/FullscreenImageWrapper";
import Carousel from "../Images/Carousel";
import CarouselThumbnails from "../Images/CarouselThumbnails";

export default function CoursePreview() {
  return (
    <div>
      <div className="mx-auto grid max-w-6xl gap-8 border-y-8 border-cyan-800 px-4 py-16 text-lg md:px-8 md:text-base md:[grid-template-columns:300px_auto] lg:px-16">
        <div>
          <h2 className="mb-8 font-poppins text-2xl font-bold">
            What you will learn:
          </h2>
          <ol className="flex min-w-72 list-decimal flex-col gap-3 text-pretty px-4 font-roboto">
            <li>
              Summarize the basic concepts and main use cases of malaria genetic
              epidemiology.
            </li>
            <li>
              Choose the appropriate methods to generate genetic data for
              different use cases and settings.
            </li>
            <li>
              Choose the appropriate metrics derived from malaria genetic data
              to answer key questions.
            </li>
            <li>
              Design genetic surveillance studies to answer key questions about
              the epidemiology of malaria.
            </li>
            <li>
              Interpret results derived from genetic data to make sound public
              health recommendations.
            </li>
          </ol>
        </div>
        <div className="grid place-items-center bg-blend-multiply">
          {/* <FullscreenImageWrapper path="/assets/genotyping-example2.png">
            <Image
              alt="Sleuthing exercise example"
              src={"/assets/genotyping-example2.png"}
              height={400}
              width={600}
              className="shadow-md"
            />
          </FullscreenImageWrapper> */}
          <Carousel
            images={[
              {
                alt: "",
                path: "/assets/OnlineCourse/Slide4.png",
              },
              {
                alt: "",
                path: "/assets/OnlineCourse/Slide3.png",
              },
              {
                alt: "",
                path: "/assets/OnlineCourse/Slide5.png",
              },
              {
                alt: "",
                path: "/assets/OnlineCourse/Slide6.png",
              },
              {
                alt: "",
                path: "/assets/OnlineCourse/Slide7.png",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
