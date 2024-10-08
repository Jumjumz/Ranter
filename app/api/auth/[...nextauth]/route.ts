import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_LOCAL_ID as string, // connect to google client id
            clientSecret: process.env.GOOGLE_CLIENT_LOCAL_SECRET as string,
        }),
    ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };