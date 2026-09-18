import Intro from './_components/Intro';
import Research from './_components/Research';
import Experiences from './_components/Experiences';
import Teaching from './_components/Teaching';
import Education from './_components/Education';
import ProjectList from './_components/ProjectList';
import Skills from './_components/Skills';

export default function Home() {
    return (
        <>
            <Intro />
            <Research />
            <Experiences />
            <Teaching />
            <Education />
            <ProjectList />
            <Skills />
        </>
    );
}
