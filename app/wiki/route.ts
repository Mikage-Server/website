import { redirect } from 'next/navigation';

export const GET = async (request: Request) => {
  redirect('https://wiki.mikage.click/');
};
