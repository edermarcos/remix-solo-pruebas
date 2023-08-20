import { Link, Outlet } from '@remix-run/react'

const Sales = (params: any) => {
  console.log(params)
  
  return (
    <section className='bg-blue-400 min-h-screen container mx-auto py-16'>
      <h2 className='text-3xl font-bold mb-4'>Sales</h2>

      <section className='mb-4'>
        <ul className='flex gap-4 text-lg'>
          <li>
            <Link to='.' className='px-6 py-3 inline-block'>
              Incio
            </Link>
          </li>
          <li>
            <Link
              to='/sales/invoices'
              className='px-6 py-3 inline-block'
            >
              Invoices
            </Link>
          </li>
        </ul>
        <hr />
      </section>

      <section className=''>
        <Outlet />
      </section>
    </section>
  )
}

export default Sales
