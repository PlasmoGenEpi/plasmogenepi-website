import Link from "next/link";

export default function OnlineCourseNav({ active }: { active: boolean }) {
  return (
    <Link
      className={
        active
          ? "place-self-end border-b-2 border-[rgba(12,25,44)] py-2 font-sans font-bold transition-all"
          : "text-black place-self-end border-b-2 border-transparent py-2 font-sans font-bold text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
      }
      href="/OnlineCourse"
    >
      Online Course
    </Link>
  );
}
