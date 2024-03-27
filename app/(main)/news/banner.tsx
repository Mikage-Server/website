interface Props {
  label: string;
  bannerImage: string;
  published: string;
  author: string;
}

export default function Banner({
  label,
  bannerImage,
  published,
  author,
}: Props) {
  return (
    <section className="mb-10 md:mb-20 w-full h-[20rem] bg-neutral-800 justify-end relative overflow-hidden">
      <img
        src={bannerImage}
        alt="バナー背景"
        className="w-full object-cover blur-xl"
      />

      <img
        src={bannerImage}
        alt="バナー"
        className="h-full aspect-none md:aspect-video object-cover md:object-none absolute top-0 right-0"
      />

      <div className="pl-10 md:pl-20 w-full h-full flex flex-col justify-center absolute inset-0">
        <h1 className="mt-16 md:mt-0 text-white text-3xl md:text-5xl font-bold tracking-wider">
          {label}
        </h1>
        <time className="mt-5 text-white text-xl">
          {published}・{author}
        </time>
      </div>
    </section>
  );
}
