export default function ExpandIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16pt"
      height="16pt"
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
      className={
        `${open ? "rotate-45" : "rotate-0"} -translate-y-3 transform transition`
        // open
        //   ? "rotate-45 transition-transform hover:fill-pge-blue"
        //   : "rotate-0 transition-transform hover:fill-pge-blue"
      }
    >
      <path d="m226.8 651.6v-90c0-15.602 10.801-26.398 26.398-26.398h278.4l0.003906-278.4c0-13.199 10.801-27.602 27.602-27.602h88.801c16.801 0 27.602 14.398 27.602 27.602v278.4h278.4c15.602 0 26.398 10.801 26.398 26.398v90c0 15.602-10.801 27.602-26.398 27.602h-278.4v276c0 18-9.6016 27.602-27.602 27.602h-88.801c-18 0-27.602-9.6016-27.602-27.602v-276h-278.4c-16.801 0-26.398-12-26.398-27.598z" />
    </svg>
  );
}
