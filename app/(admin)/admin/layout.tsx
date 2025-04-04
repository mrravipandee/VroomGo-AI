import { getAdminData } from '@/actions/admin';
import { notFound } from 'next/navigation';
import React from 'react'
import Headers from '@/components/Headers';

const AdminPage = async () => {

  const admin = await getAdminData();

  if(!admin.authorised) {
    return notFound();
  }

  return (
    <div className='h-full'>
      <Headers isAdminPage={true} />

    </div>
  )
}

export default AdminPage;
