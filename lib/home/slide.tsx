import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Linking from '../../components/linking';

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
            <Linking href={content.href}>
              <img
                src={content.image}
                alt={content.title}
                className="h-full object-cover"
              />
            </Linking>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slide;
