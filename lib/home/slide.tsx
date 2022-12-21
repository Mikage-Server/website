'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

const contents = [
  {
    title: '御景サーバー',
    href: '/#',
    image: '/home/slides/mikage.webp'
  },
  {
    title: '本気になったら？',
    href: '/#',
    image: '/home/slides/honki.webp'
  },
  {
    title: 'なんで今さら',
    href: '/#',
    image: '/home/slides/imasara.webp'
  }
];

const Slide = () => {
  return (
    <section className="w-full h-[calc(100vh-8rem)] bg-neutral-800 absolute top-0 left-0">
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
            <Link href={content.href}>
              <Image
                src={content.image}
                alt={content.title}
                fill={true}
                className="h-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slide;
