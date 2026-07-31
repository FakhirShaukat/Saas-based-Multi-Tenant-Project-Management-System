import React from 'react'
import LogoBar from '../components/LogoBar'

const SignUpPage = () => {
    return (
        <div className='form-details w-full'>
            <LogoBar />
            <div className='login-form flex justify-center pt-2'>
                <div className='form  w-96  h-auto p-4'>
                    <div>
                        <h1 className='text-5xl'>Sign Up</h1>
                        <p className='text-sm pt-4 text-gray-400'>Create new account </p>
                        <div className='google-btn mt-4 border p-2 text-center'>
                            <button className='text-sm'>Continue with Google</button>
                        </div>
                    </div>

                    <div className='divider mt-6 flex justify-center items-center gap-6 '>
                        <div className='w-full border h-0'></div>
                        <div className='text-gray-600 text-sm'>OR</div>
                        <div className='w-full border hs-0'></div>
                    </div>

                    <div className='placeholders space-y-2 mt-4 text-sm'>
                        <div>
                            <label className='text-xs'>Full Name</label>
                            <input className='border w-full p-2 focus:outline-none rounded-md' type="text" name="" id="" placeholder='Enter your name' />
                        </div>
                        <div>
                            <label className='text-xs'>Email</label> 
                            <input className='border w-full p-2 focus:outline-none rounded-md' type="text" name="" id="" placeholder='Enter your email' />
                        </div>
                        <div>
                            <label className='text-xs'>Password</label>
                            <input className='border w-full p-2 focus:outline-none rounded-md' type="password" name="" id="" placeholder='Enter your password' />
                        </div>

                    </div>

                    <div className='login-btn text-center mt-8 '>
                        <button className='bg-black p-3 w-full text-white rounded-md text-sm'>Sign Up</button>

                    </div>
                    <div className='pt-4 text-xs'><p className='text-center text-gray-400 font-inter'>Already have an account? <a href="/" className='text-blue-600 underline font-inter'>login</a></p></div>


                </div>

            </div>
        </div>
    )
}

export default SignUpPage
