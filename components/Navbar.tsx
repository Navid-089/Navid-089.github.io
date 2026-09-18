import Link from 'next/link';
import { GENERAL_INFO } from '@/lib/data';
import { newTabProps } from '@/lib/utils';

const MENU_LINKS = [
    { name: 'Research', url: '/#research' },
    { name: 'Experience', url: '/#experience' },
    { name: 'Teaching', url: '/#teaching' },
    { name: 'Education', url: '/#education' },
    { name: 'Projects', url: '/#projects' },
    { name: 'CV', url: GENERAL_INFO.cv },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
            <nav className="container flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
                <Link href="/" className="font-serif text-lg font-semibold">
                    {GENERAL_INFO.name}
                </Link>
                <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[15px] text-muted-foreground">
                    {MENU_LINKS.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.url}
                                {...newTabProps(link.url)}
                                className="transition-colors hover:text-primary"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
