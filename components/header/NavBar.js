
import Link from "next/link"
import { useSession } from "next-auth/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
        {!session && <Link href={'/login'} >Login</Link>}
        {session && <Link href={'/profile'}>profile</Link> }
      </div>
    </div>
  )
}

export default NavBar;
