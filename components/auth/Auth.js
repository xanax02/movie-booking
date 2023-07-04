import ButtonRed from "../UI/ButtonRed"
import Input from "../UI/Input"


const Auth = () => {
  return (
    <div className="h-[100vh] w-[100ww] flex items-center justify-center ">
      <div className="w-[500px] bg-[#121212] rounded-md p-4">
        <div className="w-full text-center mb-4">
            <h2 className="text-4xl ">Login</h2>
        </div>
        <div>
          <Input 
            type='text'
            placeholder='username'
          />
          <Input 
            type='text'
            placeholder='password'
          />
        </div>
        <div className="flex flex-col my-8">
          <ButtonRed>Login</ButtonRed>
          <a href="/login" className="text-center mt-2 text-blue-100 text-sm" >Forgot password</a>
        </div>
      </div>
    </div>
  )
}

export default Auth
