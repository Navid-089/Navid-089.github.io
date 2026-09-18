import { GENERAL_INFO, PROFILE_LINKS } from '@/lib/data';
import { newTabProps } from '@/lib/utils';

const Footer = () => {
    return (
        <footer className="border-t mt-section" id="contact">
            <div className="container py-10 text-[15px] text-muted-foreground">
                <p>
                    The best way to reach me is by email:{' '}
                    <a href={`mailto:${GENERAL_INFO.email}`} className="link">
                        {GENERAL_INFO.email}
                    </a>
                </p>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                    {PROFILE_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            {...newTabProps(link.url)}
                            className="transition-colors hover:text-primary"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <p className="mt-8 text-sm">
                    © {new Date().getFullYear()} {GENERAL_INFO.name}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
