import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((index, option) => (
        <Checkbox
          className={classes.answer}
          text={option.title}
          value={index}
          onChange={(e) => handleChange(e, index)}
          checked={option.checked}
        />
      ))}
    </div>
  );
}
