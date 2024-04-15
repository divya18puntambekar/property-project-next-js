"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchUser } from '../utils/request'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import profileDefault from '../../assets/images/profile.png';
const page = () => {
  const { data: session } = useSession();
  const userProfileImage = session?.user?.image;
  const userName = session?.user?.name;
  const userEmail = session?.user?.email;
//   const { id } = useParams();
//  const [user, setUser] = useState(null)
//  const [isLoading, setIsLoading] = useState(true);
  // useEffect( ()=>{   
  //   const fetchUserData = async () => {
  //     if(!id) return;
  //     try {       
  //       const userData = await fetchUser(id);
  //       setUser(userData.userData);
  //     } catch(error) {
  //       console.log("error" , error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   if(user === null){
  //     fetchUserData();
  //   }
  // },[id,user])
  // console.log("user",user);
  
  return (

    <>
    <section className='bg-blue-50 w-full h-full'>
        <div className='container m-auto p-6'>
            <div className='p-4 bg-white shadow-xl'>
                <h1 className='text-2xl font-bold text-center p-4 mt-4'>Profile Page</h1>
                <Image src={userProfileImage || profileDefault} alt="profile" width={100} height={100} className='mt-4'/>
                <div className='mt-4 text-center'>
                  <h2>Name: {userName}</h2> 
                  <h2>Email: {userEmail}</h2>
                </div>
                <button>Edit Profile</button>
            </div>
            
        </div>
        <div>
        </div>
    </section>
    </>
  )
}

export default page