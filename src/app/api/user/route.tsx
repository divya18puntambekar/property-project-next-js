import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
connectToDb();

export const POST = async(req: Request) => {
    try {
        const { name, email } = await req.json();
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

export const GET = async(req: Request) => {
    try {
        await connectToDb();
        const userData = await prisma.user.findMany();
        return NextResponse.json({ userData }, { status: 200 });
    } catch(error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}