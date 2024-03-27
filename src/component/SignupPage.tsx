"use client"
import Link from "next/link";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs"
export const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    gender: "",
    contact: ""
  });
  // const [userForm, setUserForm] = useState([]);
  function OnHandleChange(event: any){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const onSubmitForm = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try{      
      const password = formData.get('password') ?? '';
      const hashedPassword = await bcrypt.hash(password.toString(), 10);
      const response = await axios.post("/api/user", {
        name: formData.get('name'),
        email: formData.get('email'),
        username: formData.get('username'),
        contact: Number(formData.get('contact')), 
        password: hashedPassword,
        gender: formData.get('gender')
    });
    router.push("/login");

    }catch(error){
      console.log(error);
      const axiosError = error as AxiosError;
      if (axios.isAxiosError(axiosError)) {  
        if(axiosError.response) {
          const responseData = axiosError.response.data as any;
          console.log(responseData.error, "error 1");
        } else {
          console.log(axiosError.message,"error 2");
        }
      } else {
        console.log("error 3", (error as Error).message);   
      }
    }
  }
  return (
    <form className="border-gray-600 signupPage shadow-xl ml-72" onSubmit={onSubmitForm} autoComplete="off" >
          <h1 className="text-3xl font-semibold">Sign Up!</h1>
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1focus:ring-blue-200 sm:text-sm sm:leading-6"
                  onChange = {OnHandleChange} value={formData.name}
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-200 sm:text-sm sm:leading-6"
                    onChange = {OnHandleChange} value={formData.email}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-200 sm:text-sm sm:leading-6"
                    onChange = {OnHandleChange} value={formData.username}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contact No.
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-200 sm:text-sm sm:leading-6"
                    onChange = {OnHandleChange} value={formData.contact}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
              <label htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
              <div className="mt-4 flex">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="female"
                      name="gender"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="female"
                    />
                    <label htmlFor="female" className="block text-sm font-medium leading-6 text-gray-900">
                      Female
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3 ml-4">
                    <input
                      id="male"
                      name="gender"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="male"
                    />
                    <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                      Male
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-200 sm:text-sm sm:leading-6"
                    onChange = {OnHandleChange} value={formData.password}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-x-6">
              <button
                type="submit"
                className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                SignUp
              </button>
            </div>
            <div>
              <p className="text-center font-semibold">Already have account?  <Link href= '/login' className="hover:text-blue-700">Login</Link></p>
            </div>
        </form>
  )
}

export default SignupPage