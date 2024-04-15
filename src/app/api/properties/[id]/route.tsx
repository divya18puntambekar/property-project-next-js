import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

// get : /api/properties/[id]
export const GET = async(req: Request, {params}: {params: any}) => {
    try {
        await connectToDb();
        const propertyData = await prisma.properties.findUnique({
            where: {
                id: parseInt(params.id)
            }
        });
        if(!propertyData){
            return NextResponse.json( "Property not found", {status: 404});
        }
        return NextResponse.json({ propertyData }, { status: 200 });
    } catch(error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}