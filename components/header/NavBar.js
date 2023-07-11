
import Link from "next/link"
import { useSession } from "next-auth/react"

const NavBar = () => {

  const { data: session } = useSession();

  return (
    <div className="h-[70px] bg-red-500 flex justify-between items-center px-8">
      {/* home */}
      <div>
        <h1 className="text-4xl font-bold tracking-wide">CineBook</h1>
      </div>
      {/* controls */}
      <div>
        {!session && <Link href={'/login'}  className="text-lg font-semibold">Login</Link>}
        {session && <Link href={'/profile'} className="text-lg font-semibold">profile</Link> }
      </div>
    </div>
  )
}

export default NavBar;
