import { checkRole, getRole } from '@/utils/roles'
import { redirect } from 'next/navigation';
import React from 'react'

const DoctorDashboard = async() => {
  const isDoctor = await checkRole('DOCTOR');
  const role = await getRole();

  if (!isDoctor) {
    redirect(`/${role}`); // redirect to home page if neither admin nor doctor
  }

  // the contwent of this psage is not visible because currently i have Header vused twice: as a component and as a code in layout
  return (
    <div>DoctorDashboard</div>
  )
}

export default DoctorDashboard