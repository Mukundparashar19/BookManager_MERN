import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Books() {

const [finalBooks , setfinalBooks] = useState([])

  const getApprovedBook = async()=>{
    await axios.get('http://localhost:3311/shortliated') 
    .then((d)=>{
      setfinalBooks(d.data.data)
    })
  } 

  useEffect(()=>{
  getApprovedBook()
  },[])


  return (
       <div className='container'>
       
       <h1 className='text-center mt-2'>Books List</h1>



    <div className='d-flex flex-wrap gap-4 mt-2'>

 { finalBooks.map((d,index)=>{
   return <div class="card" key={index} style={{ width: "18rem" }}>
  <img src={`${d.image}`} class="card-img-top" alt="..."  style={{ height: "250px", objectFit: "cover" }}/>
  <div class="card-body  d-flex flex-column">
    <h5 class="card-title">{d.title}</h5>
    <p class="card-text">{d.condition}</p>
    <p class="card-text">{d.auther}</p>
  
  </div>
</div>
})  }



    </div>



    </div>
  )
}
