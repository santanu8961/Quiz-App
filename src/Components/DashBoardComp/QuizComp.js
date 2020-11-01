import React , {useState}from 'react'
import {withRouter, RouteComponentProps} from "react-router";
import Controllers from '../../Controllers/Controllers';



function QuizComp(props){
    console.log("query",props.match.params.id );
    var [qObj , setqObj] = useState({})
    var [qindex , setqindex] = useState(0);
    var [ansObj,setansObj] = useState({});
    var control = new Controllers();
    if(Object.keys(qObj).length == 0 ){
        control.getspecificquizes(props.match.params.id).then((res)=>
        {
            setqObj(res);
        }
        
        )
    }
    
 
   
   if(Object.keys(qObj).length !== 0 ){
      // console.log(qObj)
    console.log( qObj.questions[qindex].options.split(','))
    return (
       
        <div style={{}}>
          
            <div  style={{height:'8vh',padding:'3.5vh',backgroundColor:'#08c2bf'}}> 
    <h1 style={{margin:'0',color:'white'}}>{qObj.name}</h1>
            </div>
            <div>
            
            </div>
            <div >
                <div className={'question'}>
    <div>{  qObj.questions[qindex].name}</div>
                    {
                        qObj.questions[qindex].options.split(',').map((q,i) =>(
                            <div className={'answer-value-'+(i+1)}><input onClick={()=>{}} value={q} type='radio' />{q}</div>
                        ))
                    }
   
  
                </div>
            </div>
        </div>
      
    )
   }else{
    return null;
   }


}

export default withRouter(QuizComp);