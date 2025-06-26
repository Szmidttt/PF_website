import Link from 'next/link';
import { FaFacebook,FaInstagram } from 'react-icons/fa';

const links = [
    { icon: FaFacebook, href: 'www.facebook.com', key: 'facebook' },
    { icon: FaInstagram, href: 'www.instagram.com', key: 'instagram' }
];

export default function SocialsLinks() {
    return (
        <div className='flex flex-row'>
            {links.map((link) => {
                const LinkIcon=link.icon;
                return (
                    <Link
                        href={link.href}
                        key={link.key}
                        className="">
                        <LinkIcon className='w-6'/>
                    </Link>
                );
            })}
        </div>
    );
}