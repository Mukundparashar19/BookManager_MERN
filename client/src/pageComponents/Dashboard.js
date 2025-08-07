import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate()
 const gettoken = localStorage.getItem('settoken')

  const submit = async(data) => {
     await axios.post('http://localhost:3311/bookpending',data,{headers:{Authorization:`Bearer ${gettoken}`}})
     .then((res)=>{ 
         alert(res.data.message)
         })
     .catch((err)=>{
            if(err.status == 420){
              console.log('unknown user');
              navigate('/userLog')
               }
     } )
 reset();
  };

  useEffect(()=>{
if(!gettoken){
 navigate('/userLog')
}
  },[])

  return (
    <div>
      {/* through login  */}

      <div className="d-flex flex-column align-items-center">
        <h1> Welcome</h1>
        <h1> Post your book suggession </h1>
      </div>

      <form onSubmit={handleSubmit(submit)} className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label className="form-label">Titel</label>
          <input type="text" className="form-control" {...register("title", { required: true })} />
           {errors.title && (
            <small className="text-danger"> enter the title</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Auther</label>
          <input type="text" className="form-control" 
            {...register("auther", { required: true })} />
        {errors.auther && (
            <small className="text-danger"> enter the auther</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Condition</label>
          <input type="text" className="form-control" {...register("condition", { required: true })} />
           {errors.condition && (
            <small className="text-danger"> enter the condition</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input type="text" className="form-control"  {...register("image", { required: true })} />
           {errors.image && (
            <small className="text-danger"> enter the image</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-2">
          request
        </button>
      </form>
    </div>
  );
}
