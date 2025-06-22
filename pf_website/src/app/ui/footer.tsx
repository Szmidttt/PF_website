import { MapPinIcon } from "@heroicons/react/24/outline";
import SocialsLinks from "./utils/social-links";
export default function Footer(){
    return (<>
    <div className="flex justify-evenly grow bg-blue-50 p-4">
        <div className="flex flex-col items-center">
            <span className="font-bold">Kontakt</span>
            <span>Adres: ul. Wczasowa ???, Karwieńskie Błoto Drugie 84-105 </span>
            <span>Numer telefonu: 123 456 789</span>
            <span>E-mail: przykład@example.com</span>
        </div>
        <div className="flex flex-col items-center">
            <span className="font-bold">Social media</span>
            <SocialsLinks/>
        </div>
    </div>
        
    </>);
}