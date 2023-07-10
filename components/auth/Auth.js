import Link from "next/link"
import { useRef } from "react"
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router"

import ButtonRed from "../UI/ButtonRed"
import Input from "../UI/Input"


const Auth = (props) => {

  //refs for the userdata
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confPass = useRef();

  const router = useRouter();

  //signup button function handler
  const signupHandler = async () => {
    const response = await fetch('api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        confirm_password: confPass.current.value
      })
    })
    console.log(response);
    const data = await response.json();
    console.log(data);
  }

  //signin button function handler
  const signinHandler = async () => {
    const result = await signIn('credentials', {
      email: email.current.value,
      password: password.current.value,
      redirect: false,
    })
    console.log(result);
    if (!result.error) {
      router.replace('/')
    }
  }

  //JSX
  return (
    <div className="h-[100vh] w-[100ww] flex items-center justify-center ">
      <div className="w-[500px] bg-[#121212] rounded-md p-4 mt-[-50px]">
        <div className="w-full text-center mb-4">
          <h2 className="text-4xl ">{props.action}</h2>
        </div>
        <div>
          {props.action === 'Signup' && <Input type='text' placeholder='name' ref={username} />}
          <Input type='email' placeholder='email' ref={email} />
          <Input type='password' placeholder='password' ref={password} />
          {props.action === 'Signup' && <Input type='password' placeholder='confirm password' ref={confPass} />}
        </div>
        <div className="flex flex-col my-8">
          {props.action === 'Login' && <ButtonRed onClick={signinHandler}>Login</ButtonRed>}
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
