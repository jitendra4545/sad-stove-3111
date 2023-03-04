import React from 'react'
import { Route, Routes } from 'react-router'
import { Dashboard } from '../pages/Dashboard'
import GameStart from '../pages/Gamestart'

export const AllRoutes = () => {
 return <Routes>
    <Route path='/' element={<GameStart/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>
}
