import React from 'react'
import { assets } from '../assets/assets'
import Sidebar from '../components/Sidebar'
import Searchbar from '../components/SearchBar'

const Dashboard = () => {
  return (
    <section className='flex w-full h-screen'>
      <Sidebar />
      <div className='content-side w-4/5 p-4'>
      
        <Searchbar />

        <div className='dashboard-info mt-4'>
          <h1 className='text-2xl font-semibold'>Dashboard</h1>
          <p className='text-gray-400 text-sm pt-2'>
            Welcome back, Fakhir Shaukat
          </p>
        </div>
      </div>
    </section>

  )
}

export default Dashboard
