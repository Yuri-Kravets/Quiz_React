import React from "react";
import styleActiveQuiz from './ActiveQuiz.modules.css';

const ActiveQuiz = props => (
  <div className={styleActiveQuiz.ActiveQuiz}>
    <p>
      <span>
        <strong>2.</strong>
        Как дела?
      </span>
    </p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
)
export default ActiveQuiz;