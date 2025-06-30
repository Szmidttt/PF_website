import Image from "next/image";
import rooms from "@/app/data/rooms.json"
import ReservationForm from "../../ui/reservation-form";
import 'reactjs-popup/dist/index.css';

export function generateStaticParams() {
    return rooms.map((room) => ({
        id: room.id,
    }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const room = rooms.find((r) => r.id === id)
    if (!room) return <div>Nie ma takiego pokoju</div>
    return (
        <div className="flex h-screen">
            <Image
                className="w-1/2 h-full object-cover"
                src={room.image}
                key={room.id}
                width={1920}
                height={1280}
                alt={room.id}
            />
            <div className="w-1/2 flex flex-col items-center justify-center">
                <span className="font-bold">{room.name}</span>
                <span className="p-2">{room.description}</span>
                <div className="flex flex-row">
                    <span className="font-semibold px-4">{room.price} zł/dzień</span>
                    <ReservationForm id={room.id}/>
                </div>

            </div>

        </div>
    );
}