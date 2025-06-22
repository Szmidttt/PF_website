import Image from "next/image";
export default function HeroSection(){
    return (
        <div className="flex flex-grow">
            <Image
            src="/hero_img.jpg"
            width={5107}
            height={2369}
            alt="MORZE"
          />
        </div>
    );
}