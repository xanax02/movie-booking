import { connectDatabase } from "@/lib/db";

const handler = async(req, res) => {

    const client = await connectDatabase();

    const collection = client.db().collection('users');

    const user = collection.findOne({email: req.body.email})

    const update = {
        $push: {
            bookings: req.body.booking
        }
    }

    const result = await collection.updateOne(user, update);
    res.status(201).json({message: 'updated successfully'});

}

export default handler; 