import AuthLayout from './layout/AuthLayout'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 

  return (

     <BrowserRouter>
      <Routes>
          <Route path="/" element={<AuthLayout/>}>

          </Route>
      </Routes>
     </BrowserRouter>
     
  )
}

export default App
