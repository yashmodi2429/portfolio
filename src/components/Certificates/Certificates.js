import React, { Fragment } from 'react';
import javaScriptCert from '../../images/javascript_cert.png'
import nasscom from '../../images/nasscom.png';

const certificates = [
    {
      id: 1,
      name: "JavaScript Hacckerrank",
      image: javaScriptCert,
    },
    {
      id: 2,
      name: "Core Java",
      image: nasscom,
    },
  ];

export function Certificates() {
    return <>
    <h1> Education </h1>
    {certificates.map((item) => {
      return (
        <Fragment key={item.id}>
          <div className="display">
            <img className="max-width" src={item.image} alt={item.name} />{" "}
            <h2> {item.name} </h2>
          </div>
        </Fragment>
      );
    })}
  </>
}