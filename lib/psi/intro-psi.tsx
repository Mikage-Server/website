'use client';

import { useCallback, useState } from 'react';
import type { ReactNode } from 'react';
import { SiCodemagic } from 'react-icons/si';
import { TbQuestionMark } from 'react-icons/tb';
import { Headline2 } from '../../components/headline';

const psis = [
  {
    name: '瞬間移動',
    enName: 'Teleport',
    description: '瞬間移動、その名の通り空間を移動する。3次元空間を更に複雑な階層に変換し事物の位置を変更するため、度々既存の事物に割り込んで移動することがある。',
    wiki: 'https://wiki.mikage.click/d/%bd%d6%b4%d6%b0%dc%c6%b0%20%28Teleport%29',
    icon: <SiCodemagic />
  },
  {
    name: '重力操作',
    enName: 'Gravity',
    description: '重力操作、触れた存在や自身の重力場を操作を行い重力反転や増量が可能になる能力。ただし能力の発動条件は触れる必要があるため弓矢などの投げる物には能力が発動しない。',
    wiki: 'https://wiki.mikage.click/d/%bd%c5%ce%cf%c1%e0%ba%ee%20%28Gravity%29',
    icon: <SiCodemagic />
  }
];

interface ButtonProps {
  name: string;
  enName: string;
  icon: ReactNode;
  index: number;
  active: boolean;
  onClick: (index: number) => void;
};

const IntroPsi = () => {
  const [selecting, setSelecting] = useState<number>(0);

  const handleChange = useCallback((index: number) => {
    setSelecting(index);
  }, []);

  return (
    <section className="mt-20">
      <Headline2
        label="超能力の紹介"
        id="intro-psi"
      />

      <div className="md:px-12 w-full md:h-[40rem] block md:grid md:grid-cols-4 md:gap-4">
        <ul className="p-2 md:p-0 w-full h-full bg-purple-100 rounded-xl grid grid-cols-2 gap-1 md:gap-4 md:block">
          {psis.map((item, index) => (
            <Button
              name={item.name}
              enName={item.enName}
              icon={item.icon}
              index={index}
              active={index === selecting}
              onClick={handleChange}
              key={item.name}
            />
          ))}
          <ComingSoon />
          <ComingSoon />
          <ComingSoon />
          <ComingSoon />
        </ul>

        <Intro selecting={selecting} />
      </div>
    </section>
  );
};

const Button = ({ name, enName, icon, index, active, onClick }: ButtonProps) => {
  return (
    <li className="p-3 w-full h-24">
      <button
        className={
          active
            ? 'w-full h-full text-white bg-purple-600 outline outline-4 outline-offset-4 outline-purple-400 flex flex-row rounded-xl transition-all ease-in duration-100 relative'
            : 'w-full h-full text-white bg-purple-600 outline outline-4 outline-offset-4 outline-none flex flex-row rounded-xl transition-all ease-in duration-100 relative'
        }
        onClick={() => { onClick(index); }}
      >
        <div className="w-32 h-full text-4xl text-purple-400 flex flex-col justify-center items-center absolute md:static top-0 -left-10 md:inset-auto">
          {icon}
        </div>
        <div className="w-full h-full text-left font-bold flex flex-col justify-center absolute md:static left-7 md:inset-auto">
          <h3 className="text-xl tracking-wide">
            {name}
          </h3>
          <span className="text-base tracking-wide">
            {enName}
          </span>
        </div>
      </button>
    </li>
  );
};

const ComingSoon = () => {
  return (
    <li className="p-3 w-full h-24">
      <button className="w-full h-full text-gray-700 bg-gray-300 flex flex-row rounded-xl relative">
        <div className="w-32 h-full text-4xl text-gray-500 absolute md:static flex flex-col justify-center items-center top-0 -left-12 md:inset-auto">
          <TbQuestionMark />
        </div>
        <h3 className="w-full h-full text-left font-bold flex flex-col justify-center text-lg xl:text-xl tracking-wide absolute md:static left-8 md:inset-auto">
          Coming soon
        </h3>
      </button>
    </li>
  );
};

const Intro = ({ selecting }: { selecting: number }) => {
  const psi = psis[selecting];

  return (
    <div className="mt-5 md:mt-0 w-full md:h-full bg-gray-100 md:rounded-xl col-span-3 overflow-hidden">
      <div className="w-full h-96 md:h-[60%] bg-neutral-700" />

      <div className="p-6 w-full h-[40%] overflow-y-auto">
        <h3 className="text-3xl flex flex-row">
          <div className="text-purple-300">
            {psi.icon}
          </div>
          <div className="pl-5 text-purple-800 font-bold">
            {psi.name}
            <span className="pl-10 text-gray-500 font-medium">
              {psi.enName}
            </span>
          </div>
        </h3>

        <div className="my-3 w-full h-2 bg-purple-500 rounded-full" />

        <p>
          {psi.description}
        </p>
        <p className="mt-3 text-right">
          <a
            href={psi.wiki}
            className="px-5 py-1 text-purple-600 bg-purple-200 font-medium rounded-lg"
          >
            詳しくはWikiで確認しよう
          </a>
        </p>
      </div>
    </div>
  );
};

export default IntroPsi;
