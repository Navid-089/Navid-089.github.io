import Image from 'next/image';
import { ABOUT, GENERAL_INFO, PROFILE_LINKS } from '@/lib/data';
import RichText from '@/components/RichText';
import { newTabProps } from '@/lib/utils';

const Intro = () => {
    return (
        <section className="pt-14 md:pt-20" id="about">
            <div className="container">
                <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
                    <div>
                        <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
                            {GENERAL_INFO.name}
                        </h1>
                        <p className="mt-3 text-lg">
                            {GENERAL_INFO.role}, {GENERAL_INFO.affiliation}
                        </p>
                        <p className="text-muted-foreground">
                            {GENERAL_INFO.tagline}
                        </p>
                        <p className="text-muted-foreground">
                            {GENERAL_INFO.degree}
                        </p>

                        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
                            {PROFILE_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        className="link"
                                        {...newTabProps(link.url)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {GENERAL_INFO.photo && (
                        <Image
                            src={GENERAL_INFO.photo}
                            alt={GENERAL_INFO.name}
                            width={176}
                            height={176}
                            className="size-36 shrink-0 rounded-md object-cover md:size-44"
                            priority
                        />
                    )}
                </div>

                <div className="mt-10 max-w-[68ch] space-y-4">
                    {ABOUT.map((paragraph) => (
                        <p key={paragraph}>
                            <RichText text={paragraph} />
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Intro;
