import React, { Component } from 'react'
import '../ReactComp.css';

function ReportComp(props) {
   
    var reportData = props.reportData;
    console.log(props.reportData);

    return (<div style={{height:'80vh'}}>
        <div style={{backgroundColor:'gray',height:'8vh'}}><h1 style={{margin:'0vh',color:'white'}}>{props.quizname}</h1></div>
     
     
      
      <br />
            <h1 className={'score'}>Your score is {reportData.score} </h1>
        <div style={{height:'70vh' ,margin:'1vh 10vh 5vh', backgroundColor:'white'}} className={'ScoreComp'}>
            
            <div style={{height:'5vh' ,border:'1px solid black', backgroundColor:'#D3D3D3'}}>
                <p style={{textAlign:'left' ,margin:'0vh',padding:'1.5vh'}}> Answers</p>
            </div>
           {reportData.questions.map((report,i)=>(
           <div style={{textAlign:'left',paddingLeft:'5vh 3vh',margin:'2.5vh 0vh' ,fontSize:'12px', border:'0.2px solid gray'}}>
               <div style={{margin:'1vh'}} className={"question-"+(i+1)}>Question:{props.questions[i].name}</div>
           <div style={{margin:'1vh'}} className={"submitted-answer-"+(i+1)}>Your Answer: {report.submitted_option}</div>
               <div style={{margin:'1vh'}} className={"correct-answer-"+(i+1)}>Correct Answer: {report.correct_option}</div>
           </div>
           ))}
          
        </div>
        </div>

    )
}

export default ReportComp;