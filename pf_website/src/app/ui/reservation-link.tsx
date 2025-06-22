import Link from "next/link";
export default function ReservationLink(){
    return (
    <div className="fixed bottom-10 left-5">
        <Link href="/rooms" className="flex item-center bg-blue-100 px-4 py-2 hover:bg-blue-200 rounded-lg">
            <span>Zarezerwuj</span>
        </Link>
    </div>
    );
}