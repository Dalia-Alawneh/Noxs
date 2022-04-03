import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'

export default function Register() {
  let [user,setUser]=useState({
    FirstName:'',
    LastName:'',
    Age:'',
    Email:'',
    password:''
  });
  let [ErrorList,setErrorList]=useState([]);
  function submitFormValue(e){
      e.preventDefault();
      let validateResult=ValidateData();
      if(validateResult.error){
        setErrorList(validateResult.error.details);
      }else{
// let {data}=await axios.post('',user) ; ****** post data in API Link to database *****
      }
     // displayError();
console.log(ErrorList);
  }
  function getFormValue(e){
    let myUser = {...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
    
  } 

  function ValidateData(){
    const schema=Joi.object({
      FirstName:Joi.string().required().min(3).max(20),
      LastName:Joi.string().required().min(3).max(20),
      Age:Joi.number().required().min(13).max(60),
      Email:Joi.string().required().email({minDomainSegments:3 , tlds:{allow:['com', 'net', 'org']}}),
      password:Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
    return schema.validate(user , {abortEarly:false});
  }
  let [errorItem,setError]=useState({
    message:'',
    id:''
  });
  // function displayError(){
  //   let myError={...errorItem};
    
  //   ErrorList.map((error,index)=>{
  //     myError['message']=error.message;
  //     myError['id']=index;
  //     setError({myError});
  //   });
      
  // }
  return (<>
    <div >
       {ErrorList.map((error,index)=>
        <div className="alert alert-danger mt-3 w-100" key={index}>{error.message}</div>
    )}
      <div className="container margin w-75">
      <h2 className="mt-5 ">Regestration form</h2>
  <form className="mt-5 " onSubmit={submitFormValue}>
  <div className="mb-3">
    <label htmlFor="First-Name" className="form-label">First Name</label>
    <input type="text" onChange={getFormValue} className="form-control" id="First-Name" name="FirstName" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="Last-Name" className="form-label">Last Name</label>
    <input type="text" onChange={getFormValue}  className="form-control" id="Last-Name" name="LastName" />
  </div>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email</label>
    <input type="email" onChange={getFormValue}  className="form-control" id="Email" name="Email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Age" className="form-label">Age</label>
    <input type="number" onChange={getFormValue}   className="form-control" id="First-Name" name="Age"/>
  </div>
  <div className="mb-4">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" onChange={getFormValue}  className="form-control" id="password" name="password"/>
    <h6>{errorItem['message']}</h6>
  </div>

  <button type="submit" className="btn btn-primary mb-5 float-end">Register</button>
  <div className="clearFix"></div>
</form>
</div>
    </div>
    </>
  )
}
