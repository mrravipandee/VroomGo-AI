import React from 'react'

const CarPage = async ({ params }) => {
    const { id } = await params;
  return (
    <div className='container mx-auto my-32'>
      CarPage: {id}
    </div>
  )
}

export default CarPage;
