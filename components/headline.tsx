import { AiFillStar } from 'react-icons/ai';

interface HeadlineProps {
  label: string;
  id?: string;
}

export const Headline1 = ({ label, id }: HeadlineProps) => {
  return (
    <h1
      className="mt-5 mb-8 w-[calc(100%+6rem)] bg-yellow-500 text-4xl relative -left-[3rem]"
      id={id}
    >
      <span className="ml-20 px-5 font-bold bg-white">
        {label}
      </span>
    </h1>
  );
};

export const Headline2 = ({ label, id }: HeadlineProps) => {
  return (
    <h2
      className="my-5 w-full text-4xl flex flex-row justify-center"
      id={id}
    >
      <Headline2Star />
      <div className="w-2 h-10 bg-yellow-500" />
      <div className="mx-10 font-bold">
        {label}
      </div>
      <div className="w-2 h-10 bg-yellow-500" />
      <Headline2Star />
    </h2>
  );
};

const Headline2Star = () => {
  return (
    <div className="px-5 w-28 text-gray-200 flex flex-row justify-around">
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </div>
  );
};
