import prisma from "../../../prisma";
export const connectToDb = async () => {
    try {
        await prisma.$connect();
        console.log("CONNECTED TO DATABASE");
    } catch (error: any) {
        console.log(error);
        return new Error(error.message);
    }
}