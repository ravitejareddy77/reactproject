import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./style1.css"

const ViewJournal = () => {
  let navigation=useNavigate()
  let home=()=>{
    navigation("/")
  }
   let[individual,setIndividual]=useState(null)
   let {id}=useParams()
   useEffect(()=>{
    let fetchdata=async ()=>{
      let {data}=await axios.get(`http://localhost:3000/journals/${id}`)
      setIndividual(data)
      console.log(data);
      

    }
    fetchdata()
   },[])
  return (<>
<div id='main'>{individual==null ? "loading":<div id='view-journal'>
  <button onClick={home}>-back</button>
  <div><h1>title:{individual.title}</h1>
  <article>
     <h1> content:{individual.content}</h1> 
   <h1> date:{individual.dob}</h1>
    <h1> mode:{individual.mode}</h1>
     <h1> location: {individual.location}</h1>
  </article>
  </div>
     <img src={individual.image} height={500} id='image'/>
  </div>
  }
  </div>
  </>
  )

}

export default ViewJournal