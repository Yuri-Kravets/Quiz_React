import React,{Component} from 'react';
import styleQuiz from './Quiz.modules.css';

class Quiz extends Component {
    render() {
        return (
          <div className={styleQuiz.Quiz}>
              <h1>Quiz</h1>
          </div>
        )
    }
}


export default Quiz;