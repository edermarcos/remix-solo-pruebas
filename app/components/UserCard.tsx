import { Link } from '@remix-run/react'
import { type IUser } from '~/interfaces/IUser'

interface IUserCardProps {
  user: IUser
  isBtnVisible: boolean
}

const UserCard = ({ user, isBtnVisible }: IUserCardProps) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <img
        className='rounded-t-lg'
        src='/docs/images/blog/image-1.jpg'
        alt=''
      />
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {user.name}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {user.email}
        </p>
        {isBtnVisible && (
          <Link to={`/users/${user.id}`}>
            <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Read more
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

UserCard.defaultProps = {
  isBtnVisible: true,
}

export default UserCard
