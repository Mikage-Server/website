interface Props {
  label: string;
  bannerImage: string;
}

const Banner = ({ label, bannerImage }: Props) => {
  return (
    <section className="mb-10 md:mb-20 w-full h-[10rem] md:h-[20rem] bg-neutral-800 relative overflow-hidden">
      <img
        src={bannerImage}
        alt="バナー"
        className="w-full object-cover blur-sm"
      />

      <div className="pl-10 md:pl-20 w-full h-full flex flex-col justify-center absolute inset-0">
        <h1 className="mt-16 md:mt-0 text-white text-3xl md:text-5xl font-bold tracking-wider">
          {label}
        </h1>
      </div>
    </section>
  );
};

export default Banner;
