import axios from "axios";
import { connectToDb } from "./index";
connectToDb();
// fetch multiple property
async function fetchProperties() {
    try{
        const response = await axios.get(`/api/properties`);   
        console.log("xxcvxvxcvxcvxvxvc", response);
             
        if(response.status === 200 ){
            return response.data;
        }
        throw new Error('Failed to fetch property data')
    }catch(error){
        console.log(error);
    }
}
export { fetchProperties }
// fetch single property 
async function fetchProperty(id: any) {
    try{
        const response = await axios.get(`/api/properties/${id}`);
        if(response.status === 200 ){
            throw new Error('Failed to fetch property data')
        }
        return response.data;
    }catch(error){
        console.log(error);
    }
}
export { fetchProperty }
