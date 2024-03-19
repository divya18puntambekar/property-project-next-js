import Link from "next/link"
interface Props {
    heading: string,
    backgroundColor: string,
    buttonInfo: {
        text: string,
        link: string,
        backgroundColor: string
    }
    children: string
}
const InfoboxProperties: React.FC<Props> = ({
    heading,
    backgroundColor,
    buttonInfo,
    children
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 className='text-2xl font-bold'>{heading}</h2> 
        <p className='mt-2 mb-4'>
            {children}
        </p>
        <Link href= {buttonInfo.link} className={`${buttonInfo.backgroundColor} inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 mt-5`}>
            {buttonInfo.text}
        </Link>
    </div>
  )
}

export default InfoboxProperties