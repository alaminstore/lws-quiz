import React from "react";
import Checkbox from "./Checkbox";
import classes from "../styles/Answer.module.css";

const Answers = () => {
  return (
    <div className={classes.answer}>
      <Checkbox className={classes.answer} text="Another answer" />
    </div>
  );
};

export default Answers;
