import { getSession } from "next-auth/react"

const profile = () => {
    return (
        <div>
            <h1>This is the profile page.</h1>
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
    return {
        props: {}
    }
}