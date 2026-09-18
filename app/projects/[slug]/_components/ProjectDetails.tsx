import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { IProject } from '@/types';

interface Props {
    project: IProject;
}

const ProjectDetails = ({ project }: Props) => {
    return (
        <section className="pt-10">
            <div className="container">
                <Link
                    href="/#projects"
                    className="mb-10 inline-flex items-center gap-2 text-[15px] text-muted-foreground transition-colors hover:text-primary"
                >
                    <ArrowLeft size={16} />
                    All projects
                </Link>

                <h1 className="font-serif text-4xl font-semibold leading-tight">
                    {project.title}
                </h1>
                <p className="mt-3 text-muted-foreground">
                    {project.year} · {project.techStack.join(' · ')}
                </p>

                <div className="mt-3 flex gap-5">
                    {project.sourceCode && (
                        <a
                            href={project.sourceCode}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="link"
                        >
                            Source code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="link"
                        >
                            Live site
                        </a>
                    )}
                </div>

                <div className="mt-10 max-w-[68ch] space-y-9">
                    <div>
                        <h2 className="mb-3 font-serif text-xl font-semibold">
                            Overview
                        </h2>
                        <div className="markdown-text">
                            {parse(project.description)}
                        </div>
                    </div>
                    {project.role && (
                        <div>
                            <h2 className="mb-3 font-serif text-xl font-semibold">
                                My role
                            </h2>
                            <div>{parse(project.role)}</div>
                        </div>
                    )}
                </div>

                <div className="mt-12 space-y-4">
                    {project.images.map((image) => (
                        <Image
                            key={image}
                            src={image}
                            alt={`${project.title} screenshot`}
                            width={1500}
                            height={800}
                            className="w-full rounded-md border"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
