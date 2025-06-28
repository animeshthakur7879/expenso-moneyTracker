import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import IncomePage from './pages/IncomePage'
import ExpensePage from './pages/ExpensePage'
import DashboardLayout from './Layout/DashboardLayout'

const App = () => {
  return (
    <div>
      <BrowserRouter>

          <Routes>

              <Route path='/' element={<Home/>} />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard/>} /> {/* / */}
                <Route path="income" element={<IncomePage />} />
                <Route path="expenses" element={<ExpensePage />} />
              </Route>


          </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
