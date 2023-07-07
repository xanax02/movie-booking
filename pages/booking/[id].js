import { getMovieDetails } from '@/lib/data'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const bookingPage = () => {

    const router = useRouter();
    console.log(router.query.id)

    useEffect(() => {
        getMovieDetails(router.query.id).then(data => console.log(data));
    }, [])

  return (
    <div>
      <h1>asdfasdfas</h1>
    </div>
  )
}

export default bookingPage;
