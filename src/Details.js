
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo.jpg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import python from "./assets/techstack/python.png"
import react from "./assets/techstack/react.png";
import nodejs from "./assets/techstack/nodejs.png"
import redux from "./assets/techstack/redux.png";
import flask from "./assets/techstack/flask.png";
import sql from "./assets/techstack/sql.png";
import sqla from "./assets/techstack/sqla.png";
import sequelize from "./assets/techstack/sequelize.png";
import express from "./assets/techstack/express.png";
import postgresql from "./assets/techstack/postgresql.png";
import solidity from "./assets/techstack/solidity.png"
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
// Resume
import ResumeDownloadButton from "./Components/Resume"

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Nenita Espinosa",
  tagline: "I build modern and responsive web applications.",
  img: profile,
  about: `I am a fullstack software engineer with a passion for design.  
  My greatest strength is that I am very detail-oriented with astute problem-solving 
  and strategic thinking skills. I am a proven leader who loves to connect with 
  people of all ages and from different backgrounds in order to gain wisdom from 
  the life experiences of others. I am passionate about learning and can always 
  be found learning something new-- whether it's a new coding language, recipe, 
  or home improvement skill. My motto in life is "strive for excellence in every 
  endeavor and every interaction".`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/nenitae/",
  github: "https://github.com/nenitaE"
};

// Enter your Work Experience here
export const workDetails = [
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Sofware Engineer Bootcamp",
    Company: "App Academy",
    Location: "Online",
    Type: "Part Time",
    Duration: "Sep 2022 - Sep 2023",
  },
  {
    Position: "Fintech Bootcamp",
    Company: `University of North Carolina at Charlotte`,
    Location: "Online",
    Type: "Part Time",
    Duration: "Feb 2021 - Aug 2021",
  },
  {
    Position: "Doctor of Physical Therapy",
    Company: `Belmont University`,
    Location: "Nashville, TN",
    Type: "Full Time",
    Duration: "Aug 2008",
  },
  {
    Position: "Bachelor of Arts in Economics and Spanish",
    Company: `University of North Carolina at Chapel Hill`,
    Location: "Chapel Hill, NC",
    Type: "Full Time",
    Duration: "May 2000",
  }
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  python: python,
  react: react,
  redux: redux,
  sql: sql,
  sqla: sqla,
  postgresql: postgresql,
  flask: flask,
  express: express,
  sequelize: sequelize,
  nodejs: nodejs,
  solidity: solidity,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "taskWabbit",
    image: projectImage1,
    description: `A web application inspired by taskRabbit.com. 
    It allows users to book local individuals to complete task related jobs such as 
    painting, yard work, furniture building, etc. Allows a user to sign up as a “tasker”
    and set prices for different tasks they are available to perform.`,
    techstack: "HTML/CSS, JavaScript, Python, React, Redux, SqlAlchemy",
    previewLink: "https://taskwabbit.onrender.com/",
    githubLink: "https://github.com/nenitaE/TaskWabbit",
  },
  {
    title: "PT Connect",
    image: projectImage2,
    description: `An app that allows physical therapists and their patients to create an 
    account and connect with each other (similar to friend request). Once connected the 
    therapist can create exercise prescriptions that the patient can view and follow. The 
    therapist and patient can also interact via a messaging feature.`,
    techstack: "HTML/CSS, JavaScript, Python, React, Redux, SqlAlchemy",
    previewLink: "https://rehabportal.onrender.com/",
    githubLink: "https://github.com/nenitaE/PTConnect",
  },
  {
    title: "FlairBnB",
    image: projectImage3,
    description: `An app inspired by AirBnB. Allows owners to create listings of properties for 
    short term rentals. Users are able to view the properties and leave reviews.`,
    techstack: "HTML/CSS, JavaScript, Redux, React, Express",
    previewLink: "https://nenitae-airbnb.onrender.com/",
    githubLink: "https://github.com/nenitaE/AirBnB_project",
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "nenitaespinosa@gmail.com"
};
