import React from 'react'
import Card from '../UI/Card'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Row = (props) => {

    const month = new Date().getMonth() +1;

    return (
        <div className='mx-8 mt-4 overflow-x-scroll scroll p-2 relative'>
            <div className='fixed left-0 top-0 bottom-0 w-12 z-10 duration-200 opacity-0 hover:opacity-100 flex items-center justify-center rounded-l-lg'>
                <ArrowBackIosIcon />
            </div>
            <h1 className='text-2xl font-semibold mb-4'>{props.title}</h1>
            <div className=' flex relative'> 
                {props.data?.filter((item) => {
                    const itemMonth = new Date(item.release_date).getMonth() +1;
                    return (month<=itemMonth)
                }).map((item,index) => {
                    return (<Card key={index+1} data={item} />)
                })}
            </div>
            <div className='absolute right-0 top-0 bottom-0 w-12 z-10 duration-200 opacity-0 hover:opacity-100 flex items-center justify-center rounded-r-lg'>
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}

export default Row
