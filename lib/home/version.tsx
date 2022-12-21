import Image from 'next/image';

const Version = () => {
  return (
    <section className="col-span-5">
      <Image
        src="/home/version.webp"
        alt="バージョン"
        width={1280}
        height={720}
        className="w-full rounded-xl"
      />

      <div className="mt-2 text-gray-500 text-center font-medium">
        α版として公開中です！
      </div>
    </section>
  );
};

export default Version;
