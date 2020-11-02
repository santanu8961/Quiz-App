import axios from 'axios';



class Controllers {
    constructor(){
        this.backendUrl = process.env.REACT_APP_API_URL;
        this.headers = { 
            'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8',      
            'content-type': 'application/json'
        };
    }

    getAllquizes = async ()=>
    { 
        return await axios.get(`${this.backendUrl}/api/quiz/all`,{headers:this.headers}).then((res)=>{ return res.data });
        
    }

    getspecificquizes = async (id)=>
    { 
        return await axios.get(`${this.backendUrl}/api/quiz-questions/all/${id}`,{headers:this.headers}).then((res)=>{ return res.data });
        
    }

    getquizscore = async (ansObj)=>
    { 
        console.log('ansObj',ansObj)
        //axios.post()
        return await axios.post(`${this.backendUrl}/api/user/quiz-score`,ansObj,{headers:this.headers}).then((res)=>{ return res.data }).catch(err => {return err});
        
    }



    




   





}





export default Controllers;

