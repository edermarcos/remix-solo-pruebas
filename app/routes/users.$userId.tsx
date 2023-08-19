import { type LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import React from 'react'
import UserCard from '~/components/UserCard'

export const loader = async ({ params }: LoaderArgs) => {
  const { userId } = params
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )
    if (!response.ok) {
      throw response
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const UserDetail = () => {
  const user = useLoaderData<typeof loader>()
  return (
    <section className='min-h-screen grid place-content-center'>
      <h3 className='text-2xl font-bold mb-4'>Usuario: {user.id}</h3>

      <div className='mb-4'>
        <UserCard user={user} isBtnVisible={false} />
      </div>

      <Link to='/users'>
        <button className='py-2 px-4 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-300 rounded'>Regresar</button>
      </Link>
    </section>
  )
}

export default UserDetail
