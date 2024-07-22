import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Social from '../components/Social'

const logoMail = '../icons-mail.png'
const logoCandado = '../icon-candado.png'

const logo = '../devchallenges.svg'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://localhost:8081/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/')
        } catch (error) {
            console.log('Erros al iniciar sesion:', error)
        }
    }

    return (
        <div className=' min-h-screen flex items-center justify-center'>
            <div>
                <div className=' p-6 rounded-2xl border-2 border-[#BDBDBD] h-[545px] w-[470px]
        flex items-center justify-center'>
                    <div className='p-8'>
                        <div className='w-[130px] h-[18px]'>
                            <img src={logo} alt="logo devchallenges" />
                        </div>
                        <h2 className='font-semibold text-[18px] pt-6 w-[354px] text-[#333333]'>Login</h2>
                        <form onSubmit={handleSubmit} className='py-8'>
                            <div className='mb-3 flex h-12 border-2 border-[#BDBDBD] rounded-lg
                    bg-white'>
                                <img src={logoMail} alt="" className='px-3 py-3' />
                                <label htmlFor="email" className='flow-root'></label>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='h-full rounded-lg w-full'
                                />
                            </div>

                            <div className='mb-5 flex h-12 border-2 border-[#BDBDBD] rounded-lg'>
                                <img src={logoCandado} alt="" className='px-3 py-3' />
                                <label htmlFor="password" className='flow-root'></label>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    name='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='h-full rounded-lg w-full' />
                            </div>

                            <button type='submit' className='h-[38px] w-full bg-[#2F80ED] rounded-lg text-white'>Login</button>
                            
                        </form>

                        <p className='text-[#828282] text-center'>or continue with these social profile</p>

                        <Social />

                        <div className='flex justify-center'>
                            <p className='text-[#828282]'>
                                Don't have an account yet? <Link to="/signup" className='cursor-pointer text-[#5c94df]'>Register</Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className=' flex justify-between mt-4'>
                    <p className='text-[#828282]'>created by <span className='cursor-pointer font-bold underline'>andros</span></p>
                    <p className='text-[#828282]'>devChallenges.io</p>
                </div>
            </div>
        </div>
    )
}
