import Image from "next/image";
import rooms from "@/app/data/rooms.json"
import Link from "next/link";
import ReservationForm from "../reservation-form";
export default function RoomLinks() {
    return (<div className="py-10">
        {rooms.map((room) => {
            return (
                <div key={room.id} className="px-50 py-8">

                    <div className="flex h-1/3 shadow-2xl bg-blue-500 rounded-lg">
                        <div className="p-2 w-1/2 h-full object-cover">
                            <Image
                                className=""
                                src={room.image}
                                width={1920}
                                height={1280}
                                alt={room.id}
                            />
                        </div>
                        <div className="w-1/2 text-sky-100">
                            <div className="flex flex-col justify-center px-5 h-full">
                                <span className="font-bold p-2">{room.name}</span>
                                <span className="p-2">{room.short_description}</span>
                                <span className="font-semibold p-2">{room.price} zł/dzień</span>
                                <div className="flex flex-row p-3 items-center text-black">
                                    <Link
                                        href={room.link}
                                        key={room.id}>
                                        <span className="bg-white px-4 py-2 rounded-lg hover:bg-sky-100 ">Więcej</span>

                                    </Link>
                                    <div className="p-3"></div>
                                    <ReservationForm id={room.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
        })}
    </div>
    );
}