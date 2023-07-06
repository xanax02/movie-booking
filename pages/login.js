import { getSession } from "next-auth/react"
import Auth from "@/components/auth/Auth"

const login = () => {

  return (
    <Auth action='Login' />
  )
}

export default login


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