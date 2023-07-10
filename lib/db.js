import { MongoClient } from "mongodb";

export async function connectDatabase() {
    const client = await MongoClient.connect("mongodb+srv://abhay:abhay888@cluster0.n01d4nh.mongodb.net/movie-booking?retryWrites=true&w=majority");

    return client;
}

//"mongodb+srv://admin-abhay:abhay888@cluster0.ybhkw.mongodb.net/movie-booking?retryWrites=true&w=majority"