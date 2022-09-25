interface HeadlineProps {
  label: string;
  id?: string;
}

export const Headline1 = ({ label, id }: HeadlineProps) => {
  return (
    <h1
      className="my-5 w-[calc(100%+6rem)] bg-yellow-500 text-4xl relative -left-[3rem]"
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
      <div className="w-2 h-10 bg-yellow-500 rotate-30" />
      <div className="mx-10 font-bold">
        {label}
      </div>
      <div className="w-2 h-10 bg-yellow-500 -rotate-30" />
    </h2>
  );
};
