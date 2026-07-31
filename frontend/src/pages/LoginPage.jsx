import React, { useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import LogoBar from '../components/LogoBar'

const LoginPage = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const useremail = 'fakhirshaukat@gmail.com';
    const userpassword = 'fakhir123'

    const handleLogin = () => {

        if(email === useremail && password === userpassword){
            alert("welcome user");
            navigate('/dashboard');
        }else{
            alert("Invalid email or password")
        }
    }

    return (
        <div className='form-details w-full'>
            <LogoBar />
            <div className='login-form flex justify-center pt-2'>
                <div className='form  w-96  h-auto p-4'>
                    <div>
                        <h1 className='text-5xl'>Login</h1>
                        <p className='text-sm pt-4 text-gray-400'>Hi, Welcome back </p>
                        <div className='google-btn mt-4 border p-2 text-center'>
                            <button className='text-sm'>Continue with Google</button>
                        </div>
                    </div>

                    <div className='divider mt-6 flex justify-center items-center gap-6 '>
                        <div className='w-full border h-0'></div>
                        <div className='text-gray-400 text-xs '>OR</div>
                        <div className='w-full border hs-0'></div>
                    </div>

                    <div className='placeholders space-y-4 mt-6 text-sm'>
                        <div>
                            <label className='text-xs'>Email</label>
                            <input className='border w-full p-2 focus:outline-none rounded-md' type="email" name="" id="" placeholder='e.g: johndoe@gmail.com' onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label className='text-xs'>Password</label>
                            <input className='border w-full p-2 focus:outline-none rounded-md' type="password" name="" id="" placeholder='Enter your password' onChange={(e)=>setPasword(e.target.value)} />
                        </div>
                        <div className='flex justify-between items-center text-xs'>
                            <p className='text-gray-600'><input type="checkbox" /> Remeber me</p>
                            <a href="/forget" className='text-blue-600 underline font-inter ' >Forget Pasword?</a>
                        </div>
                    </div>

                    <div className='login-btn text-center mt-8 '>
                        <button onClick={handleLogin}  className='bg-black p-3 w-full text-white rounded-md text-sm'>Login</button>
                    </div>

                    <div className='pt-4 text-xs font-inter '><p className='text-center text-gray-400'>Not registered yet? <a href="/signup" className='text-blue-600 underline font-inter'>Create an account</a></p></div>
                </div>

            </div>
        </div>
    )
}

export default LoginPage
