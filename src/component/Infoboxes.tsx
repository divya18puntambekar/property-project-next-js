import { InfoboxProperties } from '@/app/api/route/route'

const Infoboxes = () => {
  return (
    <section>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-2 gap-10 p-4 rounded-lg'>
               <InfoboxProperties 
                heading = "For Renters"
                backgroundColor = "bg-gray-100"
                buttonInfo = {{
                    text: "Browse Properties",
                    link: '/properties',
                    backgroundColor: 'bg-black',
                }}> 
                    Find your dream rental property. Bookmark property and contact owners.
                </InfoboxProperties>
                <InfoboxProperties 
                heading = "For Property Owners"
                backgroundColor = "bg-blue-100"
                buttonInfo = {{
                    text: "Add Properties",
                    link: '/properties/add',
                    backgroundColor: 'bg-blue-700',
                }}> 
                    List yonur properties and reach potentials tentants. Rent as an airbnb or long term.
                </InfoboxProperties>
            </div>
        </div>
    </section>
  )
}

export default Infoboxes