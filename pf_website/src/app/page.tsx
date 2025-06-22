import Image from "next/image";
import HeroSection from "./ui/hero";
import Footer from "./ui/footer";
import ReservationLink from "./ui/reservation-link";
export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <main className="">
      </main>
      <ReservationLink/>
    </div>
  );
}
