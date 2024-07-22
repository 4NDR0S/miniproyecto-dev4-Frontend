import React from 'react';

const userIcon = '../icon-user.png';
const groupChatIcon = '../icon-group-chat.png'
const logoutIcon = '../icon-logout.png'

export default function ProfileOptions({ logout }) {
    return (
        <div className='w-[190px] p-4 mr-[70px] rounded-xl border-2 bg-white shadow-lg'>
            <div className='w-full px-3 bg-[#F2F2F2] h-[40px] flex items-center'>
                <img src={userIcon} alt="user icon" className='h-[20px]' />
                <p className='text-[13px] text-[#4F4F4F] pl-2 font-medium'>My Profile</p>
            </div>

            <div className='w-full px-3 rounded-lg h-[40px] flex items-center'>
                <img src={groupChatIcon} alt="group chat icon" className='h-[22px]' />
                <p className='text-[13px] text-[#4F4F4F] pl-2 font-medium'>Group chat</p>
            </div>

            <hr className='my-2' />

            <div className='mt-3'>
                <button onClick={logout} className='text-[#EB5757] flex items-center px-3
                font-medium'>
                    <img src={logoutIcon} alt="logout" className='h-[20px] mr-3' />Logout</button>
            </div>
        </div>
    );
}
