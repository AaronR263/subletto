import prisma from "@/helpers/prisma";
import { NextResponse } from "next/server";
import { verifyJwt } from "@/helpers/jwt";

export async function POST(request) {
    try {
        const {title, content} = await request.json();

        const accessToken = request.headers.get("Authorization");
        const decoded = verifyJwt(accessToken);

        if (!accessToken || !decoded) {
            return NextResponse.json({ message: "You are not authorized to make a post" }, { status: 401 });
        }

        const userId = decoded.id
        
        const post = await prisma.post.create({
            data: {
                title: title,
                content: content,
                user_id: userId
            }
        })
        
        return NextResponse.json(post, { status: 201 });
    }
    catch (e) {
        console.error(e);
        return NextResponse.json({ message: "Something went wrong while trying to create a post", result: e }, { status: 500 });
    }
}
