import type { Experience } from "~/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Fullstack developer",
    employmentType: "Open Source contributor",
    company: {
      name: "LunCo",
      url: "https://lunco.space",
    },
    location: { name: "Remote" },
    start: "December, 2023",
    end: "February, 2024",
    description: [
      "Currently adding more features to the web faced product of LunCo",
      "Developed the official website of LunCo",
    ],
  },
  {
    title: "Robot Programmer",
    employmentType: "Internship",
    company: {
      name: "Research Lab Bangladesh",
      url: "https://www.facebook.com/ResearchLabCtg/",
    },
    location: { name: "Remote" },
    start: "December, 2023",
    end: "April, 2024",
    description: [
      "Developed robot firmwares with C++ & Python",
      "Gained experience in Arduino IDE & PlatformIO",
    ],
  },
  {
    title: "Student",
    employmentType: "Full-time",
    company: {
      name: "Martin Luther University",
      url: "https://rcsc.vercel.app",
    },
    location: {
      name: "On site",
      url: "https://rc.edu.bd",
    },
    start: "November, 2022",
    end: "December, 2023",
    description: [
      "Managed the IT department of the club",
      "Built the official website of the club",
      "Supervised competitive programming under Rajshahi College National Science Fest 2023",
    ],
  },
];
