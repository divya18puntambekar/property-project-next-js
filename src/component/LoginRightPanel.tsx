"use client"
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { LoginValidation } from '@/app/utils/LoginValidation';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
const LoginRightPanel = () => {
  const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<{ [key: string]: string }>({});

    const submitHandler = async (e: any) => {
      e.preventDefault();
      setLoading(true);
      const login = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false
      });
      if(login && login.error) {
        setError({message: "Invalid credentials"});
        toast.error(login.error);
        return error 
      } 
      router.push("/dashboard");
      toast.success('Logged in successfully!');
      setLoading(false);
    }

    return (
        <>
          <section className="flex">
            <form className="mt-24 ml-32 bg-white rounded-3xl p-12 w-8/12" autoComplete="off" >
            <h1 className="text-3xl font-semibold text-center">Login</h1>
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1focus:ring-blue-200 sm:text-sm sm:leading-6"
                      onChange = {(e) => setEmail(e.target.value)} onFocus={(e) => setEmail(e.target.value)} value={email} disabled={loading}
                    />
                     <p className="text-red-700 text-sm font-medium  mb-2">{error.email}</p>
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
                        onChange = {(e) => setPassword(e.target.value)} onFocus={(e) => setPassword(e.target.value)} value={password}
                        disabled={loading}
                      />
                       <p className="text-red-700 text-sm font-medium  mb-2">{error.password}</p>
                    </div>
                  </div>
                <div className="mt-6 flex items-center gap-x-6">
                  <button
                    type="submit"
                    className="rounded-xl bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    onClick={submitHandler}
                  >
                    Login
                  </button>
                </div>
            </form>
          </section>
        </>
      );
}

export default LoginRightPanel