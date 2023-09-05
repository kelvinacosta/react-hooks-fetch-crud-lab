import React from "react";


function QuestionItem({ question,onDeleteQuestion,updateAnswer}) {
  
  // console.log(question)
  const { id, prompt, answers, correctIndex } = question;
  

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleClick(){
    // console.log('Deleting')

    fetch(`http://localhost:4000/questions/${id}`,{
      method: 'DELETE',
      //No body for delete fetch
    })
    .then(response=>response.json())
    .then(()=>onDeleteQuestion(id))
  }
  
  function handleAnswer(e){
    
    const newIndex = parseInt(e.target.value);
    
    fetch(`http://localhost:4000/questions/${id}`,{
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({correctIndex:newIndex})
      
    })
    .then(response=>response.json())
    .then(()=> {updateAnswer(id,newIndex)})//updateAnswer
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswer}>{options}</select>
      </label>
      <button onClick={handleClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
