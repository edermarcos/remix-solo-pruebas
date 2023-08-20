import { Link, Outlet } from '@remix-run/react'

const SalesInvoices = () => {
  return (
    <section className='bg-red-300'>
      <p>Sales Invoices</p>
      <Link to='./aaa' className='px-6 py-3 inline-block'>
        Detail
      </Link>

      <Link to='./totals' className='px-6 py-3 inline-block'>
        Totals
      </Link>

      <section className='h-16 border border-red-600'>1</section>
      <div className='border flex w-full'>
        <section className='min-h-16 flex-grow border border-red-600'>
          2
        </section>
        <section className='min-h-16 flex-grow border border-red-600'>
          <Outlet />
        </section>
      </div>
    </section>
  )
}

export default SalesInvoices
