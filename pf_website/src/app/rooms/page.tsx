import RoomLinks from "../ui/utils/room-links";
import Image from "next/image";
export default function RoomsPage() {
    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen -z-10">
                <div className="object-cover w-full h-ful blur-sm">
                    <Image
                        className=""
                        src="/bg-img.webp"
                        width={1920}
                        height={1280}
                        alt="bg image" />
                </div>

            </div>
            <RoomLinks />
        </div>);

}