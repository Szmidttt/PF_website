'use client'
import { MapPinIcon } from "@heroicons/react/24/outline";
import NavLinks from "./utils/nav-links";
import ThemeButton from "./utils/theme-button";
import SocialsLinks from "./utils/social-links";
import Lang from "./utils/lang";
export default function Nav() {
    return (<>
        <div className="bg-blue-50">
            <div className="grid grid-cols-3 p-7">
                <div className="flex flex-row">
                    <MapPinIcon className="w-6" />
                    <span>ul. Wczasowa 61, Karwieńskie Błoto II 84-105</span>
                </div>
                <div className="flex flex-1 justify-center">
                    <span className="text-xl font-bold">PENSJONAT</span>
                </div>
                <div className="flex justify-end">
                    <div className="flex flex-col">
                        <SocialsLinks/>
                        <Lang/>
                    </div>
                    

                    {/* <ThemeButton/> */}
                </div>
            </div>
            <div className="flex flex-row flex-1 justify-center">
                <NavLinks />
            </div>
        </div>
    </>);
}