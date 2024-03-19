import Image from "next/image"
import logo from '@/assets/images/logo.png';
import Link from "next/link";
const Footer = () => {
    const getYear = new Date().getFullYear()
  return (
    <footer className='bg-blue-100 py-3 mt-auto'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
            <div className='mb-4 md:mb-0'>
                <Image
                    src={logo}
                    alt="Logo"
                    className="h-12 w-auto"
                />
            </div>
            <div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0 text-center">&copy; {getYear} RentalProperty. All rights reserved</p>
            </div>
            <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-1'>
                <ul className="flex space-x-4">
                    <li><Link href='/properties'>Properties</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer