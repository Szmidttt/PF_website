import { PL, GB } from 'country-flag-icons/react/3x2'
import Link from 'next/link';
const langLinks = [
    { link: "/en", icon: GB },
    { link: "/", icon: PL }
]
export default function Lang() {
    return (<div className='flex flex-row'>
        {langLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
                    <Link
                        href={link.link}
                        key={`link-${link.link}`}>
                        <LinkIcon className='w-6 p-1'/>
                    </Link>
            );
        })}
    </div>);
}