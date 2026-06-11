import type { About, Blog, Projects, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ryan",
  lastName: "Hall",
  name: "Ryan Hall",
  role: "Computer Engineering Student",
  avatar: "/images/Hall_Ryan_compressed.jpg",
  email: "rhall4500@gmail.com",
  timezone: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  location: "Rochester, NY | Raynham, MA",
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RyanHall5",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rhall4500/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bridging electronics, embedded software, and infrastructure</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Ryan, an aspiring embedded/hardware engineer at <Text as="span" size="xl" weight="strong">Rochester Institute of Technology</Text>, where I study Computer Engineering. Between classes, jobs, and extracurriculars, I build projects that help me better understand and improve the world around me. 
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ryan is a Computer Engineering student at Rochester Institute of Technology with a passion for embedded systems, hardware design, and building complete systems from the ground up. His projects span custom PCB development, sensing technologies, Linux infrastructure, and hardware-software integration, all driven by a desire to understand complex systems and create technology that solves real-world problems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "RIT Racing",
        timeframe: "2025 - 2026",
        role: "Electronics Team",
        achievements: [
            "Designed and developed custom PCB solutions for Formula SAE vehicle electronics, from component selection and circuit design through schematic capture, layout, and validation.",
            "Created dedicated testing and debugging hardware that improved the team's ability to verify, troubleshoot, and iterate on critical vehicle subsystems outside of the car.",
            "Worked across electrical, mechanical, and manufacturing disciplines to integrate reliable electronic systems into a competition vehicle operating under strict performance and regulatory constraints."
        ],
        images: [
          /**  optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },*/
        ],
      },
      {
        company: "RIT Honors Program",
        timeframe: "2025 - Current",
        role: "Office Student Worker",
        achievements: [
            "Maintained and enhanced the Honors Program website, developing new content and functionality while supporting existing web infrastructure.",
            "Supported the operations of a program serving approximately 800 students through data management, administrative coordination, and process improvement initiatives.",
            "Collaborated with students, faculty, advisors, and staff to organize events, manage communications, and improve the efficiency of program-wide workflows."
        ],
        images: [],
      },
      {
        company: "Modern Metal Design + New England Carriage",
        timeframe: "2021 - Current",
        role: "Metal Fabrication + Automotive Support Technician",
        achievements: [
            "Designed and manufactured custom metal products using CNC machinery, CAD software, and various fabrication processes including grinding, sanding, painting, and assembly.",
            "Performed automotive repair and restoration tasks involving mechanical systems, electrical work, diagnostics, bodywork preparation, and finishing operations.",
            "Worked across diverse project environments requiring technical troubleshooting, process efficiency, customer interaction, and coordination with multidisciplinary teams."
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Rochester Institute of Technology",
        description: <>Studying Computer Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Embedded Systems & Microncontrollers",
        description: ( // Switch to when ready: Developing embedded systems using industry-standard microcontrollers, integrating peripherals, communication protocols, sensors, and custom firmware to create reliable hardware-software solutions. 
          <>Developing embedded systems using industry-standard microcontrollers, communication protocols, sensors, and modified firmware.</>
        ),
        tags: [ // Add when ready: Embedded C FreeRTOS I2C SPI UART
          {
            name: "ESP32",
          },
          {
            name: "STM32",
          },
          {
            name: "KL05Z",
          },
          {
            name: "Arduino",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          /**{
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },*/
        ],
      },
      {
        title: "PCB Design & Electronics",
        description: (
          <>Designing electronic hardware from requirements through schematic capture, component selection, PCB layout, assembly, and validation using professional engineering workflows.</>
        ),
        tags: [// Add when ready: N/A
          {
            name: "Altium",
          },
          {
            name: "Schematic Design",
          },
          {
            name: "PCB Layout",
          },
          {
            name: "Schematic Design",
          },
          {
            name: "Circuit Design",
          },
          {
            name: "Component Selection",
          },
          {
            name: "Datasheet Analysis",
          },
          {
            name: "Power Calcs",
          },
          {
            name: "Soldering",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          /**{
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },*/
        ],
      },
      {
        title: "Digital Design and FPGA Development",
        description: (
          <>Creating digital systems using hardware description languages, simulation tools, and FPGA development workflows to implement and verify custom digital logic.</>
        ),
        tags: [// Add when ready: Verilog
          {
            name: "FPGA Development",
          },
          {
            name: "Quartus Prime Lite",
          },
          {
            name: "VHDL",
          },
          {
            name: "Digital Logic Design",
          },
          {
            name: "Simulation",
          },
          {
            name: "ModelSim",
          },
          {
            name: "Testbench Development",
          },
          {
            name: "Timing Analysis",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          /**{
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },*/
        ],
      },
      {
        title: "Linux & Infrastructure",
        description: (
          <>Deploying and managing Linux-based systems, self-hosted services, and development environments for personal projects.</>
        ),
        tags: [// Add when ready: Linux Ubuntu Docker Nextcloud Cloudflare Tailscale Bash SSH System Administration
          {
            name: "Ubuntu",
          },
          {
            name: "Docker",
          },
          {
            name: "Nextcloud",
          },
          {
            name: "Cloudflare",
          },
          {
            name: "Tailscale",
          },
          {
            name: "Bash",
          },
          {
            name: "SSH",
          },
          {
            name: "System Administration",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          /**{
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },*/
        ],
      },
      {
        title: "Testing & Validation",
        description: (
          <>Diagnosing and validating hardware and software systems using laboratory equipment, measurement techniques, and structured debugging methodologies.</>
        ),
        tags: [// Add when ready: Firmware Debugging Test Planning Signal Analysis
          {
            name: "Oscilloscopes",
          },
          {
            name: "Multimeters",
          },
          {
            name: "Function Generators",
          },
          {
            name: "Hardware Debugging",
          },
          {
            name: "Firmware Debugging",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          /**{
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },*/
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const projects: Projects = {
  path: "/projects",
  label: "Projects",
  title: "Learning by Building...",
  description: `See what ${person.name} has built recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal_04.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal_01.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical_01.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal_03.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical_02.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal_02.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical_03.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical_04.PNG",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, projects, work, gallery };
