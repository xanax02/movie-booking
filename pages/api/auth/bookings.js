import { connectDatabase } from "@/lib/db";

const handler = async(req, res) => {

    const client = await connectDatabase();

    const collection = client.db().collection('users');

}

export default handler; 