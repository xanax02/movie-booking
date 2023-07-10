import React, { useEffect, useState } from 'react'
import { getImage } from '@/lib/data'
import Checkout from './Checkout';

const Booking = (props) => {

    const [imageUrl, setImageUrl] = useState();
    const [checkout, setCheckout] = useState(false);

    const clickHandler = () => {
        setCheckout((prevState) => {
            return !prevState
        })
    }
    // console.log(props.data);

    useEffect(() => {
        getImage(props.data.backdrop_path).then(data => setImageUrl(data));
    }, [])

    return (
        <>
            {checkout && <Checkout clickHandler={setCheckout} />}
            <div className='flex justify-around items-center mt-28 mx-14'>
                <div className='h-[500px] w-[600px] bg-center bg-cover ml-16 mr-10 rounded-sm' style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div>
                    <h2 className='text-6xl font-bold tracking-wider mb-4'>{props.data.title}</h2>
                    <p className='mb-10 text-lg'>{props.data.overview}</p>
                    <button onClick={clickHandler} className='bg-red-500 px-4 py-1 rounded-md font-semibold text-base'>BOOK</button>
                </div>
            </div>
        </>
    )
}

export default Booking
