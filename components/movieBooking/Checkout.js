import { useRef } from "react";

const Checkout = (props) => {

    const seatRef = useRef();
    const dateRef = useRef();
    const formatRef = useRef();

    const confirmHandler = () => {
        
    }

    const cancelHandler = () => {
        props.clickHandler(false);
    }

  return (
    <>
        <div className="absolute bg-black/50 left-0 right-0 top-0 bottom-0"></div>
        <div className="absolute px-10 rounded-md bg-[#353535] z-10  w-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
            <div className='flex justify-around p-4 m-4 border-b-[1px] border-gray-400'>
                <p className="text-xl">Seats</p>
                <select ref={seatRef} className="bg-gray-700 h-10 w-16 rounded-lg mr-4">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div className="flex justify-around p-4 m-4 border-b-[1px] border-gray-400">
                <p className="text-xl">Date</p>
                <input ref={dateRef} type="date" className="bg-gray-700 h-10 rounded-lg px-1" />
            </div>
            <div className="flex justify-around p-4 m-4 border-b-[1px] border-gray-400">
                <p className="text-xl">Format</p>
                <select ref={formatRef} className="bg-gray-700 h-10 rounded-lg px-6">
                    <option>2D</option>
                    <option>3D</option>
                    <option>4DX</option>
                    <option>IMAX2D</option>
                </select>
            </div>
            <div className="flex justify-around mt-20 mb-10 px-28">
                <button className="bg-red-500 px-4 py-1 rounded-md" onClick={confirmHandler}>Confirm</button>
                <button className="bg-blue-500 px-4 py-1 rounded-md" onClick={cancelHandler}>Cancel</button>
            </div>
        </div>
    </>
  )
}

export default Checkout
