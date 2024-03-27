import Encoding from 'encoding-japanese';
import { redirect } from 'next/navigation';

export const runtime = 'edge';

export const GET = async (
  request: Request,
  {
    params,
  }: {
    params: { title: string };
  },
) => {
  // タイトルを取得し、EUC-JPに変換
  const title = params.title;
  const escaped = encodeEucJP(title);

  console.log('received:', title);
  console.log('received encoding:', Encoding.detect(title));
  console.log(
    'redirect to:',
    `https://wiki.mikage.click/d/${escaped}`,
  );

  redirect(`https://wiki.mikage.click/d/${escaped}`);
};

function encodeEucJP(str: string) {
  const arr = Encoding.stringToCode(str);

  const actual = Encoding.convert(
    arr,
    'EUCJP',
    Encoding.detect(str) as Encoding.Encoding,
  );

  return Encoding.urlEncode(actual);
}
