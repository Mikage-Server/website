'use client';

import { useEffect, useState } from 'react';
import { MdDone, MdOutlineReport } from 'react-icons/md';
import type { OverallProps } from './types';

const Overall = ({ okJE, okBE, okVote }: OverallProps) => {
  const [allOk, setAllOk] = useState<boolean>(true);

  useEffect(() => {
    setAllOk(okJE && okBE && okVote);
  }, [okJE, okBE, okVote]);

  return (
    <section className={
      allOk
        ? 'px-5 md:px-10 py-5 text-white text-xl font-medium bg-emerald-500 rounded-xl flex flex-row'
        : 'px-5 md:px-10 py-5 text-white text-xl font-medium bg-orange-500 rounded-xl flex flex-row'
    }>
      <div className="text-5xl mr-5">
        {allOk ? <MdDone /> : <MdOutlineReport />}
      </div>
      <div className="flex flex-col justify-center">
        {allOk ? '全て正常に稼働しています' : '一部のサーバーが正常に稼働していません'}
      </div>
    </section>
  );
};

export default Overall;
