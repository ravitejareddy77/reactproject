import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./style.css"
import Home from './Components/Home'

import ViewJournal from './Components/ViewJournal'
import UpdateJournal from './Components/UpdateJournal'
import Errornotfound from './Components/Errornotfound'
import CreateJournal from './Components/CreateJournal'


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='create-journal' element={<CreateJournal/>}/>
        <Route path='view-journal/:id' element={<ViewJournal/>} />
        <Route path='update-journal/:id' element={<UpdateJournal/>}/>
        <Route path='errornotfound' element={<Errornotfound/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App