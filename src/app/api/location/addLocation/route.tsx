import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server"
import prisma from "../../../../../prisma";

export const POST = async(req: Request) => {
    try {
        const { street, city, state, zipcode, propertiesId } = await req.json();
        connectToDb();
        const locationData = await prisma.location.create({
            data:{
                street,
                city,
                state,
                zipcode,
                propertiesId
            }
        })
        return NextResponse.json({ message: "Location added successfully", locationData }, { status: 200 });
    } catch (error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}