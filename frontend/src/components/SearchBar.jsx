import React from 'react'
import { assets } from '../assets/assets'
import ProfileCard from './ProfileCard';

const Searchbar = () => {

    const [openProfile, setOpenProfile] = React.useState(false);

    const handleProfileClick = () => {
        setOpenProfile((prev) => !prev);
    }


    return (
        <div className='navbar flex justify-between items-center w-full'>
            <div className='searchbar w-1/2 text-sm'>
                <input type="text" placeholder='Search...' className='border rounded-md p-2 w-full focus:outline-none' />
            </div>
            
            <div onClick={handleProfileClick} className='relative profile rounded-full p-4 w-12 h-12 bg-gray-200 flex items-center justify-center'>
                <button>FS</button>


                {openProfile && <ProfileCard/>}
            </div>
        </div>

    )
}

export default Searchbar
