import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';

const ProjectList = () => {
    const featured = PROJECTS.filter((project) => project.featured);
    const others = PROJECTS.filter(
        (project) => !project.featured && project.slug !== 'krispmer',
    );

    return (
        <section className="pt-section" id="projects">
            <div className="container">
                <SectionTitle title="Selected Projects" />

                <div className="grid gap-x-10 gap-y-9 md:grid-cols-2">
                    {featured.map((project) => (
                        <div key={project.slug}>
                            <h3 className="font-semibold">
                                <Link
                                    href={`/projects/${project.slug}/`}
                                    className="link"
                                >
                                    {project.title}
                                </Link>
                                <span className="ml-2 text-[15px] font-normal text-muted-foreground">
                                    {project.year}
                                </span>
                            </h3>
                            <p className="mt-1.5 text-muted-foreground">
                                {project.summary}
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {project.techStack.join(' · ')}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-muted-foreground">
                    Also:{' '}
                    {others.map((project, idx) => (
                        <span key={project.slug}>
                            <Link
                                href={`/projects/${project.slug}/`}
                                className="link"
                            >
                                {project.title}
                            </Link>
                            {idx < others.length - 1 && ', '}
                        </span>
                    ))}
                    .
                </p>
            </div>
        </section>
    );
};

export default ProjectList;
