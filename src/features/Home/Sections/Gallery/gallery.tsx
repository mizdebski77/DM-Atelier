import { CustomSlider, CustomSwiper, Image, Title, Wrapper } from "./styledGallery";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, EffectCoverflow, Scrollbar, } from 'swiper/modules';

import ex from '../../../../common/Images/exx.jpg'
import ex2 from '../../../../common/Images/ex2.jpg'

export const Gallery = () => {

    return (
        <Wrapper>
            <Title> Galeria Zdjęć</Title>

            <CustomSwiper<React.ComponentType<any>>

                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                }}

                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={1}
                modules={[Navigation, Scrollbar, EffectCoverflow]}
                spaceBetween={100}
                loop={true}
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
                <CustomSlider><Image src={ex2} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex2} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex2} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex2} /></CustomSlider>
                <CustomSlider><Image src={ex} /></CustomSlider>
                <CustomSlider><Image src={ex2} /></CustomSlider>
            </CustomSwiper>
        </Wrapper>
    );
}
