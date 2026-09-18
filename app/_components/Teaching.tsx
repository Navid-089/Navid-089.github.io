import RichText from '@/components/RichText';
import SectionTitle from '@/components/SectionTitle';
import { TEACHING } from '@/lib/data';

const Teaching = () => {
    return (
        <section className="pt-section" id="teaching">
            <div className="container">
                <SectionTitle title="Teaching" />

                <p className="mb-6 text-muted-foreground">
                    Course instructor at{' '}
                    <RichText text={TEACHING.institution} />.
                </p>

                <div className="space-y-6">
                    {TEACHING.terms.map((item) => (
                        <div
                            key={item.term}
                            className="grid gap-x-8 gap-y-1 sm:grid-cols-[140px_1fr]"
                        >
                            <h3 className="font-semibold">{item.term}</h3>
                            <ul className="space-y-1">
                                {item.courses.map((course) => (
                                    <li key={course.code}>
                                        <span className="text-muted-foreground">
                                            {course.code}
                                        </span>{' '}
                                        {course.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teaching;
