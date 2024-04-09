import axios from "axios";
import { connectToDb } from "./index";
connectToDb();
// fetch multiple property
async function fetchProperties() {
    try{
        const response = await axios.get(`/api/properties`);
             
        if(response.status === 200 ){
            return response.data;
        }
        throw new Error('Failed to fetch property data')
    }catch(error){
        console.log(error);
    }
}
// fetch single property 
async function fetchProperty(id: any) {
    try{
        const response = await axios.get(`/api/properties/${id}`);
        if(response.status === 200 ){
            return response.data;
        }
        throw new Error('Failed to fetch property data')
    }catch(error){
        console.log(error);
    }
}

async function fetchAmenitiesData(){
    try{
        const response = await axios.get('/api/amenitiesdata');
        if(response.status === 200 ){
            return response.data;
        }
        throw new Error('Failed to fetch property data')
    }catch(error){
        console.log(error);
    }
}

async function fetchPropertyType(){
    try{
        const response = await axios.get('/api/amenitiesdata');
        if(response.status === 200 ){
            return response.data;
        }
        throw new Error('Failed to fetch property data')
    }catch(error){
        console.log(error);
    }
}
export { fetchProperties, fetchProperty, fetchAmenitiesData }
