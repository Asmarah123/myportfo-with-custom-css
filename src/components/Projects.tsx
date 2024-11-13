import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import '../app/styles/projects.css';

const data  = [
    {
        id: 0,
        title: "Currency Converter",
        description: "A html, css and javascript based app",
        img: "/pic5.jpg",
        tags: ["Html", "Css", "Javascript"],
    },

    {
        id: 1,
        title: "Todo List",
        description: "A React & Typescript based app",
        img: "/pic7.png",
        tags: ["React",  "Node", "Css", "Typescript"],
    },

    
    {
      id: 2,
      title : "Sign up page",
      description: "A html, css and javascript based Sign up page ",
      img: "/sign.png",
      tags: ["Html", "Css", "Javascript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
        <Heading title="My Projects" />
        <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
          {data.map((el)=>(
          <Card 
          key={el.id} 
          title={el.title}
          desc={el.description}
          img={el.img}
          tags={el.tags}/>
          ))}    
        </div>
    </div>
  );
};

export default Projects
