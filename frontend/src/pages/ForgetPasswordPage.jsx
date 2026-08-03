import React from 'react'
import {assets} from '../assets/assets'
import LogoBar from '../components/LogoBar'

const ForgetPasswordPage = () => {
  return (
    <div className='form-details w-full'>
      <LogoBar />
      <div className='login-form flex justify-center pt-2'>
        <div className='form  w-96  h-auto p-4'>
          <div>
            <h1 className='text-5xl leading-tight'>Forget your password</h1>
            <p className='text-center text-gray-400 pt-6 text-sm'>A code will be sent to your email to help you reset password</p>
          </div>

          <div>
            <label className='text-xs'>Email</label>
            <input className='border w-full p-2 focus:outline-none rounded-md text-sm' type="email" name="" id="" placeholder='e.g: johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='sendEmail-btn text-center mt-4 '>
            <button className='bg-black p-3 w-full text-white rounded-md text-sm'>Reset Password</button>
          </div>
          <div className='pt-4 text-xs text-center'> 
            <img src={assets.leftarrow} alt="" className='inline-block w-4 h-4 mr-2' />
            
            <a href="/" className='text-gray-400 font-inter '>Back to login</a>
            </div>

        </div>

      </div>
    </div>
  )
}

export default ForgetPasswordPage
