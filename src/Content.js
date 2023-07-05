// import images
import Hero_person from "./assets/images/Hero/My project.png";

import figma from "./assets/images/Skills/figma.png";
import Firebase from "./assets/images/Skills/firebase_logo_icon_171157.png";
import md from "./assets/images/Skills/mongodb_original_logo_icon_146424.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import javascript from "./assets/images/Skills/javascript_icon_130900.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/project-createor.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "AL",
    LastName: "MAMUN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "30+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        para: "Developing dynamic web experiences with JavaScript",
        logo: javascript,
        details: [
          "  Building interactive and dynamic web applications",
          "  Manipulating the DOM and handling events",
          "  Using ES6 features and modern JavaScript libraries",
          // Add more relevant details about JavaScript
        ],
      },
      {
        name: "React js",
        para: "Building interactive UIs with React.js",
        logo: reactjs,
        details: [
          " Building interactive user interfaces using React components",
          "  Working with React hooks and state management",
          "  Implementing React Router for navigation",
          // Add more relevant details about React.js
        ],
      },
      {
        name: "Node js",
        para: "Creating server-side applications with Node.js",
        logo: nodejs,
        details: [
          "  Building scalable and efficient server-side applications with Node.js",
          "  Working with Express.js framework for web development",
          "  Integrating with databases such as MongoDB or MySQL",
          // Add more relevant details about Node.js
        ],
      },
      {
        name: "Figma",
        para: "Designing stunning interfaces with Figma",
        logo: figma,
        details: [
          "  Creating high-fidelity UI designs and prototypes",
          "  Collaborating with team members on design projects",
          "  Exporting assets for development",
          // Add more relevant details about Figma
        ],
      },
      {
        name: "MongoDB",
        para: "Working with MongoDB for flexible data storage",
        logo: md,
        details: [
          "  Designing database schemas and collections",
          "  Querying and manipulating data using MongoDB queries",
          "  Working with indexes and aggregations",
          // Add more relevant details about MongoDB
        ],
      },
      {
        name: "Firebase",
        para: "Utilizing Firebase for seamless app development",
        logo: Firebase,
        details: [
          "  Setting up and managing Firebase projects",
          "  Authentication and user management",
          "  Real-time database and cloud storage integration",
          // Add more relevant details about Firebase
        ],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Application Development",
        para: "I specialize in developing custom web applications tailored to meet your business requirements. Using technologies like React.js and Node.js, I can create robust and scalable web solutions that enhance user experiences and drive growth.",
        logo: services_logo1,
      },
      {
        title: "Responsive Website Design",
        para: "I create visually stunning and user-friendly websites that adapt seamlessly to different devices and screen sizes. By leveraging modern design frameworks and techniques, I ensure your website looks and functions flawlessly across all platforms.",
        logo: services_logo1,
      },
      {
        title: "Website Optimization",
        para: "I optimize websites to improve performance, speed, and search engine rankings. Through techniques like code optimization, image compression, and caching, I enhance the overall user experience and help your website rank higher in search results.",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Snap School",
        image: project1,
        functionalities: [
          "Responsive website with mobile-friendly design.",
          "Multiple classes available for purchase.",
          "Payment integration for purchasing classes.",
          "User dashboard for managing classes, progress, and payments.",
          "Admin panel for managing classes, users, and payments.",
          "Instructor panel for creating and managing class content."
        ],
        link:"https://snap-school-9a91b.web.app/?fbclid=IwAR1ytr_gCqXgjNNKDtktf34_nV3VQIcK21ZuHSvu9Vp-6-A2gzkKno9MQwE"
      },
      {
        title: "Toy Marketplace",
        image: project2,
        functionalities: [
          "Responsive website with a focus on animal-based toy products.",
          "Categorized animal toy products available for browsing.",
          "User login required to view detailed toy information.",
          "User can add new toy listings, update existing listings, and delete listings.",
          "User-friendly interface for managing toy inventory.",
          "Interactive features to search, filter, and sort toy products."
        ],
        link:"https://toy-marketplace-d264c.web.app/?fbclid=IwAR3fTbR8jKJNA4VG-K3iwMxGD8UDgoXh0YWUfjHxas0DjrkU1aB8rN6QOlU"
      },
      {
        title: "Chef Pantry",
        image: project3,
        functionalities: [
          "Responsive website dedicated to showcasing chefs and their culinary skills.",
          "Profiles of popular chefs with information about their expertise.",
          "Popularity section highlighting trending recipes and chefs.",
          "Each chef has three signature dishes displayed.",
          "User login required to access detailed chef information and recipes.",
          "Engaging content and visuals to promote the culinary experience."
        ],
        link:"https://chef-recipe-hunter-clien-25663.web.app/?fbclid=IwAR0-VnVn1qxtLIChqIuoRXXu59DdxVfGdLElp_g3silAbTBEJDJUvM6nDIs"
      }
    ]},
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with  Al Mamun Shisir was an absolute pleasure.  He is an exceptional web developer who pays great attention to detail. [His/Her] expertise and professionalism helped bring my vision to life. I highly recommend  Al Mamun Shisir for any web development project.”",
        img: avatar1,
        name: "John Smith",
      },
      {
        review:
          "“I am extremely impressed with  Al Mamun Shisir's web development skills.  He created a beautiful and user-friendly website for my business. [His/Her] dedication to delivering a high-quality product was evident throughout the project. I would gladly work with  Al Mamun Shisir again.”",
        img: avatar2,
        name: "Jane Doe",
      },
      {
        review:
          "“I had the pleasure of collaborating with  Al Mamun Shisir on a web development project, and  He exceeded my expectations. [His/Her] expertise and creativity brought my ideas to life. I am grateful for  Al Mamun Shisir's professional approach and would highly recommend Him.”",
        img: avatar3,
        name: "Michael Johnson",
      },
      {
        review:
          "“ Al Mamun Shisir is a highly skilled web developer with an eye for detail.  He created a stunning website for my business and provided excellent support throughout the process. I am thrilled with the results and would choose  Al Mamun Shisir for future projects.”",
        img: avatar4,
        name: "Emily Wilson",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Experienced web developer dedicated to creating high-quality and engaging web applications. Let's collaborate on your next project!",
    btnText: "Hire Me",
  },

  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "almamunshsir770@gmail.com",
        icon: GrMail,
        link: "mailto:almamunshsir770@gmail.com",
      },
      {
        text: "+8801608831036",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "WebGenius",
        icon: BsInstagram,
        link: "https://www.instagram.com/shisir360/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
