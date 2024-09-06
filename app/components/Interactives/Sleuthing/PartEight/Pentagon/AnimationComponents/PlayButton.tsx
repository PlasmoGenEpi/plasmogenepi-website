export default function PlayButton() {
  return null;
  return (
    <button className="absolute top-0 w-1/5 bg-white hover:opacity-100 focus:opacity-100 hover:[&>*]:[filter:drop-shadow(0_.5px_.5px_black)] focus:[&>*]:[filter:drop-shadow(0_.5px_.5px_black)]">
      <svg
        className="fill-[orange]"
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m50 2.3008c-26.301 0-47.699 21.398-47.699 47.699s21.398 47.699 47.699 47.699 47.699-21.398 47.699-47.699-21.398-47.699-47.699-47.699zm0 86.898c-21.602 0-39.199-17.602-39.199-39.199 0-21.602 17.598-39.199 39.199-39.199s39.199 17.598 39.199 39.199-17.598 39.199-39.199 39.199zm-8.6992-58.098c-1.1016-0.60156-2.5 0.19922-2.5 1.3984l-0.10156 34.898c0 1.3008 1.3984 2.1016 2.5 1.5l30.301-17.398c1.1016-0.60156 1.1016-2.1992 0-2.8984z" />
      </svg>
    </button>
  );
}
