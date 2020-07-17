import React, { Fragment } from "react";
import './About.scss';
import profile from "../../images/profile.jpeg";

export function About() {
  return (
    <>
    <Fragment>
     <div>
     <img className="curve" src={profile} alt="profile" />
     <h1>About</h1>
     <hr></hr>
     <p>I am a Software Engineer, highly skilled in MEAN / MERN Stack and 
       passionate for learing more
      </p>
     </div>
    </Fragment>
    </>
  );
}
