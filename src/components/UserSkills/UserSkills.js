import React, { Fragment } from "react";
// import reactjs from "../../images/reactjs.png";
import reactjs from "../../images/gif/reactjs.gif";
import nodejs from "../../images/nodejs.png";
import express from "../../images/express.png";
import mongodb from "../../images/mongodb.png";
// import angular from "../../images/angular.png";
import angular from "../../images/gif/Angular.gif";
import "./UserSkills.scss";

const techStack = [
  {
    id: 1,
    name: "React",
    image: reactjs,
  },
  {
    id: 2,
    name: "Node",
    image: nodejs,
  },
  {
    id: 3,
    name: "Angular",
    image: angular,
  },
  {
    id: 4,
    name: "MongoDB",
    image: mongodb,
  },
  {
    id: 5,
    name: "Express",
    image: express,
  }
];

export function UserSkills() {
  return (
    <>
      <h1> Technical Skills </h1>
      {techStack.map((item) => {
        return (
          <Fragment key={item.id}>
            <div className="display">
              <img className="max-width" src={item.image} alt={item.name} />{" "}
              <h2> {item.name} </h2>{" "}
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
