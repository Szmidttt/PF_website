import HeroSection from "./ui/hero";
import ReservationLink from "./ui/reservation-link";
import ImageSwiper from "./ui/image-swiper";
import FixedImage from "./ui/fixed-image";
export default function Home() {
  return (
    <div className="">
      
      <div>
        {/* <HeroSection/> */}
        </div>
        <ImageSwiper/>
        <FixedImage path="/gallery/img5.jpeg" header="Pokoje" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga exercitationem alias unde dolores natus suscipit!" blurPos="w-0" link="/rooms"/>
        <FixedImage path="/gallery/img3.jpeg" header="IDK" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga exercitationem alias unde dolores natus suscipit!" blurPos="w-2/3" link="/rooms"/>
        <FixedImage path="/gallery/img2.jpeg" header="O Nas" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga exercitationem alias unde dolores natus suscipit!" blurPos="w-0" link="/rooms"/>
        <FixedImage path="/gallery/img5.jpeg" header="Pokoje" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga exercitationem alias unde dolores natus suscipit!" blurPos="w-0" link="/rooms"/>
        <FixedImage path="/gallery/img3.jpeg" header="IDK" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga exercitationem alias unde dolores natus suscipit!" blurPos="w-2/3" link="/rooms"/>
        <FixedImage path="/gallery/img2.jpeg" header="O Nas" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga exercitationem alias unde dolores natus suscipit!" blurPos="w-0" link="/rooms"/>
      <ReservationLink/>

    </div>
  );
}
