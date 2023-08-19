import { useLoaderData } from '@remix-run/react'
import React from 'react'
import UserCard from '~/components/UserCard'
import PageLayout from '~/layouts/PageLayout'

export const loader = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw response
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export interface IUser {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

const Users = () => {
  const users = useLoaderData<typeof loader>()

  return (
    <PageLayout>
      <p className='text-center text-2xl font-bold mb-12'>Usuarios</p>
      <section className='grid grid-cols-3 gap-6'>
        {users.map((usr: IUser) => (
          <UserCard key={usr.id} user={usr} />
        ))}
      </section>
    </PageLayout>
  )
}

export default Users
