import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';

const Experiences = () => {
    return (
        <section className="pt-section" id="experience">
            <div className="container">
                <SectionTitle title="Experience" />

                <div className="space-y-8">
                    {MY_EXPERIENCE.map((item) => (
                        <div key={item.title}>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                                <h3 className="font-semibold">
                                    {item.title},{' '}
                                    <span className="font-normal">
                                        {item.company}
                                    </span>
                                </h3>
                                <p className="text-[15px] text-muted-foreground">
                                    {item.duration}
                                </p>
                            </div>
                            <p className="mt-1.5 max-w-[68ch] text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
