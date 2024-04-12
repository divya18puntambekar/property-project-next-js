import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

// api/amenitiesdata
export const GET = async(req: Request) => { 
    try {
        await connectToDb();
        
        const propertyType = await prisma.propertyTypeData.findMany();
        
        return NextResponse.json({ propertyType }, { status: 200 });
    } catch(error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}