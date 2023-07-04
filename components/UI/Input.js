import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
  return (
      <input
            type={props.type}
            className="bg-[#252525] h-12 w-full rounded-lg focus:outline-none mt-4 px-2 text-lg"
            placeholder={props.placeholder}
            autoComplete="off"
            ref={ref}
        />
  )
});

export default Input
