import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestion] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(response=> response.json())
    .then(data=>setQuestion(data))
    .catch(error=>console.error("Error Getting Question: ",error))
  },[])

  function handleAddQuestion(newQuestion){
    setQuestion([...questions,newQuestion])
  }
  

  function deletingQuestion(questionToDelete) {
    
    const updatedQuestions = questions.filter((question) => question.id !== questionToDelete);
    
    
    setQuestion(updatedQuestions);
  }
  

  function updatingAnswer(updateQuestion){
    const updatingQuestions = questions.map((item)=>{
      if(item.id === updateQuestion.id){
        return updateQuestion;
      }else{
        return item;
      }
    })
    setQuestion(updatingQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={handleAddQuestion}/> : <QuestionList questions={questions} onDeleteQuestion={deletingQuestion} updateAnswer={updatingAnswer}/>}
    </main>
  );
}

export default App;
