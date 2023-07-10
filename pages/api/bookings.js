import { connectDatabase } from "@/lib/db";

const handler = async(req, res) => {

    try {
    const client = await connectDatabase();

    const collection = client.db().collection('users');

    const user = await collection.findOne({email: req.body.email})

    const update = {
        $push: {
            bookings: req.body.booking
        }
    }

    console.log(req.body);
    client.close()

    const result = await collection.updateOne(user, update);
    res.status(201).json({message: 'updated successfully'});
    }
    catch(error) {
        res.send(error)
    }
    
}

export default handler; 