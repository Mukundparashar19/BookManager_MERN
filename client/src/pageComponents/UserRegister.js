import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'


export default function UserRegister() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate()

    const submit = (data)=>{
     axios.post('http://localhost:3311/register',data)
     .then((res)=>{
      alert(res.data.message)
      navigate('/userLog')
     })
     .catch((error)=>{
      console.log(error);      
     })  
      reset()
          }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Registration</h2>
      <form onSubmit={handleSubmit(submit)} className="mx-auto" style={{ maxWidth: '500px' }}>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
           {...register('email',
      {required:true,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/})}
          />
      {errors.email && <small className='text-danger'>Email not correct</small>}
        </div>
       
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter phone number"
            {...register('pho',{required:true , minLength:10, maxLength:10,})}
          />
          {errors.pho && <small className='text-danger'> enter 10 digit mobile number</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Set password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register('pass',{ required:true})}
          />
          {errors.pass && <small className='text-danger'> enter the password</small>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
        <Link to='/userLog' type="button" className="btn btn-primary w-100 mt-2">login</Link>
      </form>
    </div>
  )
}
