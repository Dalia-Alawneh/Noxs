import React, { useState } from 'react'

export default function Login() {
  function submitFormValue(e){
    e.preventDefault();   
  }
  function getFormValue(){}
  return (
    <div className="container margin w-75">
      <h2 className="mt-5">Login form</h2>
  <form className="mt-5 " onSubmit={submitFormValue}>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email</label>
    <input type="email" onChange={getFormValue}  className="form-control" id="Email" name="Email"/>
  </div>
  
  <div className="mb-4">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" onChange={getFormValue}  className="form-control" id="password" name="password"/>
  </div>

  <button type="submit" className="btn btn-primary mb-5 float-end">Login</button>
  <div className="clearFix"></div>
</form>
</div>
  )
}
