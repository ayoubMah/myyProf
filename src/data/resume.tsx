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
    "Go",
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
        url: "",
        icon: Icons.x,

        navbar: false,
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
        "● Engineered and constructed the backend infrastructure for the GALILEOTM Surgical Planning platform, guaranteeing high-performance and scalability. Utilized technologies such as Node.js with TypeScript and PostgreSQL database to achieve optimal results.\n● Orchestrated 100% automated AWS Terraform Infrastructure as Code (IaC) setup for GALILEOTM Surgical Planning.\n● Crafted and integrated frontend components and modules for the GALILEOTM Surgical Planning platform, elevating user interface and experience. Leveraged Vue.js with TypeScript to ensure seamless functionality and enhanced user engagement.\n● Developed backend services for GALILEOTM RPM, resulting in a 50% performance improvement using Java 17 and Spring Boot to optimize system functionality and streamline operations.",
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
        "● Devised and Architected a comprehensive Serverless (AWS Lambda) solution, automating all organizational workflows and boosted operational efficiency by 60% and achieved a 40% cost reduction through automation, eliminating manual interventions.\n● Created a self service (CI/CD) portal which led to 95% automation for the other teams, reducing complexity by 90% and increasing performance by 85%.\n● Orchestrated comprehensive migrations from on-prem to AWS Cloud, enhancing data security and scalability while achieving a 30% reduction in downtime and a 20% increase in overall efficiency.\n● Deployed Kubernetes-based architectures on Amazon EKS, utilizing Gloo Microgateway for efficient traffic management and enhanced security.\n● Designed and deployed ArgoCD architecture for Kubernetes GitOps and continuous deployment, streamlining workflows and ensuring consistent application delivery.\n● Received multiple 'Reward and Recognition Awards' and 'Spot Awards' at the Asia level for exceptional performance and contributions.",
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
        "● Spearheaded intricate third-party integrations, elevating project functionality as a core development team member.\n● Authored new functionalities in an automation tool which helped in 90% reduction of manual boilerplate code writing.\n● Honored with an Excellence Award for outstanding contributions to the project in February 2019.\n● Successfully implemented critical functionality for a project, enabling 100% automated generation of custom Excel sheets, addressing key requirements overlooked by the product team.",
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
      title: "Go Struct Validator",
      href: "https://github.com/neo7337/go-struct-validator",
      dates: "Jan 2022 - Oct 2023",
      active: true,
      description:
        "A straightforward Golang validation library based on the core OpenAPI Specification (OAS). Inspired by the OAS approach, it facilitates the creation of generic structs and ensures comprehensive validation according to OAS standards.",
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
        "",
    },
  ],
  hackathons: [],
} as const;
