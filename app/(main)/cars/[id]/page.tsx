import React from 'react'

interface Params {
  id: string;
}

const CarPage = async ({ params }: { params: Params }) => {
    const { id } = await params;
  return (
    <div className='container mx-auto my-32'>
      CarPage: {id}
    </div>
  )
}

export default CarPage;
