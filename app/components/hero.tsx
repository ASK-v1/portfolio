export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 text-neutral-950">
      <span className="flex flex-row gap-2 items-center shadow-lg shadow-teal-500/25 bg-teal-100 text-teal-500 px-2.5 text-sm text-center py-1 rounded-full">
        <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full" />
        <span>Available for work</span>
      </span>

      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-5xl max-w-[640px] leading-none tracking-tight sm:text-6xl text-center font-semibold flex flex-col items-center">
          Hey There, I am Ahmet, a Front End Developer.
        </h1>

        <p className="max-w-xl w-full text-center text-lg text-neutral-500">
          Experienced Front End Developer with a focus on{" "}
          <span className="relative font-semibold text-teal-500 inline-block stroke-current">
            React
            <svg
              className="absolute -bottom-0.5 w-full max-h-1.5"
              viewBox="0 0 55 5"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                stroke-width="3.2"
              ></path>
            </svg>
          </span>{" "}
          and{" "}
          <span className="relative font-semibold text-teal-500 inline-block stroke-current">
            JavaScript
            <svg
              className="absolute -bottom-0.5 w-full max-h-1.5"
              viewBox="0 0 55 5"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                stroke-width="2.2"
              ></path>
            </svg>
          </span>
          , who thrives on building engaging and effective web applications.
        </p>
      </div>

      <button className="py-3 hover:bg-neutral-800 font-semibold text-sm duration-200 w-40 text-white bg-neutral-950 rounded-full">
        Let&apos;s Talk
      </button>
    </div>
  );
}
