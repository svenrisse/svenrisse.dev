import type { Experience } from "~/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Junior Fullstack developer",
    employmentType: "Full-time",
    company: {
      name: "Whiskey Tango Foxtrot GmbH",
      url: "https://www.wtfoxtrot.de/de/",
    },
    location: { name: "Remote" },
    start: "July, 2024",
    end: "Present",
    description: ["TBD :)"],
  },
  {
    title: "Vocational Education / Ausbildung",
    employmentType: "Full-time",
    company: {
      name: "Haendlerbund GmbH",
      url: "https://www.haendlerbund.de/de/",
    },
    location: { name: "Remote / On site" },
    start: "September, 2022",
    end: "June, 2024",
    description: [
      'Completed the "Ausbildung zum Fachinformatiker fuer Anwendungsentwicklung".',
      "Studied the basics of web development: HTML, CSS & JavaScript.",
      "Learned TypeScript, React.js & Next.js and started working in real projects as a fullstack developer",
      "Worked in developer teams and utilized GitHub/Gitlab, Code Reviews & agile methods.",
      "Contributed substantially to the Shopauskunft relaunch, implementing most of the frontend code & infrastructure.",
      "Got used to working with tools like JIRA, Confluence, Figma & Slack.",
    ],
  },
  {
    title: "Soldier",
    employmentType: "Full-time",
    company: {
      name: "Bundeswehr",
      url: "https://www.bundeswehr.de/en/",
    },
    location: {
      name: "On site",
    },
    start: "October, 2020",
    end: "July, 2022",
    description: [
      "After deciding to quit my studies, corona was starting to gain traction in europe and with the situation being unpredictable I decided to join the military for my voluntary service.",
      "I worked in the medical service in a doctor's office for soldiers. My main tasks where organizing and communicating with patients while also ensuring the doctors could work without any hinderance.",
      "Of course I learned a huge amount and matured a lot like you would expect from 2 years serving in the military. This was also the time when I started coding for fun in my free time and found my passion for web development and decided to pursue a career in software development.",
    ],
  },

  {
    title: "Student",
    employmentType: "Full-time",
    company: {
      name: "Martin Luther University",
      url: "https://www.uni-halle.de/",
    },
    location: {
      name: "On site",
    },
    start: "October, 2018",
    end: "September, 2020",
    description: [
      "After completing my A-Levels in 2018, I decided to start studying to be a teacher for Math and English in Halle",
      "I learned a lot while in university like organizing my work and being independent while also greatly increasing my communication and team skills. Of course my proficiency in english increased tremendously as well.",
      "Unfortunatly I had to realize that teaching was not the path I intend to tread for life.",
    ],
  },
];
