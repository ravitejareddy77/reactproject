import { useFormik } from 'formik'
import axios, { Axios } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const UpdateJournal= () => {


  let {id}=useParams()
  useEffect(()=>{

    let fetchdata= async()=>{
      let {data} =await axios.get(`http://localhost:3000/journals/${id}`)
      formik.setValues(data)
    }
    fetchdata()
  },[])

  let navigate=useNavigate()
    let homePage=()=>{
      setTimeout(()=>{
        navigate("/")
      },3000)
      
  
  }
  let formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      date: "",
      mode: "",
      location: "",
      image: ""

    },
    onSubmit: (details) => {
      console.log(details);
      axios.put(`http://localhost:3000/journals${id}`,details)
      toast("data updated successfully")

    }
  })

  let handleImageChange=(e)=>{
    let file=e.target.files[0]
    if(file){
      let reader=new FileReader()
    reader.onload=()=>{
      formik.setFieldValue("image",reader.result)
    }
    reader.readAsDataURL(file)
  }
}
  let {title, content, date, mode, location} = formik.values
  
  return <>
    <div id='crejnl'> UPDATE JOURNAL🗞️</div>
    <div id='journal'>
      <form id='form'   onSubmit={formik.handleSubmit}>
        <label htmlFor="text" >Title:</label>
        <input type="text" placeholder='Enter The Title' name='title'  required value={title} onChange={formik.handleChange} />

        <label htmlFor="contentarea">content:</label>
        <textarea id="contentarea " placeholder='content'   name='content' required value={content} onChange={formik.handleChange}></textarea>

        <label htmlFor="">Date:</label>
        <input type="date" name='date'  required value={date} onChange={formik.handleChange} />

        <label htmlFor="">Mode: </label>
        <select name="mode"  htmlFor="mode"value={mode}  required onChange={formik.handleChange}>
          <option value="select">select Mode</option>
          <option value="excited">Excited</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>


        </select>
        <label htmlFor="text">Location:</label>
        <input type="text" placeholder='Enter Your Location'  required name='location' value={location} onChange={formik.handleChange} />
        <label htmlFor="">Image:</label>

        <input type="file" name='image'   required onChange={handleImageChange}/>
        <div id='btns'>
          <button type='submit' id='submit' onClick={homePage}>update</button>
          <button  onClick={homePage}> back to home</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  </>
  
}

export default UpdateJournal