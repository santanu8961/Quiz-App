import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom';
import Controllers from '../../Controllers/Controllers';
var control = new Controllers();

function DashBoardComp(){
    const [quiz, setquiz] = useState([]);

    if(quiz.length == 0){
        control.getAllquizes().then(t =>{ setquiz(t)});

    }





    return(<div style={{backgroundColor:'#d6ddf5',height:'100vh'}} id='DashBoardComp'>
        <div>
         <h1 style={{margin:"0"}}>    Welcome to CodeJudge </h1>
        </div>
        {quiz.map((q)=>
        (
           
                <div key={q.id} style={{height: '14vh',margin:'5vh',padding:'5vh 15vh',backgroundColor:'white'}} >
                <div style={{width:'80vh', float:'left'}}> 
                <h3 className={'quiz-list-'+q.id}>{q.name} </h3>
        <p>{q.description}</p>
                </div>
                <div style={{width:'20vh' ,bottom:'',  float:'right'}}>
               <Link to={'/quiz/'+q.id}> <button className={'start-quiz-'+q.id}>Start</button> </Link>
                </div>
                
            </div>
        ))}
        
       
        
    </div>
    );
}

export default DashBoardComp;