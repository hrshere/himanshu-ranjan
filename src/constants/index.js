import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/rx1.jpg";
import project3 from "../assets/projects/ims1.jpg";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable Mobile and web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies and frameworks like Flutter, as well as back-end technologies like Django, DRF, PostgreSQL, and Firebase. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Associate Software Developer",
    company: "Mind IT Systems",
    description: `Developed and Deployed high-performance, cross-platform, scalable web and mobile apps for clients with flutter. Implemented RESTful APIs with Django and integrated with Postgres databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Flutter", "Django", "Python", "Dart", "Postgres","Deployment"],
    certLink:"https://minditsystems.com/"
  },
  {
    year: "Apr 2022 - May 2022",
    role: "CS Internship",
    company: "Virtually Testing Foundation",
    description: `Two months cohort based internship based on cybersecurity(Level-1)`,
    technologies: ["Mitre","Authentication", " Cyber security"],
    certLink:"https://verification.givemycertificate.com/v/b6586322-aa69-4e47-a1ab-12a11898c8a6"

  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Django Rest Framework", "pythonAnywhere", "Flutter", "Firebase"],
  },
  {
    title: "Driver-Customer Delivery Apps",
    image: project2,
    description:
      "An application for route planning and customization for drivers, with a seperate app for customers to track their deliveries, all managed from admin panel",
    technologies: ["Flutter", "REST APIs", "Maps", "Firebase","Live Tracking", "scan"],
  },
  {
    title: "Inventory Management System",
    image: project3,
    description:
      "An application with multiple roles, with ability to push, remove and audits products.",
    technologies: ["REST APIs", "Flutter", "Scan", "Audit","Role-based"],
  },
  {
    title: "Auth-POC",
    image: project4,
    description:
      "Simple CRUD based App, with JWT authentication, multiple login options like Google, Micrsosoft AAD, Local Auth(phone biometrics, pin etc)",
    technologies: ["Django", "DRF", "Flutter", "OAuth 2.0", "JWT", "Firebase"],
  },
];

export const CONTACT = {
  address: "Noida Sector 73, UP, India ",
  phoneNo: "+91-6201637212 ",
  email: "hrs21112001@gmail.com",
};
