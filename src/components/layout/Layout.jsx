import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
         <div className="wrapper">
            <Sidebar />
            <Outlet />
         </div>
    </div>
  )
}

export default Layout