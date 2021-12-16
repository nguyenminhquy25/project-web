import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Product from '../product/Product';

SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles({
  swiperNavigation: {
    display: 'flex',
    position: 'relative',

    '& .best-seller-swiper-button-prev, & .best-seller-swiper-button-next': {
      cursor: 'pointer',
      position: 'absolute',
    },

    '& .best-seller-swiper-button-prev': {
      left: '-50px',
    },

    '& .best-seller-swiper-button-next': {
      right: '-50px',
    },
  },
});

export default function BestSeller() {
  const bestSellers = [
    {
      productImageUrl: '/images/products/product-01.jpeg',
      productName: 'VINTAS THE NEW MILITARY - HIGH TOP',
      productBrand: 'CAPULET OLIVE',
      productPrice: '495.000 VND',
    },
    {
      productImageUrl: '/images/products/product-01.jpeg',
      productName: 'VINTAS THE NEW MILITARY - HIGH TOP',
      productBrand: 'CAPULET OLIVE',
      productPrice: '495.000 VND',
    },
    {
      productImageUrl: '/images/products/product-01.jpeg',
      productName: 'VINTAS THE NEW MILITARY - HIGH TOP',
      productBrand: 'CAPULET OLIVE',
      productPrice: '495.000 VND',
    },
    {
      productImageUrl: '/images/products/product-01.jpeg',
      productName: 'VINTAS THE NEW MILITARY - HIGH TOP',
      productBrand: 'CAPULET OLIVE',
      productPrice: '495.000 VND',
    },
    {
      productImageUrl: '/images/products/product-01.jpeg',
      productName: 'VINTAS THE NEW MILITARY - HIGH TOP',
      productBrand: 'CAPULET OLIVE',
      productPrice: '495.000 VND',
    },
    {
      productImageUrl: '/images/products/product-01.jpeg',
      productName: 'VINTAS THE NEW MILITARY - HIGH TOP',
      productBrand: 'CAPULET OLIVE',
      productPrice: '495.000 VND',
    },
    {
      productImageUrl: '/images/products/product-01.jpeg',
      productName: 'VINTAS THE NEW MILITARY - HIGH TOP',
      productBrand: 'CAPULET OLIVE',
      productPrice: '495.000 VND',
    },
    {
      productImageUrl: '/images/products/product-01.jpeg',
      productName: 'VINTAS THE NEW MILITARY - HIGH TOP',
      productBrand: 'CAPULET OLIVE',
      productPrice: '495.000 VND',
    },
    {
      productImageUrl: '/images/products/product-01.jpeg',
      productName: 'VINTAS THE NEW MILITARY - HIGH TOP',
      productBrand: 'CAPULET OLIVE',
      productPrice: '495.000 VND',
    },
  ];

  const classes = useStyles();

  return (
    <Box sx={{ paddingY: '50px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        BEST SELLER
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'absolute', width: '100%', top: '35%' }}>
          <Box className={classes.swiperNavigation}>
            <Box className="best-seller-swiper-button-prev">
              <KeyboardArrowLeftRoundedIcon
                sx={{
                  fontSize: '50px',
                  color: '#939393',
                }}
              />
            </Box>
            <Box className="best-seller-swiper-button-next">
              <KeyboardArrowRightRoundedIcon
                sx={{
                  fontSize: '50px',
                  color: '#939393',
                }}
              />
            </Box>
          </Box>
        </Box>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={3}
          loop
          loopFillGroupWithBlank
          style={{ padding: '20px 0' }}
          className={classes.bestSellerSwiper}
          navigation={{
            nextEl: '.best-seller-swiper-button-prev',
            prevEl: '.best-seller-swiper-button-next',
          }}
        >
          {bestSellers.map((bestSeller) => {
            return (
              <SwiperSlide>
                <Product
                  productImageUrl={bestSeller.productImageUrl}
                  productBrand={bestSeller.productBrand}
                  productPrice={bestSeller.productPrice}
                  productName={bestSeller.productName}
                  width="100%"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}
