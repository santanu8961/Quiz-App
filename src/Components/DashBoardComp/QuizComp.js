import React, { useState,useEffect } from 'react'
import { withRouter, RouteComponentProps } from "react-router";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Controllers from '../../Controllers/Controllers';
import ReportComp from './ReportComp';



function QuizComp(props) {
  //  console.log("query", props.match.params.id);
    var [qObj, setqObj] = useState({})
    var [qindex, setqindex] = useState(0);
    var [ansObj, setansObj] = useState({quiz_id:parseInt(props.match.params.id),mappings:[]});
    var [report,setreport] = useState({});

    const {initialSeconds = 15} = props;
    const [seconds, setSeconds ] =  useState(initialSeconds);
    var control = new Controllers();
    var myInterval = 0;
    if (Object.keys(qObj).length == 0) {
        control.getspecificquizes(props.match.params.id).then((res) => {
            setqObj(res);
           console.log(res)
        }

        )
    }

    function addAnswer(andId){
       
        var ans = ansObj;
        ans.mappings.push({
            ques_id:andId.split('#')[1],
            submitted_option:andId.split('#')[0]
        })
        
         setSeconds(15);
        setqindex(qindex+1)
        setansObj(ans);
      //  console.log(ansObj)
    }

   

  
    useEffect(()=>{
     myInterval = setInterval(() => {
      
        //alert(seconds)
            if (seconds > 0 && qindex < qObj.questions.length) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0 ) {
              
                   // setMinutes(minutes - 1);
                    setSeconds(15);
                    setqindex(qindex+1);
                    
                
            } 
            if(qindex == qObj.questions.length){
          
                clearInterval(myInterval);
                    control.getquizscore(ansObj).then(w => setreport(w));
               // console.log('its over');
               // setqObj({});
            }
    
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

//console.log((Object.keys(qObj).length !== 0) ,(qObj.questions[qindex].length > qindex))
//Please note that you can submit the solution multiple times.

    if (Object.keys(qObj).length !== 0 && qObj.questions.length > qindex ){
       //  console.log(qObj.questions[qindex].length > qindex)REACT_APP_API_URL=http://54.163.18.38:4060 npm start
       // console.log(qObj.questions[qindex].options.split(','))
        return (

            <div style={{}}>

                <div style={{ height: '8vh', padding: '3.5vh', backgroundColor: '#08c2bf' }}>
                    <h1 style={{ margin: '0', color: 'white' }}>{qObj.name}</h1>
                </div>
                <div style={{height:'10vh' , margin :'5vh'}} id='Timer'>
                    <div><Progress percent={(seconds/15)*100} status={'active'}  /></div>
        <div className='time-bar' style={{backgroundColor: 'white',textAlign:'left'}}>Time Remaining : {seconds > 9 ? "0:"+seconds : '0:0'+seconds}  / 0:15 seconds</div>
                </div>
                <div >
                    <div >
                        <div className={'question'} style={{ padding: '2vh', backgroundColor: 'white', margin: '2vh 10vh' }}><h2>{qObj.questions[qindex].name}</h2></div>
                        {
                            qObj.questions[qindex].options.split(',').map((q, i) => (
                                <div style={{  height:'5vh', backgroundColor: 'white', margin: '1vh 10vh' }}>
                                    <div style={{ backgroundColor:'#00ccff', height:'5vh', width: '10vh', float: 'left' }}> 
                                    <input checked={false} 
                                             onClick={(e) => { addAnswer(e.target.value) }} value={q+"#"+(qObj.questions[qindex].id)} 
                                             type='radio' 
                                             /> 
                                    </div> 
                                    <div style={{ padding:'1vh', textAlign:'left',width: '70vh', float: 'left' }} className={'answer-value-' + (i + 1)}>{q}</div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>

        )
    } 
    
    
    if(Object.keys(report).length !== 0) {
        
        return  <ReportComp reportData ={report} questions={qObj.questions} quizname = {qObj.name}/> 
    }

    return null;



}

export default withRouter(QuizComp);