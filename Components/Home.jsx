import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import "./style1.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate = useNavigate()
  let [journalData, setJournalData] = useState(null)
  useEffect(() => {
    let fetchdata = async () => {
      let { data } = await axios.get("http://localhost:3000/journals")
      setJournalData(data)

    }
    fetchdata()
  }, [])

  // let navigation=useNavigate()
let handleDelete=(id)=>{
axios.delete(`http://localhost:3000/journals/${id}`)
location.reload()
}
  return (<>
    <NavBar />
    <div id='tabledata'>
      <h1 id='emcheddam'>JOURNAL DATA</h1>
      <table rules='all' border={2} width="100%" cellPadding={20}>
        <thead>
          <tr id='heading'>
            <th>id</th>
            <th>title</th>
            <th>content</th>
            <th>date</th>
            <th>mood</th>
            <th>location</th>
            <th>image</th>
            <th>buttons</th>
          </tr>
        </thead>

        <tbody>
          {journalData == null ? <tr><td>loading....</td></tr> : journalData.map((journal, index) => {

            return <tr key={journal.id}>
              <td>{journal.id}</td>
              <td>{journal.title}</td>
              <td>{journal.content}</td>
              <td>{journal.date}</td>
              <td>{journal.mode}</td>
              <td>{journal.location}</td>
              <td><img src={journal.image} height={200} width={300} id='img' /></td>
              <td>
                <button onClick={() => navigate(`view-journal/${journal.id}`)}>view</button><br />
                <button onClick={()=>navigate(`update-journal/${journal.id}`)}>update</button><br />
                <button onClick={()=>{handleDelete(journal.id)}}>delete</button>
              </td>

            </tr>
          },)
          }
        </tbody>
      </table>
    </div>

  </>
  )
}

export default Home