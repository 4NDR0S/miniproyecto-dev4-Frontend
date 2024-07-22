import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const noProfilePic = '../no-profile-pic.png'


export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        const response = await axios.get('http://localhost:8081/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) return <div>Cargando...</div>;

  return (
    <div className=''>
      <Header 
      usuario = {user.name}
      logoutFuntion = {handleLogout} />

      <div className='flex justify-center items-center'>
        <div>
          <h2 className='text-center text-[#000000] text-[36px] mt-6'>Personal Info</h2>
          <p className='text-center text-[18px] text-[#000000]'>Basic info, like your name and photo</p>
          
          <div className='w-[850px] rounded-md border-2 mt-10'>

            <div className='w-full flex justify-between items-center px-8 py-5'>
              <div>
                <h3 className='text-[#000000] text-[24px]'>Profile</h3>
                <p className='text-[#828282] text-[13px]'>Some info may be visible to toher people</p>
              </div>
              <button className='w-[95px]'><Link to='/edit' className='border-2 border-[#828282] text-[#828282] rounded-xl px-7 py-[6px]'>Edit</Link></button>
            </div>

            <hr/>

            <div>

              <div className=' flex py-2 px-8 items-center'>
                <p className='uppercase w-[230px] text-[#828282] text-[14px] '>photo</p>
                <div className='h-[72px] w-auto'>
                  <img src={noProfilePic} alt="profile pic"
                  className='h-full w-full' />
                </div>
              </div>

              <hr />

              <div className=' flex py-6 px-8 items-center'>
                <p className='uppercase w-[230px] text-[#828282] text-[14px]'>name</p>
                <h4 className='text-[18px] font-medium text-[#333333]'>{user.name}</h4>
              </div>

              <hr />

              <div className=' flex py-6 px-8 items-center'>
                <p className='uppercase w-[230px] text-[#828282] text-[14px]'>bio</p>
                <h4 className='text-[18px] font-medium text-[#333333]'>{user.bio}</h4>
              </div>

              <hr />

              <div className=' flex py-6 px-8 items-center'>
                <p className='uppercase w-[230px] text-[#828282] text-[14px]'>phone</p>
                <h4 className='text-[18px] font-medium text-[#333333]'>{user.phone}</h4>
              </div>

              <hr />

              <div className=' flex py-6 px-8 items-center'>
                <p className='uppercase w-[230px] text-[#828282] text-[14px]'>email</p>
                <h4 className='text-[18px] font-medium text-[#333333]'>{user.email}</h4>
              </div>

              <hr/>

              <div className=' flex py-6 px-8 items-center'>
                <p className='uppercase w-[230px] text-[#828282] text-[14px]'>password</p>
                <h4 className='text-[18px] font-medium text-[#333333]'>**********</h4>
              </div>

            </div>

          </div>

          <Footer/>

          {/* <div className='flex justify-end'>
            <button onClick={handleLogout} className='py-3 px-10 rounded-lg bg-red-500'>Cerrar Sesión</button>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}