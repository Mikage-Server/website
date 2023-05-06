import { loadDefaultJapaneseParser } from 'budoux';
const parser = loadDefaultJapaneseParser();

export const BudouX = ({ text }: { text: string }) => {
  const parsed = parser.parse(text);

  return (
    <>
      {parsed.map((s) => (
        <span
          className="inline-block whitespace-nowrap"
          key={s}
        >
          {s}
        </span>
      ))}
    </>
  );
};
