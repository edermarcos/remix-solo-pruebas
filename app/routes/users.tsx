// Este seria el layout de la ruta /users

import { Outlet } from '@remix-run/react'

import PageLayout from '~/layouts/PageLayout'

const UsersLayout = () => {
  return (
    <PageLayout>
      <p className='text-2xl text-red-700 font-bold text-center'>Users Layout</p>
      <Outlet />
    </PageLayout>
  )
}

export default UsersLayout
