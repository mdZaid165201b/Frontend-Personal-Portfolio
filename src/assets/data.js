import { RiComputerLine } from "react-icons/ri";
import { CgServer, CgBrowser } from "react-icons/cg";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdOutlineExposure } from "react-icons/md";
import { GoDeviceMobile } from "react-icons/go";

import project1 from "./test.png";
import project2 from "./test2.png";
import {useSelector} from "react-redux";



export const servicesData = [
  {
    title: "FRONTEND DEVELOPMENT",
    desc: "Specializing in building intuitive and visually appealing user interfaces using the latest front-end technologies, including HTML, CSS, JavaScript, and React.",
    icon: <RiComputerLine className="text-gray-200 text-4xl" />,
  },
  {
    title: "BACKEND DEVELOPMENT",
    desc: "Specializing in building scalable and efficient back-end systems using Node.js and databases like MySQL and MongoDB.",
    icon: <CgServer className="text-gray-200 text-4xl" />,
  },
  {
    title: "WEB SCRAPPING",
    desc: "Expertise in web scraping and data extraction using Node.js to collect and analyze data from websites.",
    icon: <TbBuildingSkyscraper className="text-gray-200 text-4xl" />,
  },
  {
    title: "Browser Automation",
    desc: "Specializing in automating browser tasks and testing for efficient and effective web development using Node.js.",
    icon: <CgBrowser className="text-gray-200 text-4xl" />,
  },
  {
    title: "POS DVELOPMENT",
    desc: "Experienced in building robust and efficient Point of Sale (POS) systems using Node.js and modern front-end frameworks like React.",
    icon: <MdOutlineExposure className="text-gray-200 text-4xl" />,
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    desc: "Experienced in building robust and efficient Point of Sale (POS) systems using Node.js and modern front-end frameworks like React.",
    icon: <GoDeviceMobile className="text-gray-200 text-4xl" />,
  },
];

export const projectsData = [
  {
    title: "Real Estate Website",
    img: project1,
    stack: ["react.js", "node.js", "nest.js", "mongoDB", "express.js"],
  },
  {
    title: "Inventory Management System",
    img: project2,
    stack: ["Javascript", "HTML", "CSS", "Bootstrap", "Firebase"],
  },
  {
    title: "Real Estate Website",
    img: project1,
    stack: ["react.js", "node.js", "nest.js", "mongoDB", "express.js"],
  },
  {
    title: "Real Estate Website",
    img: project1,
    stack: ["react.js", "node.js", "nest.js", "mongoDB", "express.js"],
  },
  {
    title: "Real Estate Website",
    img: project1,
    stack: ["react.js", "node.js", "nest.js", "mongoDB", "express.js"],
  },
  {
    title: "Real Estate Website",
    img: project1,
    stack: ["react.js", "node.js", "nest.js", "mongoDB", "express.js"],
  },
];


export const OverviewData = [
  {
    title: "Total Projects",
    value: 25,
    bgFrom: "from-red-800",
    bgTo: "to-indigo-900",
    shadow: "red"
  },
  {
    title: "Completed Projects",
    value: 10,
    bgFrom: "from-lime-700",
    bgTo: "to-green-700",
    shadow:"lime"
  },
  {
    title: "Pending Projects",
    value: 15,
    bgFrom: "from-yellow-600",
    bgTo: "to-amber-800/80",
    shadow:"yellow"
  },
  {
    title: "Total Todos",
    value: 25,
    bgFrom: "from-emerald-800",
    bgTo: "to-teal-800",
    shadow:"purple"
  },
];

export const ProjectOverview = [
  {
    name: "Inventory Management System",
    assign: "MD ZAID",
    status: "Pending",
    deadline: "15/3/2023",
  },
  {
    name: "Inventory Management System",
    assign: "MD ZAID",
    status: "Active",
    deadline: "15/3/2023",
  },
  {
    name: "Inventory Management System",
    assign: "MD ZAID",
    status: "Complete",
    deadline: "15/3/2023",
  },
  {
    name: "Inventory Management System",
    assign: "MD ZAID",
    status: "Pending",
    deadline: "15/3/2023",
  },
  {
    name: "Inventory Management System",
    assign: "MD ZAID",
    status: "Pending",
    deadline: "15/3/2023",
  },
  {
    name: "Inventory Management System",
    assign: "MD ZAID",
    status: "Pending",
    deadline: "15/3/2023",
  },
];

export const TodoListData = [
  {
    title: "LeetCode Coding Problem 1",
    deadline: "16/3/2023",
    status: "Active",
  },
  {
    title: "Logical Thinking",
    deadline: "16/3/2023",
    status: "Pending",
  },
  {
    title: "NestJS Documentation Reading",
    deadline: "16/3/2023",
    status: "Active",
  },
  {
    title: "LeetCode Coding Problem 1",
    deadline: "16/3/2023",
    status: "Active",
  },
  {
    title: "LeetCode Coding Problem 10",
    deadline: "16/3/2023",
    status: "Complete",
  },
];
