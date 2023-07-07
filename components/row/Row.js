import React, { useRef } from 'react'
import Card from '../UI/Card'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Row = (props) => {

    const month = new Date().getMonth() +1;
    const containerRef = useRef();

    const forwardHandler = () => {
        containerRef.current.scrollLeft += 300;
    }
    const prevHandler = () => {
        containerRef.current.scrollLeft -=300;
    }

    return (
        <div className='mx-8 mt-4 p-2'>
            <h1 className='text-2xl font-semibold mb-4'>{props.title}</h1>
            <div className='p-4 flex overflow-x-scroll scroll scroll-smooth' ref={containerRef}> 
                <div  className='fixed left-8 rounded-r-lg h-[300px] w-[50px] opacity-0 hover:opacity-100 z-10 flex items-center justify-center duration-200'>
                    <ArrowBackIosIcon className='-mt-5' onClick={prevHandler}/>
                </div>
                {props.data?.filter((item) => {
                    const itemMonth = new Date(item.release_date).getMonth() +1;
                    return (month<=itemMonth)
                }).map((item,index) => {
                    return (<Card key={index+1} data={item} />)
                })}
                <div className='fixed right-8 rounded-r-lg h-[300px] w-[50px] opacity-0 hover:opacity-100 z-10 flex items-center justify-center duration-200'>
                    <ArrowForwardIosIcon className='-mt-5' onClick={forwardHandler} />
                </div>
            </div>
            
        </div>
    )
}

export default Row;
