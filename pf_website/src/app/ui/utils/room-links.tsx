import Image from "next/image";
import rooms from "@/app/data/rooms.json"
import Link from "next/link";

export default function RoomLinks() {
    return (<>
        {rooms.map((room) => {
            return (
                <div key={room.id} className="flex h-1/3 px-60 py-7">
                    <Image
                        className="w-1/2 h-full object-cover"
                        src={room.image}
                        width={1920}
                        height={1280}
                        alt={room.id}
                    />
                    <div className="w-1/2 flex flex-col items-center justify-center bg-green-200">
                        <span className="font-bold p-2">{room.name}</span>
                        <span className="p-2">{room.short_description}</span>
                        <span className="font-semibold p-2">{room.price} zł/dzień</span>
                        <Link
                            href={room.link}
                            key={room.id}>
                            <span className="bg-white px-4 py-2 rounded-lg hover:bg-gray-100 ">Więcej</span>
                        </Link>
                    </div>
                </div>)
        })}
    </>
    );
}