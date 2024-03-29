import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
connectToDb();
// POST : api/properties
export const POST = async (req: Request) => {
    try {
        const { userId, name, description, square_feet, propertyType, house_no, street, city, state, zipcode, image, weekly_rates, monthly_rates, nightly_rates, beds, baths, amenties } = await req.json();
        // const amentiesArray = Array.amenties?;
        console.log("========", amenties);
        
        const propertyData = await prisma.properties.create({
            data: {
                userId,
                name,
                description,
                square_feet,
                propertyType,
                house_no,
                street,
                city,
                state,
                zipcode,
                image,
                weekly_rates,
                monthly_rates,
                nightly_rates,
                beds,
                baths,
                amenties 
            }
        })
        return NextResponse.json({ message: "Property added successfully", propertyData }, { status: 200 });
    } catch (error: any){
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}
// GET: api/properties
export const GET = async(req: Request) => {
    try {
        const propertyData = await prisma.properties.findMany();
        return NextResponse.json({ propertyData }, { status: 200 });
    } catch(error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}