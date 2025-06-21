'use client'
import { MapPinIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";
import ThemeButton from "./theme-button";
export default function Nav() {
    return (<>
        <div className="bg-blue-50">
            <div className="sticky flex flex-1 flex-row justify-between">
                <div>
                    <MapPinIcon className="w-6" />
                    <div>Karwieńskie Błoto II, Wczasowa 1xx</div>
                </div>
                <div>
                    LOGO
                </div>
                <div>
                    Jakieś cos
                    <ThemeButton/>
                </div>
            </div>
            <div className="flex flex-row flex-1 justify-between">
                <NavLinks />
            </div>
        </div>
    </>);
}