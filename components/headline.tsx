import { AiFillStar } from 'react-icons/ai';

interface HeadlineProps {
  label: string;
  id?: string;
}

export const Headline1 = ({ label, id }: HeadlineProps) => {
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
};

export const Headline2 = ({ label, id }: HeadlineProps) => {
  return (
    <h2
      className="my-5 w-full text-2xl md:text-4xl flex flex-row justify-center"
      id={id}
    >
      <Headline2Star className="pr-5" />
      <div className="w-2 h-7 md:h-10  bg-yellow-500" />
      <div className="mx-5 md:mx-10 font-bold">
        {label}
      </div>
      <div className="w-2 h-7 md:h-10 bg-yellow-500" />
      <Headline2Star className="pl-5" />
    </h2>
  );
};

const Headline2Star = ({ className }: { className: string }) => {
  return (
    <div className={`${className} w-10 md:w-28 text-gray-200 text-2xl flex flex-row justify-around`}>
      <CenterStar />
      <CenterStar className="hidden md:flex" />
      <CenterStar className="hidden md:flex" />
    </div>
  );
};

const CenterStar = ({ className }: { className?: string }) => {
  return (
    <div className={
      className !== null
        ? `flex flex-col justify-center ${className}`
        : 'flex flex-col justify-center'
    }>
      <AiFillStar />
    </div>
  );
};
