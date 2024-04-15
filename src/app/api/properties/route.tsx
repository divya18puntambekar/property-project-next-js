import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
// import { handler } from "../auth/[...nextauth]/route"
import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/utils/AuthOptions";
connectToDb();
// POST : api/properties
export const POST = async (req: Request) => {
    // const session = getServerSession(authOptions)
    // console.log("session",session);
    
    try {
        const { userId, name, description, square_feet, propertyType, house_no, street, city, state, zipcode, images, weekly_rates, monthly_rates, nightly_rates, beds, baths, amenities, seller_name, seller_email, seller_phone } = await req.json(); 
        
        const propertyData = await prisma.properties.create({
            data: {
                userId: userId,
                name,
                description,
                square_feet,
                propertyType,
                house_no,
                street,
                city,
                state,
                zipcode,
                images,
                weekly_rates,
                monthly_rates,
                nightly_rates,
                beds,
                baths,
                amenities,
                seller_name, 
                seller_email, 
                seller_phone
            }
        })
        
        return NextResponse.json({ message: "Property added successfully", propertyData }, { status: 200 });
    } catch (error: any){
        console.log("error::::::::::::",error); 
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
// GET: api/properties
export const GET = async(req: Request) => {
    try {
        // const session = getServerSession(authOptions)
        // console.log("session",session);
        const propertyData = await prisma.properties.findMany();
        return NextResponse.json({ propertyData }, { status: 200 });
    } catch(error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}