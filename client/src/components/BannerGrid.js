import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link';
// @ts-ignore
import takimBanner from '../../public/banner/takim.jpg';
// @ts-ignore
import tulumBanner from '../../public/banner/tulum.jpg';
// @ts-ignore
import tunikBanner from '../../public/banner/tunik.jpg';
// @ts-ignore
import buyukBedenBanner from '../../public/banner/buyuk-beden.jpeg';
// @ts-ignore
import tesetturElbise from '../../public/banner/tesettur-elbise-1920.jpeg';
// @ts-ignore
import yeniAbiye from '../../public/banner/yeni-sezon-abiye.jpeg';
// @ts-ignore
import yeniUrunler from '../../public/banner/yeni-urunler.jpeg';

const banners = [
  { name: 'tesetturElbise', src: tesetturElbise, isWide: true },
  { name: 'takimBanner', src: takimBanner, isWide: false },
  { name: 'tulumBanner', src: tulumBanner, isWide: false },
  { name: 'yeniUrunler', src: yeniUrunler, isWide: true },
  { name: 'tunikBanner', src: tunikBanner, isWide: false },
  { name: 'buyukBedenBanner', src: buyukBedenBanner, isWide: false },
  { name: 'yeniAbiye', src: yeniAbiye, isWide: true },
];

const BannerGrid = () => {
  return (
    <Container maxWidth='xl'>
      <Grid my={2} container spacing={2} justifyContent='space-between'>
        {banners.map((banner) => (
          <Link key={banner.name} href='/' passHref>
            <Grid
              sx={{ cursor: 'pointer' }}
              item
              xs={12}
              md={banner.isWide ? 12 : 6}
            >
              <Image src={banner.src} layout='responsive' objectFit='cover' />
            </Grid>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default BannerGrid;
