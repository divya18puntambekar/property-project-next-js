import prisma from "../../../prisma";
export const connectToDb = async () => {
    try {
        await prisma.$connect();
        console.log("CONNECTED TO DATABASE");
    } catch (error: any) {
        console.log("prisma error ===== ",error);
        return new Error(error.message);
    }
}