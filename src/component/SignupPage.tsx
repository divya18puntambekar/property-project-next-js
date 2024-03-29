"use client"
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs"
import { toast } from 'react-hot-toast';
import { validation } from "@/app/utils/validation";
export const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    confirmPassword: "",
    username: ""
  });
  const [error, setError] = useState<{ [key: string]: string }>({});
  function onHandleChange(event: any){
    const { name, value } = event.target;
    const validation_form = validation({ ...formData, [name]: value });
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: validation_form[name] || null }));
  }
  const onSubmitForm = async (event: any) => {
    event.preventDefault();
    const validationErrors = validation(formData);
    const hasErrors = Object.values(validationErrors).some(error => error !== '');
    
    console.log("haserror",hasErrors);
    // debugger
    
    if(!hasErrors) {
      console.log("false");
      try{              
        console.log("try");
        const password = formData.password;
        console.log("password",password);
        
        const hashedPassword = await bcrypt.hash(password.toString(), 10);
        const response = await axios.post("/api/user", {
          name: formData.name,
          email: formData.email,
          contact: formData.contact, 
          password: hashedPassword
      });
        console.log("response", response);
        if(response.status === 200){
          router.push("/login");
          toast.success('Registered successfully!');
        }
      }catch(error){
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            const responseData = axiosError.response.data;
            if (typeof responseData === 'string') {
              toast.error(responseData);
            } else if (responseData.error === "User already exists!") {
              toast.error('User already exists!');
            } else {
              toast.error('An error occurred while registering. Please try again later.', { position: "bottom-left" });
            }
          } else {
            toast.error('An error occurred while registering. Please try again later.', { position: "bottom-left" });
          }
        }
      }
    } else {
      console.log("true");
      setError((prevError) => ({ ...prevError, ...validationErrors }));
      return;
    }
    }
  return (
    <form className="border-gray-600 shadow-xl ml-12 mt-8 w-5/6 p-8 bg-white" onSubmit={onSubmitForm} autoComplete="off" >
          <h1 className="text-3xl font-semibold text-center">Sign Up!</h1>
            <div className="mt-2 sm:col-span-4 h-24">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name <span className="text-red-500">*</span>
              </label> 
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1focus:ring-blue-200 sm:text-sm sm:leading-6"
                  onChange = {onHandleChange} onFocus={onHandleChange} value={formData.name}
                />
                <p className="text-red-700 text-sm font-medium mb-1">{error.name}</p>
              </div>
            </div>

            {/* <div className="mt-2 sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username <span className="text-red-500">*</span>
              </label> 
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1focus:ring-blue-200 sm:text-sm sm:leading-6"
                  onChange = {onHandleChange} onFocus={onHandleChange} value={formData.username}
                />
                <p className="text-red-700 text-sm font-medium mb-1">{error.username}</p>
              </div>
            </div> */}

            <div className="sm:col-span-4 h-24">
              {/* email */}
              <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-200 sm:text-sm sm:leading-6"
                    onChange = {onHandleChange} onFocus={onHandleChange} value={formData.email}
                  />
                  <p className="text-red-700 text-sm font-medium  mb-2">{error.email}</p>
                </div>
            </div>

            <div className="sm:col-span-4 h-24">
              {/* contact */}
              <label
                  htmlFor="contact"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contact No. <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-200 sm:text-sm sm:leading-6"
                    onChange = {onHandleChange} onFocus={onHandleChange} value={formData.contact}
                  />
                  <p className="text-red-700 text-sm font-medium mb-2">{error.contact}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 h-24">
              <div className="sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-200 sm:text-sm sm:leading-6"
                    onChange = {onHandleChange} onFocus={onHandleChange} value={formData.password}
                  />
                  <p className="text-red-700 text-sm font-medium mb-2">{error.password}</p>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-200 sm:text-sm sm:leading-6"
                    onChange = {onHandleChange} onFocus={onHandleChange} value={formData.confirmPassword}
                  />
                  <p className="text-red-700 text-sm font-medium mb-2">{error.confirmPassword}</p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-x-6 justify-center">
              <button
                type="submit"
                className="rounded-lg bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                SignUp
              </button>
            </div>
        </form>
  )
}

export default SignupPage