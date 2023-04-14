import { redirect } from 'next/navigation';
import Encoding from 'encoding-japanese';

export const GET = async (request: Request, { params }: {
  params: { title: string }
}) => {

  // タイトルを取得し、EUC-JPに変換
  const title = params.title;
  const escaped = decodeUTF8ToEUCJP(title);

  redirect(`https://wiki.mikage.click/d/${escaped}`);
};

const decodeUTF8ToEUCJP = (str: string) => {
  const arr = Encoding.stringToCode(str);
  const actual = Encoding.convert(arr, 'EUCJP', 'UNICODE');
  return Encoding.codeToString(actual);
};
