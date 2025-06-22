import {} from "next";
import Image from "next/image";
import rooms from "@/app/data/rooms.json"


export async function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
    const room=rooms.find((r)=>r.id===params.id)
    return (
        <div className="flex h-screen">
            <Image
                className="w-1/2 h-full object-cover"
                src="/gallery/img4.jpeg"
                key="pokoj"
                width={1000}
                height={500}
                alt="pokoj"
            />
            <div className="w-1/2 flex flex-col items-center justify-center bg-green-200">
                <span className="font-bold">Pokój</span>
                {room?.id}
            </div>
        </div>
    );
}