import { CustomSlider, CustomSwiper, Image, Title, Wrapper } from "./styledGallery";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import { Navigation, EffectCoverflow, EffectCube, Scrollbar, } from 'swiper/modules';

import ex from '../../../../common/Images/exx.jpg'

export const Gallery = () => {

    return (
        <Wrapper>
            <Title> Galeria Zdjęć</Title>
            <CustomSwiper<React.ComponentType<any>>
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={3}
                modules={[Navigation, Scrollbar, EffectCube, EffectCoverflow]}
                spaceBetween={100}
                navigation
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
            </CustomSwiper>
        </Wrapper>
    );
}
