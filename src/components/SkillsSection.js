import React from "react";
import Skill from "./Skill";
import { v4 as uuid } from "uuid";

function SkillsSection() {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      imageUrl:
        "https://bit.ly/3KjFXI5",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 2,
      name: "CSS3",
      imageUrl:
        "https://bit.ly/3KjFXI5",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 3,
      name: "Javascript",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFHMwwGukThzlHkEpa_yvVsOQ6ERHAL98to23lTKpcwvxpEWIDo09T9VB7H-q33pHAkU&usqp=CAU",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 4,
      name: "Bootstrap 4",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFHMwwGukThzlHkEpa_yvVsOQ6ERHAL98to23lTKpcwvxpEWIDo09T9VB7H-q33pHAkU&usqp=CAU",
      starsTotal: 3,
      starsActive: 1,
    },
    {
      id: 5,
      name: "React",
      imageUrl:
        "https://bit.ly/3KjFXI5",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 6,
      name: "MySQL",
      imageUrl:
        "https://bit.ly/3KjFXI5",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 7,
      name: "Python",
      imageUrl:
        "https://bit.ly/3KjFXI5",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 8,
      name: "Flask",
      imageUrl:
        "https://bit.ly/3KjFXI5",
      starsTotal: 3,
      starsActive: 2,
    },
  ];

  const finalSkillRow = [];

  for (let i = 0; i < skills.length / 4; i++) {
    let skillRow = skills.slice(i * 4, (i + 1) * 4);
    finalSkillRow.push(
      <div key={uuid()} className="d-flex justify-content-around py-3">
        {skillRow.map((skill) => (
          <Skill key={uuid()} skill={skill} />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-light w-100">
      <div className="container text-center py-5">
        <h1 className="font-weight-light">
          <span className="text-info">Technology</span> stack
        </h1>
        <div className="lead pb-5">
          I design, develop and deliver with these weapons
        </div>
        {finalSkillRow}
      </div>
    </div>
  );
}

export default SkillsSection;
