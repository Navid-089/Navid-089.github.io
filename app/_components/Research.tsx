import RichText from '@/components/RichText';
import SectionTitle from '@/components/SectionTitle';
import { GENERAL_INFO, PUBLICATIONS, RESEARCH_INTERESTS } from '@/lib/data';
import { IPublication } from '@/types';
import { newTabProps } from '@/lib/utils';

// bold my own name inside the author list
const Authors = ({ authors }: { authors: string }) => {
    const parts = authors.split(GENERAL_INFO.name);

    return (
        <>
            {parts.map((part, idx) => (
                <span key={idx}>
                    {part}
                    {idx < parts.length - 1 && (
                        <strong className="font-semibold text-foreground">
                            {GENERAL_INFO.name}
                        </strong>
                    )}
                </span>
            ))}
        </>
    );
};

const Publication = ({ item }: { item: IPublication }) => {
    return (
        <li>
            <h4 className="font-serif text-xl font-semibold leading-snug">
                {item.title}
            </h4>
            <p className="mt-1.5 text-[15px] text-muted-foreground">
                <Authors authors={item.authors} />
            </p>
            <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px]">
                <span className="rounded-sm border px-2 py-0.5 text-[13px] text-muted-foreground">
                    {item.status}
                </span>
                <span className="text-muted-foreground">
                    {item.venue && <em>{item.venue}, </em>}
                    {item.year}
                </span>
                {item.links.map((link) => (
                    <a
                        href={link.url}
                        className="link"
                        key={link.label}
                        {...newTabProps(link.url)}
                    >
                        {link.label}
                    </a>
                ))}
            </p>
            {item.note && (
                <p className="mt-2 text-[15px] text-muted-foreground">
                    <RichText text={item.note} />
                </p>
            )}
            {item.summary && (
                <p className="mt-2 max-w-[68ch]">{item.summary}</p>
            )}
            {item.contribution && (
                <p className="mt-2 max-w-[68ch]">
                    <span className="font-medium">My contribution:</span>{' '}
                    {item.contribution}
                </p>
            )}
        </li>
    );
};

const Research = () => {
    return (
        <section className="pt-section" id="research">
            <div className="container">
                <SectionTitle title="Research" />

                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Interests
                </h3>
                <ul className="mb-12 list-disc space-y-1 pl-5">
                    {RESEARCH_INTERESTS.map((interest) => (
                        <li key={interest}>{interest}</li>
                    ))}
                </ul>

                <h3 className="mb-5 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Papers and manuscripts
                </h3>
                <ol className="space-y-10">
                    {PUBLICATIONS.map((item) => (
                        <Publication item={item} key={item.title} />
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Research;
