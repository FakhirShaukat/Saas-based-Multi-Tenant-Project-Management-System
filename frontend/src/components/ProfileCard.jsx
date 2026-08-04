import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const ProfileCard = () => {
    return (
        <div className='profile-card w-96 h-auto p-4 flex flex-col justify-between border  rounded-md shadow-md absolute right-8 top-14 z-10'>
            <div className='profile  flex flex-col items-center justify-center gap-2 mb-4'>
                <p className='text-sm text-gray-600 font-semibold'>fakhir.shaukat@example.com</p>
                <div className='profile-card pt-2'>
                    <img className='w-20' src={assets.profile} alt="" />

                </div>
                <p>Hi, Fakhir!</p>
                <p className='text-sm text-gray-600'>Contour Software</p>

            </div>

            <Link to='/login'>
                <div className='profile-actions mt-4 flex justify-center items-center gap-2 bg-red-500 text-white p-2 text-center rounded-md hover:bg-red-600'>
                    <img src={assets.logout} className='invert w-5 h-5' alt="" />
                    <button className=''>Logout</button>
                </div>
            </Link>

        </div>
    )
}

export default ProfileCard
