import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getImage } from '@/lib/data'

const Card = (props) => {

    const [url, setUrl] = useState();

    useEffect(() => {
        getImage(props.data.backdrop_path).then(data => setUrl(data))
    })

    return (
        <Link href={`/booking/upcomming/${props.id}`}>
            <div className='w-[350px] h-[300px] mr-4 bg-[#252525] rounded-lg hover:scale-105 ease-linear duration-200 flex flex-col relative'>
                {/* image */}
                <div className='h-[70%] bg-auto'>
                    {url && <img className='h-full ' src={url} alt='' />}
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
