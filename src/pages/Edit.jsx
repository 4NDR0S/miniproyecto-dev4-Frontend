import React, { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import axios from 'axios';

const back = "< Back"

const noProfilePic = '../no-profile-pic.png'

export default function Edit() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const response = await axios.put(
                'http://localhost:8081/usuario', 
                { email, password, name, phone, bio },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            navigate('/');

        } catch (error) {
            console.log('Error al editar el usuario:', error);
        }
    }

    return (
        <div>
            <Header usuario = {name}/>
            <div className='flex justify-center items-center'>
                <div>
                    <button><Link to='/' className='cursor-pointer text-[#5c94df] text-[18px]'>{back}</Link></button>

                    <div className='w-[850px] rounded-md border-2 mt-5 px-10 py-7'>
                        <h3 className='text-[#000000] text-[24px]'>Change Info</h3>
                        <p className='text-[#828282] text-[13px]'>Changes will be reflected to every services</p>

                        <div className=' flex py-6 items-center'>
                            <div className='h-[72px] w-auto'>
                                <img src={noProfilePic} alt="profile pic"
                                    className='h-full w-full' />
                            </div>
                            <p className='uppercase text-[#828282] text-[14px] pl-6'>change photo</p>
                        </div>

                        <form onSubmit={handleSubmit} className='w-[420px]'>

                            {/* name */}
                            <div>
                                <strong className='text-[13px] text-[#4F4F4F] font-medium'>Name</strong>
                                <div className='mb-5 h-[52px] border-2 border-[#BDBDBD] rounded-lg'>
                                    <label htmlFor="name" className='flow-root'></label>
                                    <input
                                        type="text"
                                        placeholder='Enter your name...'
                                        name='name'
                                        onChange={(e) => setName(e.target.value)}
                                        className='h-full rounded-lg w-full px-4'
                                    />
                                </div>
                            </div>

                            {/* bio */}
                            <div>
                                <strong className='text-[13px] text-[#4F4F4F] font-medium'>Bio</strong>
                                <div className='mb-5 h-[90px] border-2 border-[#BDBDBD] rounded-lg'>
                                    <label htmlFor="bio" className='flow-root'></label>
                                    <input
                                        type="text"
                                        placeholder='Enter your bio...'
                                        name='bio'
                                        onChange={(e) => setBio(e.target.value)}
                                        className='h-full rounded-lg w-full px-4'
                                    />
                                </div>
                            </div>

                            {/* phone */}
                            <div>
                                <strong className='text-[13px] text-[#4F4F4F] font-medium'>Phone</strong>
                                <div className='mb-5 h-[52px] border-2 border-[#BDBDBD] rounded-lg'>
                                    <label htmlFor="phone" className='flow-root'></label>
                                    <input
                                        type="text"
                                        placeholder='Enter your name...'
                                        name='phone'
                                        onChange={(e) => setPhone(e.target.value)}
                                        className='h-full rounded-lg w-full px-4'
                                    />
                                </div>
                            </div>

                            {/* email */}
                            <div>
                                <strong className='text-[13px] text-[#4F4F4F] font-medium'>Email</strong>
                                <div className='mb-5 h-[52px] border-2 border-[#BDBDBD] rounded-lg'>
                                    <label htmlFor="email" className='flow-root'></label>
                                    <input
                                        type="email"
                                        placeholder='Enter your email...'
                                        name='email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='h-full rounded-lg w-full px-4'
                                    />
                                </div>
                            </div>

                            {/* password */}
                            <div>
                                <strong className='text-[13px] text-[#4F4F4F] font-medium'>Password</strong>
                                <div className='mb-5 h-[52px] border-2 border-[#BDBDBD] rounded-lg'>
                                    <label htmlFor="password" className='flow-root'></label>
                                    <input
                                        type="password"
                                        placeholder='Enter your email...'
                                        name='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='h-full rounded-lg w-full px-4'
                                    />
                                </div>
                            </div>

                            <button type='submit' className='h-[38px] w-[82px] bg-[#2F80ED] rounded-lg text-white'>Save</button>
                        </form>

                    </div>

                    <Footer/>
                </div>
            </div>
        </div>
    )
}
