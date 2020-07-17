import React, { Fragment } from "react";
import './Education.scss';
import hiet from '../../images/hiet.png'
import ddps from '../../images/ddps.jpg'

const education = [
  {
    id: 1,
    name: "Hi-Tech Institue of Engg. & Tech",
    image: hiet,
  },
  {
    id: 2,
    name: "DehraDun Public School",
    image: ddps,
  },
];

export function Education() {
  return (
    <>
    <h1> Education </h1>
    {education.map((item) => {
      return (
        <Fragment key={item.id}>
          <div className="display">
            <img className="max-width img-filter" src={item.image} alt={item.name} />{" "}
            <h2> {item.name} </h2>
          </div>
        </Fragment>
      );
    })}
  </>
  );
}
