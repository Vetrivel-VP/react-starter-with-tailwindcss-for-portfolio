


import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,

} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uril: "https://www.facebook.com/heyatin.bashlangici/",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: "https://www.linkedin.com/in/agabala-karimli-317838a9/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: "https://github.com/karimliaghabala",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaYoutube,
    uril: "https://www.youtube.com/channel/UCkLcBRvZ52fFCTFexv5VUnA",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  
  {
    id: `openai-${Date.now()}`,
    name: "Fit Club",
    imgSrc: OpenAI,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `food-${Date.now()}`,
    name: "BakuDev studio",
    imgSrc: RestaurantClone,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Təhsil Portalı",
    imgSrc: CodePenClone,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Fireabse",
    imgSrc: PortfolioFirebase,
    gitURL: "https://github.com/karimliaghabala/tailwindcss-for-portfolio",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Travel",
    imgSrc: ChatApp,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "MegaTexnika",
    imgSrc: FreshJuiceUI,
    gitURL: "https://github.com/Vetrivel-VP",
  },
];
