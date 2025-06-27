import RoomLinks from "../ui/utils/room-links";
import Image from "next/image";
export default function RoomsPage() {
    return (

        <div className="">
            <div className="bg-fixed 100vh">
                <Image
                    className=""
                    src="/bg-img.jpg"
                    width={1920}
                    height={1280}
                    alt="bg image" />
            </div>
            <RoomLinks />
        </div>);

}