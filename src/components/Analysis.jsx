import clsses from "../styles/Analysis.module.css";
import Questions from "./Questions";

export default function Analysis() {
  return (
    <div className={clsses.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Questions />
    </div>
  );
}
