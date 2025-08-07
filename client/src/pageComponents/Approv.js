import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Approv() {

  const [allBook , setallBook] = useState([])

  const getBook = async()=>{
    await axios.get('http://localhost:3311/pendinglist') 
    .then((d)=>{
      setallBook(d.data.data)
    })
  } 

  useEffect(()=>{
  getBook()
  },[])

const del = (id)=>{
  axios.delete(`http://localhost:3311/del/${id}`)
  .then((d)=>{
    getBook()
  })
}  


const finalPost =(data)=>{
   const {_id,__v, ...cleanedData} = data
  console.log(cleanedData);
  
  axios.post('http://localhost:3311/finalbooks',cleanedData)
  .then((res)=>{
    alert(res.data.message)
    del(_id)
  })
  .catch((err)=> console.log(err))
}
    




  return (


    <div className='container'>
       
       <h1 className='text-center mt-2'>Pending books</h1>



    <div className='d-flex flex-wrap gap-4 mt-2'>

{allBook.length == 0? <h1 className='text-warning'> no pending books.....</h1>  :allBook.map((d,index)=>{
   return <div class="card" key={index} style={{ width: "18rem" }}>
  <img src={`${d.image}`} class="card-img-top" alt="..."  style={{ height: "250px", objectFit: "cover" }}/>
  <div class="card-body  d-flex flex-column">
    <h5 class="card-title">{d.title}</h5>
    <p class="card-text">{d.condition}</p>
    <p class="card-text">{d.auther}</p>
    <div className=' mt-auto d-flex gap-2'>
    <button onClick={()=>finalPost(d)} class="btn btn-primary">Accept</button>
    <button onClick={()=>del(d._id)} class="btn btn-primary">Decline</button>
    </div>
  </div>
</div>
})  }

 

    </div>



    </div>
  )
}
