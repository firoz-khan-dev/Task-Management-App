import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Form from './pages/Form'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App