import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const LoginLeftPanel = () => {
  return (
    <div className='bg-white relative'>
        <Image
          src = "/assets/images/background.jpg"
          alt='background'
          width={0}
          height={0}
          className='object-fit signupImage'
          quality={100}
          sizes='100vw'
        />
        <div className='absolute text-white inset-0 signup_left_panel_text text-center'>
          <h1 className='text-3xl font-bold'>Welcome Back!</h1>
          <p className='text-lg my-4 break-words'>To keep connected with us please login with your personal info</p>
          <Link href="/Signup" className='bg-blue-500 hover:bg-blue-700 py-2 px-4 mt-4 rounded-3xl'>Get Started Now</Link>
        </div>
    </div>
  )
}

export default LoginLeftPanel