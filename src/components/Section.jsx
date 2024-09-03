import React from "react";
import { LavelContext } from "./LavelContext";

const Section = ({ level, children }) => {
  return (
    <>
      <LavelContext.Provider value={level}>
        <section className="section">{children}</section>
      </LavelContext.Provider>
    </>
  );
};

export default Section;
