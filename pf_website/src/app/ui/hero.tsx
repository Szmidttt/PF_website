import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
    return (
        <div className="relative">
            <div className="flex flex-grow bg-center bg-cover">
                <Image
                    src="/hero_img.jpg"
                    width={5107}
                    height={2369}
                    alt="MORZE"
                />
            </div>
            <div className="absolute bottom-3/5 left-1/3 bg-gray-800/50 px-10 py-5">
                <div className="text-white flex flex-col text-center">
                    <p className="font-bold text-xl">Witaj w Pensjonacie Familia</p>
                    <p className="py-2">Komfort, spokój i szum fal - Twój idealny wypoczynek nad Bałtykiem</p>
                    <Link
                        href="/rooms"
                        key="wiecej-link"
                        className="rounded-lg bg-blue-100 p-4 text-black hover:bg-blue-200">WIĘCEJ
                    </Link>
                </div>

            </div>
        </div>
    );
}