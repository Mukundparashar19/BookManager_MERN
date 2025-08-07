import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

export default function UserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
    const navigate = useNavigate()

  const submit = async(data) => {
    await axios.post('http://localhost:3311/login',data)
    .then((d)=>{
        const resData = d.data.status
        if(resData == 201){
          alert(d.data.message)
          localStorage.setItem('settoken',d.data.token)
          navigate('/dashboard')
        }
        if(resData == 420){
        alert(d.data.message)
        }
        if(resData == 404){
          alert(d.data.message)
        }
    })
    .catch((error)=>{
      console.log(error);
      })

    reset();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Login</h2>
      <form
        onSubmit={handleSubmit(submit)}
        className="mx-auto"
        style={{ maxWidth: "500px" }}
      >
        
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && (
            <small className="text-danger">Email not correct</small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("pass", { required: true })}
          />
          {errors.pass && (
            <small className="text-danger"> enter the password</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-2">
          login
        </button>
      </form>
    </div>
  );
}
