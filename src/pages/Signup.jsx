import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Social from '../components/Social'

const logoMail = '../icons-mail.png'
const logoCandado = '../icon-candado.png'

const logo = '../devchallenges.svg'

export default function Signup() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await axios.post('http://localhost:8081/signup', values)
            console.log(res)
            navigate('/')
        } catch (err) {
            if (err.response && err.response.status === 409) {
                setError('Email already exists')
            } else {
                setError('An error occurred. Please try again.')
            }
            console.log(err)
        }
    }

    return (
        <div className=' min-h-screen flex items-center justify-center'>
            <div>
                <div className=' p-6 rounded-2xl border-2 border-[#BDBDBD] h-[640px] w-[470px]
            flex items-center justify-center'>
                    <div className='p-8'>
                        <div className='w-[130px] h-[18px]'>
                            <img src={logo} alt="logo devchallenges" />
                        </div>
                        <h2 className='font-semibold text-[18px] pt-6 pb-4 mr-20 text-[#333333]'>Join thousand of learners from around the world</h2>
                        <p className='text-[#333333] text-[16px] pr-8'>Master web development by making real-life project. There are multiple paths for you to choose</p>
                        <form onSubmit={handleSubmit} className='py-8'>
                            {error && <p className='text-red-500'>{error}</p>}
                            <div className='mb-3 flex h-12 border-2 border-[#BDBDBD] rounded-lg
                        bg-white'>
                                <img src={logoMail} alt="" className='px-3 py-3' />
                                <label htmlFor="email" className='flow-root'></label>
                                <input type="email" placeholder='Email' name='email'
                                    onChange={handleInput} className='h-full rounded-lg w-full' />
                            </div>

                            <div className='mb-5 flex h-12 border-2 border-[#BDBDBD] rounded-lg'>
                                <img src={logoCandado} alt="" className='px-3 py-3' />
                                <label htmlFor="password" className='flow-root'></label>
                                <input type="password" placeholder='Enter Password' name='password'
                                    onChange={handleInput} className='h-full rounded-lg w-full' />
                            </div>

                            <button type='submit' className='h-[38px] w-full bg-[#2F80ED] rounded-lg text-white'>Start coding now</button>
                        </form>

                        <p className='text-[#828282] text-center'>or continue with these social profile</p>

                        <Social/>

                        <div className='flex justify-center'>
                            <p className='text-[#828282]'>Already a memeber? <Link to='/login' className='cursor-pointer text-[#5c94df]'>Login</Link></p>
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
