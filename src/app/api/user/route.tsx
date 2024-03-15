import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";


export const POST = async(req: Request) => {
    try {
        const { name, email } = await req.json();
        connectToDb();
        const userData = await prisma.user.create({
            data:{
                name,
                email
            }
        })
        return NextResponse.json({ message: "User added successfully", userData }, { status: 200 });
    } catch (error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}