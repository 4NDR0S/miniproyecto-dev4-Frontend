import React, { useState, useEffect, useRef } from 'react';
import ProfileOptions from './ProfileOptions';

const noProfilePic = '../no-profile-pic.png';
const logo = '../devchallenges.svg';

export default function Header({ usuario, logoutFuntion }) {

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className='flex justify-between items-center py-4 px-16 relative'>
      <div className='w-[130px] h-[18px]'>
        <img src={logo} alt="logo devchallenges" />
      </div>

      <div className='w-auto h-[40px] flex'>
        <div className='h-[40px] w-auto'>
          <img src={noProfilePic} alt="profile pic" className='h-full w-full' />
        </div>
        <div className='flex items-center'>
          <h3 className='text-[16px] font-bold px-2'>{usuario}</h3>
          <button
            className='w-[24px] h-[24px] font-bold text-[24px] flex items-center'
            onClick={() => setShowModal(!showModal)}
          >
            ▴
          </button>
        </div>
      </div>

      {showModal && (
        <div ref={modalRef} className='absolute top-full right-0 mt-2'>
          <ProfileOptions 
          logout ={logoutFuntion}/>
        </div>
      )}
    </div>
  );
}
