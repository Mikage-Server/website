import { AiFillStar } from 'react-icons/ai';

interface HeadlineProps {
  label: string;
  id?: string;
}

interface HeadlinePropsWithIndex {
  label: string;
  index: number;
  id?: string;
}

export function Headline1({ label, id }: HeadlineProps) {
  return (
    <h1
      className="mt-5 mb-8 w-full bg-gray-300 text-2xl md:text-4xl"
      id={id}
    >
      <span className="ml-5 md:ml-20 px-5 py-1 font-bold bg-white">
        {label}
      </span>
    </h1>
  );
}

export function Headline2({ label, id }: HeadlineProps) {
  return (
    <h2
      className="my-5 w-full text-2xl md:text-4xl flex flex-row justify-center overflow-hidden"
      id={id}
    >
      <Headline2Star className="pr-5" />
      <div className="w-2 h-7 md:h-10  bg-yellow-500" />
      <div className="mx-5 md:mx-10 font-bold">{label}</div>
      <div className="w-2 h-7 md:h-10 bg-yellow-500" />
      <Headline2Star className="pl-5" />
    </h2>
  );
}

function Headline2Star({
  className,
}: { className: string }) {
  return (
    <div
      className={`${className} w-10 md:w-28 text-gray-200 text-2xl flex flex-row justify-around`}
    >
      <CenterStar />
      <CenterStar className="hidden md:flex" />
      <CenterStar className="hidden md:flex" />
    </div>
  );
}

function CenterStar({ className }: { className?: string }) {
  return (
    <div
      className={
        className !== null
          ? `flex flex-col justify-center ${className}`
          : 'flex flex-col justify-center'
      }
    >
      <AiFillStar />
    </div>
  );
}

export function Headline3WithIndex({
  label,
  index,
  id,
}: HeadlinePropsWithIndex) {
  return (
    <h3
      className="my-5 w-full text-lg md:text-xl flex flex-row justify-left"
      id={id}
    >
      <div className="h-12 border-b-4 border-blue-900 flex flex-row">
        <div className="px-3 h-full text-white text-center text-3xl font-bold bg-blue-900 rounded-t-xl flex flex-col justify-end">
          {index}
        </div>
        <div className="pl-8 pr-3 flex flex-col justify-end">
          {label}
        </div>
      </div>
    </h3>
  );
}
