import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const POST = async (req: Request) => {
    try {
        const { userId, name, description, square_feet, propertyType, house_no, street, city, state, zipcode } = await req.json();
        await connectToDb();
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
                zipcode
            }
        })
        return NextResponse.json({ message: "Property added successfully", propertyData }, { status: 200 });
    } catch (error: any){
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}