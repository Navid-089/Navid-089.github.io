import RichText from '@/components/RichText';
import SectionTitle from '@/components/SectionTitle';
import { HONORS, MY_EDUCATION } from '@/lib/data';

const Education = () => {
    return (
        <section className="pt-section" id="education">
            <div className="container">
                <SectionTitle title="Education" />

                <div className="space-y-8">
                    {MY_EDUCATION.map((item) => (
                        <div key={item.degree}>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                                <h3 className="font-semibold">
                                    <RichText text={item.institution} />
                                </h3>
                                <p className="text-[15px] text-muted-foreground">
                                    {item.duration}
                                </p>
                            </div>
                            <p className="mt-1">
                                {item.degree}
                                <span className="text-muted-foreground">
                                    {' '}
                                    · {item.result}
                                </span>
                            </p>
                            {item.note && (
                                <p className="mt-1.5 max-w-[68ch] text-muted-foreground">
                                    {item.note}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <SectionTitle title="Honors and Awards" className="mt-16" />

                <ul className="space-y-2.5">
                    {HONORS.map((item) => (
                        <li
                            key={item.title + item.year}
                            className="flex flex-wrap items-baseline justify-between gap-x-6"
                        >
                            <p>
                                {item.title}
                                {item.detail && (
                                    <span className="text-muted-foreground">
                                        {' '}
                                        · {item.detail}
                                    </span>
                                )}
                            </p>
                            <p className="text-[15px] text-muted-foreground">
                                {item.year}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Education;
