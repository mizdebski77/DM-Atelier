import { CustomSlider, CustomSwiper, Image, Title, Wrapper } from "./styledGallery";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import { Navigation, EffectCoverflow, Pagination, EffectCube, Scrollbar, A11y } from 'swiper/modules';

import ex from '../../../../common/Images/exx.jpg'

export const Gallery = () => {


  return (
    <Wrapper>
      <Title> Galeria Zdjęć</Title>
      <CustomSwiper
        effect={'cube'}
        modules={[Navigation, Pagination, Scrollbar, EffectCube]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
      >
        <CustomSlider><Image src={ex} /></CustomSlider>
        <CustomSlider><Image src={ex} /></CustomSlider>
        <CustomSlider><Image src={ex} /></CustomSlider>
        <CustomSlider><Image src={ex} /></CustomSlider>
        <CustomSlider><Image src={ex} /></CustomSlider>
      </CustomSwiper>
    </Wrapper>
  );
}
