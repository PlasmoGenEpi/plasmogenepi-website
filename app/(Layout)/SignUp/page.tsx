import NavBar2 from "@/app/components/NavBar2";

export default function SignUp() {
  return (
    <div>
      <NavBar2 currentNav="SignUp" />
      <div className="pb-20 pt-4">
        <div className="flex">
          <iframe
            className="mx-auto"
            src="https://docs.google.com/forms/d/e/1FAIpQLScmNSGWXaa7Y38zU8Kl0aBBvG33i6UD_oYSRhuOY0aH_Aqx5Q/viewform?embedded=true"
            width="640"
            height="1200"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
