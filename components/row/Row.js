import React from 'react'
import Card from '../UI/Card'

const Row = (props) => {

    const month = new Date().getMonth() +1;

    return (
        <div className='mx-8 mt-4'>
            <h1 className='text-2xl font-semibold mb-4'>{props.title}</h1>
            <div className='w-full flex'>
                {props.data?.filter((item) => {
                    const itemMonth = new Date(item.release_date).getMonth() +1;
                    return (month<=itemMonth)
                }).map((item,index) => {
                    return (<Card key={index+1} data={item} />)
                })}
                {/* {props.data?.map((item, index) => {
                    return <Card key={index+1} data={item} />
                })} */}
            </div>
        </div>
    )
}

export default Row
