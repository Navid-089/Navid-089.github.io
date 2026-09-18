import { IProject, IPublication } from '@/types';

export const GENERAL_INFO = {
    name: 'Wahid Al Azad Navid',
    role: 'Lecturer, Department of CSE',
    affiliation: 'Presidency University, Dhaka',
    tagline: 'Computational biology and machine learning',
    degree: 'B.Sc. in CSE from BUET (CGPA 3.96/4.00)',
    email: 'wahidnavid@gmail.com',
    siteUrl: 'https://navid-089.github.io',

    // Head-and-shoulders crop; the full-size original is kept outside the repo.
    photo: '/photo.jpg',

    // Served from public/cv.pdf
    cv: '/cv.pdf',
    githubProfile: 'https://github.com/Navid-089',
    linkedinProfile: 'https://www.linkedin.com/in/wahid-al-azad-navid',
    // Fill in once the profile exists; the link is hidden while empty.
    scholarProfile: '',
    orcidProfile: 'https://orcid.org/0009-0007-8511-2675',
};

export const PROFILE_LINKS = [
    { name: 'CV', url: GENERAL_INFO.cv },
    { name: 'Google Scholar', url: GENERAL_INFO.scholarProfile },
    { name: 'ORCID', url: GENERAL_INFO.orcidProfile },
    { name: 'GitHub', url: GENERAL_INFO.githubProfile },
    { name: 'LinkedIn', url: GENERAL_INFO.linkedinProfile },
    { name: 'Email', url: `mailto:${GENERAL_INFO.email}` },
].filter((link) => link.url);

// Inline links use [label](url).
export const ABOUT = [
    `I am a Lecturer at [Presidency University](https://pu.edu.bd/) and a recent [Computer Science and Engineering](https://cse.buet.ac.bd/) graduate of the [Bangladesh University of Engineering and Technology (BUET)](https://www.buet.ac.bd/web/#/). My research interests lie in computational biology and machine learning.`,
    `For my undergraduate thesis, supervised by [Dr. Atif Hasan Rahman](https://cse.buet.ac.bd/faculty/faculty_detail/atif) in collaboration with [Dr. Mahmudur Rahman Hera](https://sites.google.com/view/mahmudhera), I developed [kRISP-meR](/projects/krispmer/), a reference-free guide-RNA design framework for CRISPR/Cas9. I have also contributed to research in mechanistic interpretability of multimodal models and in Bangla language and speech resources.`,
    `I am applying to PhD programs for the upcoming admission cycle.`,
];

// TODO(Navid): rewrite these in your own words. They should match your SOP.
export const RESEARCH_INTERESTS = [
    'Computational genomics: algorithms and probabilistic models for sequence analysis',
    'Machine learning for biological sequence data',
    'Multimodal learning and the interpretability of multimodal models',
];

// `status` must be true on the day someone reads it. If a paper was rejected
// and not yet resubmitted, use 'Preprint' (with a link) or
// 'Manuscript in preparation', not the old venue.
export const PUBLICATIONS: IPublication[] = [
    {
        title: 'kRISP-meR: A Reference-free Guide-RNA Design Tool for CRISPR/Cas9',
        authors:
            'Wahid Al Azad Navid, Fuad Ahmed Udoy, Mahmudur Rahman Hera, Atif Hasan Rahman',
        status: 'Manuscript in preparation',
        year: '2026',
        note: 'Undergraduate thesis, BUET. Supervisor: [Dr. Atif Hasan Rahman](https://cse.buet.ac.bd/faculty/faculty_detail/atif). Collaborator: [Dr. Mahmudur Rahman Hera](https://sites.google.com/view/mahmudhera).',
        summary:
            'A reference-free tool for designing CRISPR/Cas9 guide RNAs that works directly on raw sequencing reads from the individual being edited, with no genome assembly and no reference genome. kRISP-meR fits a Poisson mixture to the k-mer frequency spectrum of the reads using expectation-maximization, infers the genomic copy number of each guide-like sequence, and from that computes the expected number of cuts for every candidate guide. Benchmarked against CRISPOR and GuideScan2 on human, mouse, and yeast data, it recovers the high-quality guides those tools find, and it rejects guides that look unique in the reference but are duplicated in the genome of the individual. Benchmarking is complete and the manuscript is being finalised.',
        links: [{ label: 'Project page', url: '/projects/krispmer/' }],
    },
    {
        title: 'A Multimodal Framework for Pavement Condition Assessment Using Roadway Imagery and Vehicle Response',
        authors:
            'Shams E Shifat, Wahid Al Azad Navid, Ashrafur Rahman, AQM Zohuruzzaman, Zhao Gao, Nasif Shafi, Mosharaf Chowdhury, Sadik Khan',
        status: 'Under review',
        venue: 'Transportation Research Board (TRB) Annual Meeting',
        year: '2026',
        note: 'With Limbics AI, Jackson State University, and the AWS Generative AI Innovation Center.',
        summary:
            'Fuses pavement video, three vehicle-mounted IMUs, GPS, and operating context from 15 field sites into one-second roadway records, and combines them with an adaptive multimodal model that is evaluated on held-out sites.',
        contribution:
            'Data analysis and model development with two co-authors, and the automated AWS pipeline that processes the field data end to end.',
        links: [],
    },
    {
        title: 'Disentangling Cross-Modal Information Pathways via Mechanistic Interpretability of Multimodal Fusion Models',
        authors: 'Abrar Rahman Abir, Wahid Al Azad Navid, Sheikh Azizul Hakim',
        status: 'Manuscript in preparation',
        year: '2026',
        // TODO(Navid): one sentence on what you did, e.g. which experiments you ran.
        contribution: '',
        links: [],
    },
    {
        title: 'DocTalkBN: A Novel Dataset of Expert Telemedicine Conversations in Bengali',
        authors:
            'Anik Saha, Mst. Fahmida Sultana Naznin, Sadatul Islam Sadi, Ananya Shahrin Promi, Wahid Al Azad Navid, Rifat Shahriyar',
        status: 'Manuscript in preparation',
        year: '2026',
        // TODO(Navid): one sentence on what you did.
        contribution: '',
        links: [],
    },
    {
        title: 'Bengali-Loop: Community Benchmarks for Long-Form Bangla ASR and Speaker Diarization',
        authors:
            'H. M. Shadman Tabib, Istiak Ahmmed Rifti, …, Wahid Al Azad Navid, … (27 authors)',
        status: 'Preprint',
        venue: 'arXiv:2602.14291',
        year: '2026',
        contribution: '',
        links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2602.14291' }],
    },
];

export const PROJECTS: IProject[] = [
    {
        title: 'kRISP-meR',
        slug: 'krispmer',
        summary:
            'A reference-free tool for CRISPR/Cas9 guide-RNA design that scores off-target risk directly from sequencing reads.',
        techStack: [
            'Python',
            'CRISPR/Cas9',
            'k-mer spectra',
            'Expectation-Maximization',
            'Jellyfish',
            'Bowtie2',
            'Pilon',
        ],
        thumbnail: '/projects/thumbnail/krispmer.jpg',
        longThumbnail: '/projects/long/krispmer.jpg',
        images: ['/projects/images/krispmer-1.jpg'],
        year: 2026,
        description: `My undergraduate thesis at BUET. kRISP-meR designs single-guide RNAs (sgRNAs) for CRISPR/Cas9 from the raw sequencing reads of the individual being edited, without a reference genome or a genome assembly.<br/><br/>

        Most guide-design tools check off-targets against a single reference genome. That is not possible for organisms without a good assembly, and it fails quietly when the individual differs from the reference: a guide can look unique in the reference while the same sequence is duplicated in the individual.<br/><br/>

        How it works:
        <ul>
            <li>Reads are aligned to the user-supplied target sequence with Bowtie2 and the target is refined with Pilon, giving a personalised target from which candidate guides (20 nt protospacer plus NGG PAM) are enumerated</li>
            <li>All 23-mers in the reads are counted with Jellyfish, and the k-mer frequency spectrum is modelled as a mixture of Poisson distributions fitted with expectation-maximization, which yields the sequencing coverage and a prior over genomic copy number</li>
            <li>For each candidate, the expected number of cuts is computed over every k-mer within two mismatches, weighting the inferred copy number of each by its CFD cutting probability; guides are ranked by this value</li>
            <li>On-target efficiency is reported using the Rule Set 2 model of Doench et al.</li>
        </ul><br/>

        Evaluation:
        <ul>
            <li>Benchmarked against CRISPOR and GuideScan2 on human, mouse, and yeast: read-based scores closely track scores computed from the full reference genome, and the recommended guides carry far fewer severe off-targets</li>
            <li>Tested where individual and reference disagree (CHM13 versus GRCh38 in human, N22 versus Nipponbare in rice): kRISP-meR rejects guides that are single-copy in the reference but duplicated in the individual, and can evaluate targets that are absent from the reference altogether</li>
            <li>Benchmarking complete; manuscript being finalised</li>
        </ul>`,
        // TODO(Navid): replace with the specific parts that were yours.
        role: `First author. Undergraduate thesis supervised by <a class="link" href="https://cse.buet.ac.bd/faculty/faculty_detail/atif" target="_blank" rel="noopener noreferrer">Dr. Atif Hasan Rahman</a> in collaboration with <a class="link" href="https://sites.google.com/view/mahmudhera" target="_blank" rel="noopener noreferrer">Dr. Mahmudur Rahman Hera</a>, with co-author Fuad Ahmed Udoy.`,
    },
    {
        title: 'GradPilot',
        slug: 'gradpilot',
        summary:
            'A platform that guides students through graduate applications, with ML-based university matching and SOP feedback, built as microservices with CI/CD.',
        featured: true,
        techStack: [
            'Spring Boot',
            'Next.js',
            'MySQL',
            'Docker',
            'GitHub Actions',
            'Microservices',
        ],
        thumbnail: '/projects/thumbnail/gradpilot.png',
        longThumbnail: '/projects/long/gradpilot.png',
        images: ['/projects/images/gradpilot-1.png'],
        sourceCode: 'https://github.com/Navid-089/GradPilot',
        year: 2025,
        description: `An ML/AI-powered platform that guides students through the graduate application process, from shortlisting universities to polishing their statement of purpose.<br/><br/>

        Key features:
        <ul>
            <li>University matching: recommends programs based on academic profile and research interests</li>
            <li>SOP review: AI-assisted feedback on statements of purpose</li>
            <li>Application tracking: manage recommendations, deadlines, and application status in one place</li>
            <li>Community forums: peer discussion and shared experience across applicants</li>
            <li>Microservice architecture with CI/CD pipelines for scalable deployment</li>
        </ul>`,
        role: `Backend and full-stack developer on the team.<br/>
        - Built backend services with Spring Boot and secured them using Spring Security.<br/>
        - Designed the MySQL schema for user profiles, applications, and recommendation tracking.<br/>
        - Containerized services with Docker and set up GitHub Actions CI/CD pipelines.<br/>
        - Contributed to the React and Next.js frontend for matching and tracking modules.`,
    },
    {
        title: 'DHCP Starvation & Spoofing',
        slug: 'dhcp-attack',
        summary:
            'Simulated DHCP starvation and rogue-server spoofing in an isolated lab, measured the disruption, and evaluated DHCP snooping and port security as defences.',
        featured: true,
        techStack: ['Python', 'Scapy', 'ns-3', 'Network Security'],
        thumbnail: '/projects/thumbnail/dhcp-attack.png',
        longThumbnail: '/projects/long/dhcp-attack.png',
        images: ['/projects/images/dhcp-attack-1.png'],
        sourceCode: 'https://github.com/Navid-089/DHCP-Starvation-and-Spoofing',
        year: 2025,
        description: `A networks course project simulating DHCP starvation and spoofing attacks inside an isolated virtual lab, then measuring their impact and evaluating defences.<br/><br/>

        Scope of the work:
        <ul>
            <li>Simulated DHCP starvation by exhausting the server's address pool in a controlled environment</li>
            <li>Implemented rogue-server spoofing to study man-in-the-middle exposure</li>
            <li>Quantified network disruption under each attack scenario</li>
            <li>Explored countermeasures including DHCP snooping and port security</li>
        </ul>`,
        role: `Developer and analyst.<br/>
        - Wrote the attack simulations in Python using Scapy for packet crafting.<br/>
        - Modeled the network topology and traffic behaviour in ns-3.<br/>
        - Documented disruption metrics and wrote up the mitigation analysis.`,
    },
    {
        title: 'CashlessCrave Cafe',
        slug: 'cashlesscrave-cafe',
        summary:
            'An Arduino-based vending machine with RFID and mobile banking payments.',
        techStack: ['Arduino', 'RFID', 'SONAR', 'Servo Motor', 'Embedded C'],
        thumbnail: '/projects/thumbnail/cashlesscrave-cafe.jpg',
        longThumbnail: '/projects/long/cashlesscrave-cafe.jpg',
        images: ['/projects/images/cashlesscrave-cafe-1.jpg'],
        sourceCode: 'https://github.com/Navid-089/CashlessCrave-Cafe',
        year: 2024,
        description: `An automated vending machine built from scratch, supporting both mobile banking and RFID card payments — a cashless campus cafe in a box.<br/><br/>

        Key features:
        <ul>
            <li>Dual payment paths: RFID card tap and mobile banking confirmation</li>
            <li>Servo-driven dispensing mechanism for product delivery</li>
            <li>SONAR-based detection to confirm successful dispensing</li>
            <li>Fully self-contained embedded system on Arduino</li>
        </ul>`,
        role: `Hardware and firmware developer.<br/>
        - Designed the circuit integrating RFID reader, SONAR sensor, and servo actuators.<br/>
        - Wrote the Arduino firmware coordinating payment verification and dispensing.<br/>
        - Handled the payment-state logic and error recovery for failed dispenses.`,
    },
    {
        title: 'C Compiler',
        slug: 'c-compiler',
        summary:
            'A compiler for a subset of C: lexing, parsing, scoped symbol tables, type checking, and code generation.',
        featured: true,
        techStack: ['Flex', 'Bison', 'C', 'Compiler Design'],
        thumbnail: '/projects/thumbnail/c-compiler.png',
        longThumbnail: '/projects/long/c-compiler.png',
        images: ['/projects/images/c-compiler-1.png'],
        sourceCode: 'https://github.com/Navid-089/CSE-310-Compiler-Sessional',
        year: 2023,
        description: `A working compiler for a substantial subset of the C language, built end to end across the full compilation pipeline.<br/><br/>

        Stages implemented:
        <ul>
            <li>Lexical analysis with Flex, producing the token stream</li>
            <li>Parsing with Bison, building the abstract syntax tree</li>
            <li>Semantic analysis: symbol table management, scope resolution, and type checking</li>
            <li>Intermediate and target code generation with error reporting throughout</li>
        </ul>`,
        role: `Sole developer.<br/>
        - Wrote the grammar and lexical specification for the supported C subset.<br/>
        - Implemented the symbol table with hierarchical scoping.<br/>
        - Built the type checker and code generator, with diagnostic messages for invalid programs.`,
    },
    {
        title: '4-bit MIPS Processor',
        slug: 'mips-4bit',
        summary:
            'A 4-bit MIPS processor with a custom instruction set, designed from first principles and built on physical ICs with an ATmega32A.',
        featured: true,
        techStack: ['ATmega32A', 'Digital Logic', 'Computer Architecture'],
        thumbnail: '/projects/thumbnail/mips-4bit.png',
        longThumbnail: '/projects/long/mips-4bit.png',
        images: ['/projects/images/mips-4bit-1.png'],
        year: 2024,
        description: `A 4-bit MIPS processor designed and physically built using an ATmega32A microcontroller alongside discrete logic gates.<br/><br/>

        Design highlights:
        <ul>
            <li>Custom instruction set with arithmetic, logic, memory, and branch operations</li>
            <li>Datapath and control unit designed from first principles</li>
            <li>Built on physical IC-based hardware rather than simulation alone</li>
            <li>Follows on from an earlier 4-bit ALU built purely from elementary logic gates</li>
        </ul>`,
        role: `Hardware designer.<br/>
        - Designed the datapath, register file, and control logic for the instruction set.<br/>
        - Assembled and debugged the circuit on breadboard with IC-based components.<br/>
        - Verified instruction execution against hand-traced expected behaviour.`,
    },
    {
        title: 'Learnly',
        slug: 'learnly',
        summary:
            'A tuition platform connecting tutors and students, with batch management and scheduling.',
        techStack: ['React', 'Next.js', 'Oracle SQL'],
        thumbnail: '/projects/thumbnail/learnly.png',
        longThumbnail: '/projects/long/learnly.png',
        images: ['/projects/images/learnly-1.png'],
        sourceCode: 'https://github.com/Navid-089/Learnly',
        year: 2023,
        description: `A tuition platform that connects tutors with students, handling discovery, scheduling, and batch management in one place.<br/><br/>

        Key features:
        <ul>
            <li>Tutor and student profiles with subject and availability matching</li>
            <li>Batch management for group tuition sessions</li>
            <li>Scheduling and enrolment tracking</li>
            <li>Oracle SQL backend with normalized relational schema</li>
        </ul>`,
        role: `Full-stack developer.<br/>
        - Built the frontend with React and Next.js.<br/>
        - Designed the Oracle SQL schema and wrote the queries powering matching and batch management.`,
    },
    {
        title: 'Moviepedia',
        slug: 'moviepedia',
        summary:
            'A multi-threaded client-server movie database with a JavaFX desktop interface.',
        techStack: ['Java', 'JavaFX', 'Networking', 'Multithreading'],
        thumbnail: '/projects/thumbnail/moviepedia.png',
        longThumbnail: '/projects/long/moviepedia.png',
        images: ['/projects/images/moviepedia-1.png'],
        sourceCode: 'https://github.com/Navid-089/Moviepedia',
        year: 2022,
        description: `A multi-threaded movie database manager with a desktop interface and real-time trading features between connected clients.<br/><br/>

        Key features:
        <ul>
            <li>Browse, search, and manage a shared movie database</li>
            <li>Real-time trading between users over a client-server connection</li>
            <li>Multi-threaded server handling concurrent client sessions</li>
            <li>JavaFX desktop interface</li>
        </ul>`,
        role: `Developer.<br/>
        - Implemented the multi-threaded server and client networking layer in Java.<br/>
        - Built the JavaFX interface for browsing and trading.<br/>
        - Handled concurrency and synchronization for the shared database state.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Lecturer',
        company: '[Presidency University](https://pu.edu.bd/)',
        duration: 'June 2026 - Present',
        description:
            'Teach undergraduate computer science courses and supervise undergraduate thesis projects in machine learning and bioinformatics.',
    },
    {
        title: 'Software and ML Engineer (part-time)',
        company: '[LimbicsAI](https://limbics.ai/)',
        duration: 'May 2025 - Present',
        description:
            'Applied machine learning and sensing for infrastructure monitoring. Co-developed a multimodal pavement assessment model (paper under review) and built its automated AWS data pipeline, modelled InSAR ground-deformation data, and implemented PSI/PCI pavement scoring. Set up the LoRaWAN sensor pipeline (ChirpStack, EMQX, InfluxDB) and a bridge scour monitoring test system, and rebuilt the company web front end.',
    },
    {
        title: 'Lead Organiser',
        company: '[BUET CSE Fest 2026](https://www.buetcsefest2026.com/)',
        duration: '2026',
        description:
            'Led the organising team of BUET CSE Fest 2026, a national technology festival that drew participants from more than 100 universities across Bangladesh. The fest ran seven major events: a hackathon, a capture-the-flag contest, an inter-university programming contest (IUPC), the DL Sprint deep learning competition, a game jam, a treasure hunt, and a cultural night. Secured the title sponsor and the supporting sponsors.',
    },
    {
        title: 'Logistics Director',
        company:
            '[BUET Cyber Security Club](https://www.linkedin.com/company/buetsec)',
        duration: 'May 2025 - May 2026',
        description:
            'Organised club events and competed in capture-the-flag competitions.',
    },
];

export const TEACHING = {
    institution: '[Presidency University](https://pu.edu.bd/)',
    terms: [
        {
            term: 'Fall 2026',
            courses: [
                { code: 'CSE 205', title: 'Object Oriented Programming' },
                {
                    code: 'CSE 206',
                    title: 'Object Oriented Programming Laboratory',
                },
                {
                    code: 'CSE 321',
                    title: 'Microprocessors and Embedded Systems',
                },
            ],
        },
        {
            term: 'Summer 2026',
            courses: [
                { code: 'CSE 109', title: 'Structured Programming Language' },
                {
                    code: 'CSE 110',
                    title: 'Structured Programming Language Laboratory',
                },
                { code: 'CSE 209', title: 'Digital Logic Design Laboratory' },
            ],
        },
    ],
};

export const MY_EDUCATION = [
    {
        degree: 'B.Sc. in Computer Science and Engineering',
        institution:
            '[Bangladesh University of Engineering and Technology (BUET)](https://www.buet.ac.bd/web/)',
        duration: '2022 - 2026',
        result: 'CGPA 3.96 / 4.00',
        note: "Thesis: kRISP-meR, a reference-free guide-RNA design tool for CRISPR/Cas9. Dean's List in all years.",
    },
    {
        degree: 'Higher Secondary Certificate',
        institution: '[Notre Dame College](https://ndc.edu.bd/), Dhaka',
        duration: '2018 - 2021',
        result: 'GPA 5.00 / 5.00',
        note: '',
    },
];

export const HONORS = [
    { title: "Dean's List, BUET", detail: 'All years', year: '2022 - 2026' },
    {
        title: 'University Merit Scholarship, BUET',
        detail: '',
        year: '2022 - 2026',
    },
    {
        title: 'BUET Technical Scholarship',
        detail: '',
        year: '2022 - 2026',
    },
    {
        title: 'Best UI/UX Award',
        detail: 'Hackathon, BUET CSE Fest',
        year: '2024',
    },
    {
        title: 'Runners-up',
        detail: 'Project Showcasing, IUT Skill Innovation Fest',
        year: '2024',
    },
    {
        title: 'Government General Scholarship',
        detail: 'HSC, SSC, and JSC',
        year: '2021, 2018, 2016',
    },
    {
        title: 'Regional Winner',
        detail: 'Bangladesh Junior Science Olympiad',
        year: '2018',
    },
];

export const SKILLS = [
    { area: 'Programming', items: 'Python, C/C++, Java' },
    {
        area: 'Machine learning',
        items: 'PyTorch, NumPy, Pandas, Matplotlib',
    },
    {
        area: 'Systems and networking',
        items: 'xv6, ns-3, LoRaWAN, Docker, Git',
    },
    { area: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
    {
        area: 'Web (working knowledge)',
        items: 'Node.js, React, Next.js, Spring Boot',
    },
    { area: 'Writing', items: 'LaTeX' },
];
