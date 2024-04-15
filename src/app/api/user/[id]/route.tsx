import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

connectToDb();
// get : /api/user/[id]
export const GET = async(req: Request, {params}: {params: any}) => {
    try {
        
        const userData = await prisma.user.findUnique({
            where: {
                id: parseInt(params.id)
            }
        });
        if(!userData){
            return NextResponse.json( "User not found", {status: 404});
        }
        return NextResponse.json({ userData }, { status: 200 });
    } catch(error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}