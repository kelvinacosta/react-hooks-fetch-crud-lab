import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questions,onDeleteQuestion,updateAnswer}) {
// console.log(questions)

// if (!questions || questions.length === 0) {
//   return <p>No questions available.</p>;
// }

const questionList = questions.map((question)=> <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} updateAnswer={updateAnswer}/>)
  
  return (
    <section>
      <h1>Quiz Questions</h1>
    
      <ul>{questionList}</ul>
      
    </section>
  );
}

export default QuestionList;
