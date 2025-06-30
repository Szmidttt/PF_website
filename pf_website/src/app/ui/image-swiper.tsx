'use client'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const images = [
    "/gallery/img5.jpeg",
    "/gallery/img5.jpeg",
    "/gallery/img5.jpeg"
]
const content = [
    "Wakacje nad morzem - zarezerwuj już dziś",
    "Atrakcyjne otoczenie - zobacz okolicę",
    "Gotowy na wyprawę - dokonaj rezerwacji"
]
const links = [
    "/rooms",
    "/gallery",
    "/contact"
]
export default function ImageSwiper() {
    return (
        <div className="flex justify-center items-center p-2">
            <div className='w-full'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 3000 }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {images.map((path, idx) => (
                        <SwiperSlide key={idx} className='relative'>
                            <Image
                                src={path}
                                alt={`slide_img_${idx + 1}`}
                                width={1920}
                                height={1080}
                            />
                            <div className="p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-gray-500/30 backdrop-blur-sm">
                                <span className='font-bold text-xl p-2 text-white'>{content[idx]}</span>
                                <Link href={links[idx]} className='bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg'>Więcej</Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}