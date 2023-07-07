import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getImage } from '@/lib/data'

const Card = (props) => {

    const [url, setUrl] = useState();

    useEffect(() => {
        getImage(props.data.backdrop_path).then(data => setUrl(data))
    })

    return (
        <Link href={`/booking/${props.data?.id}`}>
            <div className='w-[350px] h-[300px] mr-4 bg-[#252525] rounded-lg hover:scale-105 hover:bg-[#414141] ease-linear duration-200 flex flex-col relative'>
                {/* image */}
                <div className='h-[70%] bg-auto hover:opacity-60 duration-200'>
                    {url && <img className='h-full rounded-t-lg' src={url} alt='' />}
                </div>
                {/* details */}
                <div>
                    <p>{props.data.original_title}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
