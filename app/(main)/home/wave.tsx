export default function Wave({
  className,
}: { className: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fillOpacity="1"
        d="M0,32L0,160L160,160L160,256L320,256L320,192L480,192L480,288L640,288L640,64L800,64L800,64L960,64L960,160L1120,160L1120,160L1280,160L1280,256L1440,256L1440,0L1280,0L1280,0L1120,0L1120,0L960,0L960,0L800,0L800,0L640,0L640,0L480,0L480,0L320,0L320,0L160,0L160,0L0,0L0,0Z"
      ></path>
    </svg>
  );
}
