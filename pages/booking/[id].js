import Booking from '@/components/movieBooking/Booking';
import { getImage, getMovieDetails } from '@/lib/data'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const bookingPage = () => {

    const router = useRouter();
    const [movie, setMovie] = useState();

    useEffect(() => {
        getMovieDetails(router.query.id).then(data => setMovie(data))
    }, [])

  return (
    <div>
      {movie && <Booking data={movie} />}
    </div>
  )
}

export default bookingPage;
