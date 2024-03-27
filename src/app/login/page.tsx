"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const OnHandleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitForm = (e: any) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
          <section className="bg-blue-50 flex">
            <form className="border-gray-600 loginPage shadow-xl ml-72" onSubmit={onSubmitForm} autoComplete="off" >
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1focus:ring-blue-200 sm:text-sm sm:leading-6"
                      onChange = {OnHandleChange} value={formData.email}
                    />
                  </div>
                </div>
               
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1focus:ring-blue-200 sm:text-sm sm:leading-6"
                        onChange = {OnHandleChange} value={formData.password}
                      />
                    </div>
                  </div>
                <div className="mt-6 flex items-center gap-x-6">
                  <button
                    type="submit"
                    className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p className="text-center font-semibold">Don't have account?  <Link href= '/Signup' className="hover:text-blue-700">SignUp</Link></p>
                </div>
            </form>
          </section>
        </>
      );
}

export default page