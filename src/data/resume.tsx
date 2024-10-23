import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
    name: "Aditya Kumar",
    initials: "AK",
    url: "https://adityakumar.io",
    location: "Gurugram, India",
    locationLink: "https://www.google.com/maps/place/Gurugram,+Haryana",
    description:
        "Software Developer, Open-Source Enthusiast and a Trekker. I love building things and shaping ideas to life.",
    summary:
        "Passionate Full Stack Developer with over 5 years of experience in crafting innovative web solutions. Proficient in both frontend and backend technologies, I specialize in delivering high-quality, scalable applications that meet client needs and exceed expectations. My journey in software development has equipped me with a diverse skill set, including expertise in Java, Golang, React, Node.js, and Cloud Technologies.\n\nWith a keen eye for detail and a dedication to continuous learning, I am committed to staying abreast of the latest technologies and best practices in the ever-evolving field of web development. I am passionate about leveraging my expertise to contribute to innovative projects that make a difference.\n\nLet's connect and explore opportunities to collaborate on exciting ventures!",
    avatarUrl: "/me.png",
    skills: [
        "Golang",
        "Typescript",
        "Node.js",
        "NestJS",
        "React",
        "Vue.js",
        "Java",
        "Spring Boot",
        "Python",
        "Postgres",
        "Docker",
        "Kubernetes",
        "Serverless Architecture",
        "AWS",
        "GCP",
        "Shell Scripting"
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
        { href: "#projects", icon: CodeIcon, label: "Projects" },
    ],
    contact: {
        email: "hello@example.com",
        tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/neo7337",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/adi-kumar/",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/adityak007mr",
                icon: Icons.x,
                navbar: true,
            },
            Youtube: {
                name: "Youtube",
                url: "",
                icon: Icons.youtube,
                navbar: false,
            },
            email: {
                name: "Send Email",
                url: "mailto:labs.neo73@gmail.com",
                icon: Icons.email,
                navbar: true,
            },
        },
    },
    work: [
        {
            company: "MiRus, LLC",
            href: "",
            badges: [],
            location: "Remote",
            title: "Full Stack Developer",
            logoUrl: "",
            start: "March 2022",
            end: "Present",
            description:
                "Working as a Full Stack Developer building complex web applications for medical image analysis and processing.",
            tech: ["Node.js", "Typescript", "VueJS", "Docker", "Medical Image Processing", "AWS", "Spring Boot", "PostgreSQL"]
        },
        {
            company: "Macquarie Global Services Pvt. Ltd.",
            badges: [],
            href: "",
            location: "Remote/Gurugram, India",
            title: "Senior Associate",
            logoUrl: "",
            start: "November 2019",
            end: "February 2022",
            description:
                "As a Devops Engineer built multiple automation tools and worked on multiple Cloud Migrations from On-Prem to Cloud.",
            tech: ["Golang", "AWS Lambda", "Serverless Architecture", "Docker", "Kubernetes", "Helm", "GitOps", "AWS", "GKE", "Node.js", "CI/CD", "Spring Boot"]
        },
        {
            company: "Newgen Software Technologies",
            href: "",
            badges: [],
            location: "Gurugram, India",
            title: "Software Engineer",
            logoUrl: "",
            start: "July 2018",
            end: "October 2019",
            description:
                "Worked on multiple Complex Third-Party banking integrations and maintaining automation tools.",
            tech: ["Java", "Javascript", "SQL", "Integrations"]
        }
    ],
    education: [
        {
            school: "J.C. Bose University of Science and Technology,\nYMCA (Formerly YMCA UST)",
            href: "https://www.jcboseust.ac.in/",
            degree: "Bachelor's Technology in Information Technology (B. Tech.)",
            logoUrl: "",
            start: "2014",
            end: "2018",
        }
    ],
    projects: [
        {
            title: "trekYourWorld",
            href: "https://github.com/neo7337/trekYourWorld",
            dates: "May 2024 - Present",
            active: true,
            description:
                "trekYourWorld is an open source project made for the trekking/hiking community.",
            technologies: [
                "Node.js",
                "NestJS",
                "React",
                "MongoDB"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://trekyourworld.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "",
        },
        {
            title: "Golly",
            href: "https://github.com/nandlabs/golly",
            dates: "Jan 2022 - Present",
            active: true,
            description:
                "An Open-Source simple and powerful SDK for building Golang Applications.",
            technologies: [
                "Golang"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://pkg.go.dev/oss.nandlabs.io/golly",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "",
        },
        {
            title: "Go Struct Validator",
            href: "https://github.com/neo7337/go-struct-validator",
            dates: "Jan 2022 - Oct 2023",
            active: true,
            description:
                "An Open-Source Golang structs validation library based on the core OpenAPI Specification (OAS). Inspired by the OAS approach, it facilitates the creation of generic structs and ensures comprehensive validation according to OAS standards.",
            technologies: [
                "Golang"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://pkg.go.dev/github.com/neo7337/go-struct-validator",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "/projects/go-struct-validator.mp4",
        }
    ],
    hackathons: []
} as const;
