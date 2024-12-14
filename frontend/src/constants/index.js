import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with 1 year of experience in front-end technologies like React and Next.js and back-end expertise in Node.js, MySQL, PostgreSQL, and MongoDB. I thrive on crafting innovative solutions to drive growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, ,Express.js, Angular, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Technique Development and Support Intern",
    company: "Sysdesign LLC, New York, NY",
    description: `Partly managed and collaborated with a six-person team to develop software system solutions. Improved Availability and Partition Tolerance (CAP) by 20%. Facilitated cross-team collaboration, reducing project delays by 15%, and implemented best practices that increased productivity by 30%.`,
    technologies: ["Java", "Python", "Linux", "C++","C#","Shell","AWS"],
  },
  {
    year: "2018 - 2019",
    role: "Sales Account Manager",
    company: "Chengdu GUBT Industry Co., Ltd., Chengdu, China",
    description: `Managed business relationships, analyzed market trends, and improved client acquisition strategies. Increased outreach efficiency by 60%, generating over 100 new business inquiries monthly. Established cooperation with 10+ international companies and exceeded annual sales targets within six months.`,
    technologies: ["SEO", "Data Analysis", "Business Development"],
  },
];

export const PROJECTS = [
  {
    title: "Pleasantville Community Theater Group Database Design",
    image: project1,
    description:
      "Led a team of 4 to design and develop a fully functional relational database in SQL, managing memberships, donations, and ticket sales for the theater group.",
    technologies: ["SQL","MySql","Database Management System Design"],
  },
  {
    title: "FullStack E-Commerce Platform Website",
    image: project2,
    description:
      "Developed A fully functional e-commerce website with features like product listing, shopping cart, and user authentication and payment processing ",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "GraphQL","Bootstrap"],
  },


  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Developed a responsive portfolio website showcasing experiences, projects, skills, and contact information. Implemented server-side functionality with Express for managing form submissions.",
    technologies: ["HTML", "CSS", "JavaScript","React", "Tailwind", "Vite"],
  },

  {
    title: "Blog Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "New York, NY 10038 ",
  phoneNo: "0",
  email: "xialiu0801@gmail.com",
};
