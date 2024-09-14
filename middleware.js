// a middleware file that is used by the next auth library
export {default} from "next-auth/middleware";

export const config = {
    matcher: [
        "/",
        "/posts"
    ]
}