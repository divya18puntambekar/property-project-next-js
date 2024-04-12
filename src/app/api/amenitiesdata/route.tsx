import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

// api/amenitiesdata
export const GET = async(req: Request) => { 
    try {
        await connectToDb();
        
        const amenityData = await prisma.amenitiesData.findMany();
        
        return NextResponse.json({ amenityData }, { status: 200 });
    } catch(error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export const POST = async (req: Request) => {
    try {
        const { name } = await req.json();
        const amenityData = await prisma.amenitiesData.create({
            data: {
                name
            }
        })
        return NextResponse.json({ message: "Amenity added successfully", amenityData }, { status: 200 });
    } catch (error: any){
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}