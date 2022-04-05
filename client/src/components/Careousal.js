import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
// @ts-ignore
import Banner1 from '../../public/banner/banner1.jpeg';
// @ts-ignore
import Banner2 from '../../public/banner/banner2.jpeg';
// @ts-ignore
import paymentBanner from '../../public/banner/payment-banner.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const banners = [
  { name: 'Banner1', imgSrc: Banner1, imageAlt: 'banner1' },
  { name: 'Banner2', imgSrc: Banner2, imageAlt: 'banner2' },
];

const Careousal = () => {
  return (
    <>
      <Carousel
        dynamicHeight
        infiniteLoop
        swipeable
        showStatus={false}
        showThumbs={false}
      >
        {banners.map((banner) => (
          <Image
            key={banner.name}
            src={banner.imgSrc}
            alt={banner.imageAlt}
            loading='eager'
            layout='responsive'
          />
        ))}
      </Carousel>
      <Image src={paymentBanner} layout='responsive' />
    </>
  );
};

export default Careousal;
