import Link from "next/link"
import { useRef } from "react"

import ButtonRed from "../UI/ButtonRed"
import Input from "../UI/Input"


const Auth = (props) => {

    const username = useRef();
    const email = useRef();
    const  password = useRef();;
    const confPass = useRef();

    const signupHandler = async() => { }

  return (
    <div className="h-[100vh] w-[100ww] flex items-center justify-center ">
      <div className="w-[500px] bg-[#121212] rounded-md p-4">
        <div className="w-full text-center mb-4">
            <h2 className="text-4xl ">{props.action}</h2>
        </div>
        <div>
          {props.action === 'Signup' && <Input type='text' placeholder='name' />}
          <Input type='email' placeholder='email' />
          <Input type='password' placeholder='password' />
          {props.action === 'Signup' && <Input type='password' placeholder='confirm password' />}
        </div>
        <div className="flex flex-col my-8">
          {props.action === 'Login' && <ButtonRed>Login</ButtonRed>}
          {props.action === 'Signup' && <ButtonRed onClick={signupHandler}>Signup</ButtonRed>}
          <div className="flex items-center justify-between">
            {props.action === 'Login' && <Link href="/signup" className="text-center mt-2 text-blue-100" >signup</Link>}
            {props.action === 'Signup' && <Link href="/login" className="text-center mt-2 text-blue-100" >login</Link>}
            {props.action === 'Login' && <Link href="/signup" className="text-center mt-2 text-blue-100 text-sm" >Forgot password</Link>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
