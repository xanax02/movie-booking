
const ButtonRed = (props) => {
  return (
    <button onClick={props.onClick} className="bg-red-500 text-xl rounded-lg py-2" >{props.children}</button>
  )
}

export default ButtonRed
