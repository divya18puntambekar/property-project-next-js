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

export const PUT = async(req: Request, {params}: {params: any}) => {
    try {
        await connectToDb();
        const sessionUser = await getSessionUser
        

    } catch(error: any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
// export async function deleteUser(req, res) {
//     const { userId } = req.query;
//     try {
//       const deletedUser = users_arr.filter(
//         (user) => user.id === Number(userId)
//       )[0];
//       if (deletedUser) {
//         users_arr = users_arr.filter((user) => user.id !== Number(userId));
//         res
//           .status(200)
//           .send({ message: "User deleted successfully!!", user: deletedUser });
//       } else {
//         res.status(200).send({ message: "User not found!" });
//       }
//     } catch (error) {
//       console.log(error.message);
//       res
//         .status(500)
//         .send({ message: "Internal Server error", error: error.message });
//     }
//   }