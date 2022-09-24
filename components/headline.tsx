export const Headline1 = ({ label }: { label: string }) => {
  return (
    <h1 className="my-5 w-[calc(100%+6rem)] bg-yellow-500 text-4xl relative -left-[3rem]">
      <span className="ml-20 px-5 font-bold bg-white">
        {label}
      </span>
    </h1>
  );
};
