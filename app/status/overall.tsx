'use client';

import { useEffect, useState } from 'react';
import { MdDone, MdOutlineReport } from 'react-icons/md';
import type { OverallProps } from './types';

const Overall = ({ okJE, okBE, okVote }: OverallProps) => {
  const total = 3;
  const [status, setStatus] = useState<string>('normal');

  useEffect(() => {
    const okNum = (okJE ? 1 : 0) + (okBE ? 1 : 0) + (okVote ? 1 : 0);

    if (okNum === total) {
      setStatus('normal');
    } else if (okNum > 0) {
      setStatus('warning');
    } else {
      setStatus('closed');
    }
  }, [okJE, okBE, okVote]);

  return (
    <section className={
      status === 'normal'
        ? 'px-5 md:px-10 py-5 text-white text-xl font-medium bg-emerald-500 rounded-xl flex flex-row'
        : 'px-5 md:px-10 py-5 text-white text-xl font-medium bg-orange-500 rounded-xl flex flex-row'
    }>
      <div className="text-5xl mr-5">
        {status === 'normal' ? <MdDone /> : <MdOutlineReport />}
      </div>
      <div className="flex flex-col justify-center">
        {status === 'normal' && '全て正常に稼働しています'}
        {status === 'warning' && '一部のサーバーが正常に稼働していません'}
        {status === 'closed' && '全てのサーバーが正常に稼働していません'}
      </div>
    </section>
  );
};

export default Overall;
