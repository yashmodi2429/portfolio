import React, { useState } from "react";
import "./Skills.scss";
import { Buttons } from "../Buttons/Buttons";
import { Education } from "../Education/Education";
import { Certificates } from "../Certificates/Certificates";
import { PersonalInfo } from "../PersonalInfo/PersonalInfo";
import { UserSkills } from "../UserSkills/UserSkills";

const tabs = [
  {
    id: 1,
    name: "Skills",
  },
  {
    id: 2,
    name: "Education",
  },
  {
    id: 3,
    name: "Certificates",
  },
];

export function Skills() {
  const [options, setOptions] = useState(<UserSkills />);

  function renderSwitch(e) {
    const option = e?.target.textContent;
    switch (option) {
      case "Skills":
        return setOptions(<UserSkills />);
      case "Education":
        return setOptions(<Education />);
      case "Certificates":
        return setOptions(<Certificates />);
      default:
        return setOptions(<PersonalInfo />);
    }
  }

  return (
    <>
      {tabs.map((item) => {
        return (
          <span className="btn-outline" key={item.id}>
            <Buttons name={item.name} onClick={renderSwitch} />
          </span>
        );
      })}
      <div>{options}</div>
    </>
  );
}
