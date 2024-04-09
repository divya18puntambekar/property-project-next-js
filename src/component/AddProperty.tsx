"use client"
import React, { useEffect, useState } from "react";
import { fetchAmenitiesData } from '@/app/utils/request';
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
interface Amenity {
  name: string;
}
interface PropertyType {
  name: string;
}
interface FormData {
  name: string;
  description: string;
  propertyType: string;
  square_feet: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  images: string[];
  nightly_rates: string;
  weekly_rates: string;
  monthly_rates: string;
  amenities: string[];
  beds: string;
  baths: string;
  seller_name: string;
  seller_email: string;
  seller_phone: string;
}

const AddProperty = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [formData, setFormData] = useState<FormData>({
    propertyType: "",
    name: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    description: "",
    nightly_rates: "",
    weekly_rates: "",
    monthly_rates: "",
    beds: "",
    baths: "",
    square_feet: "",
    seller_name: "",
    seller_email: "",
    seller_phone: "",
    amenities: [],
    images: []
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchAmenities = await fetchAmenitiesData();              
        setAmenities(fetchAmenities.amenityData);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMounted(true);
  })
  const onHandleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const onHandleAmenitiesChange = (event: any) => {
    const { value, checked } = event.target;
    const updatedAmenities = [...formData.amenities];
    if(checked) {
      updatedAmenities.push(value);
    } else {
      const index = updatedAmenities.indexOf(value);
      if (index !== -1) {
        updatedAmenities.splice(index, 1);
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      amenities: updatedAmenities
    }))
  }
  const onHandleImageChange = (event: any) => {
    const { files } = event.target;
    const updatedImages = [...formData.images];
    for(const file of files) {
      updatedImages.push(file.name);
    }
    console.log("updated images nmae",updatedImages);
    
    setFormData((prevData) => ({
      ...prevData,
      images: updatedImages
    }))
  }
  const onSubmitForm = async (event: any) =>{
    event.preventDefault();
    console.log("submit");
    console.log("formdata",formData);
    try{
      const response = await axios.post("/api/properties", {
        propertyType: formData.propertyType,
        name: formData.name,
        street: formData.street, 
        city: formData.city,
        state: formData.state,
        zipcode: formData.zipcode,
        description: formData.description,
        nightly_rates: formData.nightly_rates,
        weekly_rates: formData.weekly_rates,
        monthly_rates: formData.monthly_rates,
        beds: formData.beds,
        baths: formData.baths,
        square_feet: formData.square_feet,
        seller_name: formData.seller_name,
        seller_email: formData.seller_email,
        seller_phone: formData.seller_phone,
        images: formData.images,
        amenities: formData.amenities
    });
      console.log("response", response);
      if(response.status === 200){
        // router.push("/login");
        toast.success('Property added successfully!');
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
  }
  return (
    <form className="m-4 w-10/12 my-12 ml-28 bg-white border-gray-400 shadow-xl pb-12" onSubmit={onSubmitForm}>
      <h1 className="text-black font-bold text-3xl pl-4 pt-4">Sell or Rent Your Property</h1>
      <div className="w-11/12 m-4">
        <label
          htmlFor="propertyType"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Property Type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          value={formData.propertyType} // Add value attribute
          onChange={onHandleInputChange} // Add onChange handler
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="apartment" selected>
            Apartment
          </option>
          <option value="room">Room</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="cottage">Cottage</option>
          <option value="studio">Studio</option>
          <option value="other">other</option>
        </select>
      </div>
      <div className="w-11/12 m-4">
        <label
          htmlFor="name"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Listing Names
        </label>
        <input
          type="text"
          id="name" name = "name"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onHandleInputChange} value={formData.name}
          
        />
      </div>
      <div className="w-11/12 m-4">
        <label
          htmlFor="description"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="property_description"
          rows={4} name="description"
          className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write property description here..." onChange={onHandleInputChange} value={formData.description}
        ></textarea>
      </div>
      
      <div className="w-11/12 m-4 grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="square_feet"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Square Feet(sq.ft.)
          </label>
          <input
            type="text"
            id="square_feet" name="square_feet"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" onChange={onHandleInputChange} value={formData.square_feet}
            
          />
        </div>
        <div>
          <label htmlFor="beds" className="block mb-2  font-medium text-gray-900 dark:text-white">Bedrooms</label>
          <input type="number" id="beds"  name="beds"  aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0"  onChange={onHandleInputChange} value={formData.beds} />
        </div>
        <div>
          <label htmlFor="baths" className="block mb-2  font-medium text-gray-900 dark:text-white">Bathrooms</label>
          <input type="number" id="baths"  name="baths"  aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onHandleInputChange} value={formData.baths} placeholder="0"  />
        </div>       
      </div>
      <div className="w-11/12 m-4">
        <label
          htmlFor="images"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image (upto 4)
        </label>
        <input
          type="file"
          id="images"
          accept="image/*" 
          multiple
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onHandleImageChange}
          name="images"
        />
        
      </div>
      <hr />
      <div className="w-11/12 m-4">
        {/* <div className="flex text-center">
            <h1 className="text-xl font-bold">Rates </h1>
            <span className=" text-gray-600">(Leave blank if not applicable)</span>
        </div> */}
      <h1 className="text-black font-bold text-xl">Rates </h1>
      <span className="text-sm text-gray-600">(Leave blank if not applicable)</span>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="nightly"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Nightly ($)
          </label>
          <input
            type="text"
            id="nightly" name="nightly_rates"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" onChange={onHandleInputChange} value={formData.nightly_rates}
            
          />
        </div>
        <div>
          <label
            htmlFor="weekly"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Weekly ($)
          </label>
          <input
            type="text"
            id="weekly" name="weekly_rates"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" onChange={onHandleInputChange} value={formData.weekly_rates}
            
          />
        </div>
        <div>
          <label
            htmlFor="monthly"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Monthly ($)
          </label>
          <input
            type="text"
            id="monthly" name="monthly_rates"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" onChange={onHandleInputChange} value={formData.monthly_rates}
            
          />
        </div>
      </div>
    </div>
      {/* <PropertyRates /> */}
      <hr />
      <div className="w-11/12 m-4">
        <h1 className="text-xl font-bold">Location</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="street"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Street
          </label>
          <input
            type="text"
            id="street" name="street"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={onHandleInputChange} value={formData.street}
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city" name="city"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={onHandleInputChange} value={formData.city}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="state"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            State
          </label>
          <input
            type="text"
            id="state" name="state"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={onHandleInputChange} value={formData.state}
          />
        </div>

        <div>
          <label
            htmlFor="zipcode-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            zipcode code:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
            </div>
            <input
              type="text"
              id="zipcode-input" name="zipcode"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="12345"
              pattern="^\d{5}(-\d{4})?$"
               onChange={onHandleInputChange} value={formData.zipcode}
            />
          </div>
        </div>
      </div>
    </div>
      {/* <PropertyLocation /> */}
      <hr />
      <div className="w-11/12 m-4">
      <div>
        <h1 className="text-xl font-bold">Seller Details</h1>
      </div>
      <div>
        <div>
          <label
            htmlFor="seller_name"
            className="block mb-2 mt-2 font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="seller_name" name="seller_name"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={onHandleInputChange} value={formData.seller_name}
          />
        </div>
        <div>
          <label
            htmlFor="seller_email"
            className="block mb-2 mt-2 font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="seller_email" name="seller_email"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={onHandleInputChange} value={formData.seller_email}
          />
        </div>
        <div>
          <label
            htmlFor="seller_phone"
            className="block mb-2 mt-2 font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="seller_phone" name="seller_phone"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             onChange={onHandleInputChange} value={formData.seller_phone}
          />
        </div>
      </div>
    </div>
      {/* <PropertySeller /> */}
      <hr />
      <div className="w-11/12 m-4"> 
            <div className='text-xl font-bold mt-2'>Amenities</div>
            <div className= "grid grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                    <div >
                     <input id={amenity.name.toLowerCase()} type="checkbox" value={amenity.name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleAmenitiesChange} checked={formData.amenities.includes(amenity.name)}/>
                    <label htmlFor={amenity.name.toLowerCase()} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{amenity.name}</label> 
                    </div>
                ))}
                
            </div>
        </div>      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 mt-4 rounded-xl">Add Property</button>
    </form>
  );
};

export default AddProperty;
