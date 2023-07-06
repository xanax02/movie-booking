import { getSession } from "next-auth/react"
import Auth from "@/components/auth/Auth"

const signup = (props) => {
  return (
    <Auth action='Signup' />
  )
}

export default signup

//checking for token on server
export async function getServerSideProps(context) {

  const session = await getSession( {req: context.req })

  if(session) {
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