import Encoding from 'encoding-japanese';
import { redirect } from 'next/navigation';

export const runtime = 'edge';

export async function GET(
  _: Request,
  { params }: { params: Promise<{ title: string }> },
) {
  // タイトルを取得し、EUC-JPに変換
  const title = (await params).title;
  const escaped = encodeEucJP(title);

  console.log('received:', title);
  console.log('received encoding:', Encoding.detect(title));
  console.log(
    'redirect to:',
    `https://wiki.mikage.click/d/${escaped}`,
  );

  redirect(`https://wiki.mikage.click/d/${escaped}`);
}

function encodeEucJP(str: string) {
  const arr = Encoding.stringToCode(str);

  const actual = Encoding.convert(
    arr,
    'EUCJP',
    Encoding.detect(str) as Encoding.Encoding,
  );

  return Encoding.urlEncode(actual);
}
