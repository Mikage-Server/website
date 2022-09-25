const Banner = () => {
  return (
    <section className="w-[calc(100%+6rem)] h-[20rem] bg-neutral-800 relative -top-[3rem] -left-[3rem] overflow-hidden">
      <img
        src="/psi/banner.webp"
        alt="バナー"
        className="w-full object-cover blur-sm"
      />

      <div className="pl-20 w-full h-full flex flex-col justify-center absolute inset-0">
        <h1 className="text-white text-5xl font-bold tracking-wider">
          超能力
        </h1>
      </div>
    </section>
  );
};

export default Banner;
