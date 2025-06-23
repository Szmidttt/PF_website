import { MapPinIcon } from "@heroicons/react/24/outline";
import SocialsLinks from "./utils/social-links";
import ContactInfo from "./utils/contact-info";
export default function Footer(){
    return (<>
    <div className="flex justify-evenly grow bg-blue-50 p-4">
        <ContactInfo/>
        <div className="flex flex-col items-center">
            <span className="font-bold">Social media</span>
            <SocialsLinks/>
        </div>
    </div>
        
    </>);
}