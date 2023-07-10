import { connectDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

async function handler(req,res) {
    
    const { username, email, password, confirm_password } = req.body;
    // console.log(username, email, password, confirm_password);

    // validation user data
    if(!username) { res.status(422).json( { message: 'Please enter a valid username' } ); return; }
    if(!email || !email.includes('@')) { res.status(422).json({ message: 'Please enter a valid email' }); return  }
    if(!password || !confirm_password || password.length <8) { res.status(422).json({ message: 'Please enter a valid password' }); return; }
    if(password !== confirm_password) { res.status(422).json( { message: 'Password doesnot matches' } ); return ; }

    //hashing password
    const hashedPass = await hashPassword(password);

    // writing data on db
    const client = await connectDatabase();

    const db = client.db();


    //checking if the user already exists
    const oldUser = await db.collection('users').findOne({email: email});

    if(oldUser) {
        res.status(422).json({ message: 'User already exists' });
        client.close();
        return ;
    }

    const result = await db.collection('users').insertOne({
        username,
        email,
        password: hashedPass,
        bookings: []
    })

    res.status(201).json({ message: 'Successfully created new user', data: result });
    client.close();
}

export default handler;
