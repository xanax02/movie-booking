import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectDatabase} from "@/lib/db";
import { verifyPassword } from "@/lib/auth";

const authOptions = {
    //authentication providers
    providers: [
        Credentials({
            async authorize(credentials) {
                //login logic
                //connecting db
                const client = await connectDatabase();
                const userCollection = client.db().collection('users');
                
                //finding user
                const user = userCollection.findOne({ email: credentials.email})
                if(!user) {
                    client.close();
                    throw new Error("User does not exist");
                }

                //if user exist compare passwords
                const isValid = verifyPassword(credentials.password, user.password);
                
                // if password doesnot matches
                if(!isValid) {
                    client.close();
                    throw new Error("Wrong Password");
                }

                return { email: user.email };
            }
        })
    ]
}

export default NextAuth(authOptions);