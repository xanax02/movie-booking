import { connectDatabase } from "@/lib/db"
import { getSession } from "next-auth/react"
import { signOut } from 'next-auth/react'

const profile = (props) => {

    const logoutHandler = () => {
        signOut();
    }

    return (
        <div className="w-[70%] bg-[#252525] rounded-lg mx-auto mt-24 p-4">
            <h2 className="text-center text-3xl font-semibold">User Profile</h2>
            <div className="flex flex-col my-4  w-[50%] mx-auto">
                <div className="flex justify-between">
                    <p className="text-lg">Username</p>
                    <p className="text-lg">{props.name}</p>
                </div>
                <div className="flex justify-between mt-4">
                    <p className="text-lg">email</p>
                    <p className="text-lg">{props.email}</p>
                </div>
                <div className="mt-4 text-right border-b-2 pb-3 border[#4d4c4c]">
                    <button className="bg-red-500 px-4 py-2 rounded-lg font-semibold" onClick={logoutHandler}>Logout</button>
                </div>
                <div className="flex flex-col justify-around mt-8">
                    <p className="text-xl">Bookings:</p>
                    {
                        props.bookings.length === 0 ? <p>No bookings yet.</p> :
                            props.bookings.map((booking, index) => {
                                return (
                                    <div key={index + 1} className="mt-5 pb-2 border-b-[2px] border-[#4d4c4c]">
                                        <div className="flex justify-between mt-2">
                                            <p className="text-lg"><span>{index + 1}. </span>Booking date:</p>
                                            <p className="text-lg">{booking.date}</p>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <p className="text-lg">Seats</p>
                                            <p className="text-lg">{booking.seats}</p>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <p className="text-lg">Format</p>
                                            <p className="text-lg">{booking.format}</p>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default profile


export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    console.log(session);

    const client = await connectDatabase();
    const collection = client.db().collection('users');

    const user = await collection.findOne({ email: session.user.email });

    return {
        props: {
            bookings: user.bookings,
            name: user.username,
            email: user.email,
        }
    }
}