import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export const POST = async(req: Request) => {
    await connectToDb();
    console.log("fuiwg");
    try {
        const { name, email, username, contact, password } = await req.json();
        console.log(name, email, username, contact, password);
        // user already exists
        const existingUser = await prisma.user.findFirst({ where: {email: email} });
        if(existingUser){
            return NextResponse.json({ error: "User already exists!"}, {status: 404})
        }
        
        const userData = await prisma.user.create({
            data:{
                name,
                email,
                username, 
                contact,
                password,
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