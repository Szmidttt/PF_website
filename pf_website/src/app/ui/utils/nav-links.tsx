'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Start', href: '/' },
    { name: 'Pokoje', href: '/rooms' },
    { name: 'Galeria', href: '/gallery' },
    { name: 'Kontakt', href: '/contact' },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx("flex h-[48px] border-blue-600 grow items-center justify-center gap-2 text-blue-200 bg-blue-600 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                'border-t-5 border-gray-500' : pathname !== link.href,
                                'border-sky-100 border-t-5': pathname === link.href,
                            }

                        )}>
                        <p className="">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}