import Image from 'next/image';
// @ts-ignore
import banner1 from '../../public/banner/banner1.jpeg';
// @ts-ignore
import banner2 from '../../public/banner/banner2.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Careousal = () => {
  return (
    <Carousel dynamicHeight infiniteLoop swipeable showStatus={false}>
      <Image src={banner2} layout='responsive' />
      <Image src={banner1} layout='responsive' />
    </Carousel>
  );
};

export default Careousal;
