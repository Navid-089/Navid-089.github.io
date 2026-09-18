import SectionTitle from '@/components/SectionTitle';
import { SKILLS } from '@/lib/data';

const Skills = () => {
    return (
        <section className="pt-section" id="skills">
            <div className="container">
                <SectionTitle title="Technical Skills" />

                <dl className="grid gap-x-8 gap-y-2.5 sm:grid-cols-[220px_1fr]">
                    {SKILLS.map((skill) => (
                        <div className="contents" key={skill.area}>
                            <dt className="font-medium max-sm:mt-2">
                                {skill.area}
                            </dt>
                            <dd className="text-muted-foreground">
                                {skill.items}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default Skills;
