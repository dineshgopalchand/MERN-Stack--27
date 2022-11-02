import React from 'react'
import LoginForm from './LoginForm';

export const Login = () => {
  return (
    <div>
      <div className=" m-5 d-flex justify-content-center align-items-center ">
        <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
          <h2 className="text-center mb-4 text-primary">Login Form</h2>
          <LoginForm/>
          <div className="mt-3">
            <p className="mb-0  text-center">Don't have an account? <a href="signup.html"
              className="text-primary fw-bold">Sign
              Up</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;