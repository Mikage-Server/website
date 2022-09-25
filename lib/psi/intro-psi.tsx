import { Headline2 } from '../../components/headline';

const IntroPsi = () => {
  return (
    <section className="mt-20">
      <Headline2
        label="超能力の紹介"
        id="intro-psi"
      />

      <div className="w-full h-[40rem] grid grid-cols-4 gap-4">
        <div className="w-full h-full bg-gray-200 rounded-xl">

        </div>

        <div className="w-full h-full bg-neutral-700 rounded-xl col-span-3">

        </div>
      </div>
    </section>
  );
};

export default IntroPsi;
