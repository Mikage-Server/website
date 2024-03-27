'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './slide.css';

const contents = [
  {
    title: '御景サーバー',
    href: '/#',
    imageDir: '/home/slides/mikage/',
  },
];

const Slide = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  const [isPc, setIsPc] = useState<boolean | null>(false);

  useEffect(() => {
    setIsPc(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  return (
    <section className="w-full h-[calc(100svh-8rem)] bg-neutral-800">
      {isPc !== null && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {contents.map((content) => (
            <SwiperSlide key={content.title}>
              <Link
                href={content.href}
                className="w-full h-full"
              >
                <img
                  src={
                    content.imageDir +
                    (isPc ? 'pc.webp' : 'sp.webp')
                  }
                  alt={content.title}
                  className="h-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Slide;
