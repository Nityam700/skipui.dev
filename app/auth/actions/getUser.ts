import { prisma } from "@/prisma/prisma";
import { auth } from "./auth";

export async function getAllUser(){
    try {
        const user = await prisma.user.findMany({});
        console.log(user,"USER FETCHED");
        return user
    } catch (error) {
        console.log(error,"ERROR GETTING USER");
    }
}
export async function getCurrentUser(){
    try {
        const session = await auth()
        const id = session?.user?.id as string
        const user = await prisma.user.findUnique({
            where:{
                id: id
            }
        });
        return user;
    } catch (error) {
        console.log(error,"FAILED TO GET USER BY ID");
    }
}
export async function getUserRole(){
    try {
        const user = await getCurrentUser()
        const role = user?.role
        return role
    } catch (error) {
        console.log(error,"FAILED TO GET USER ROLE");
    }
}
export async function getUserUserName(){
    // get user's username
}