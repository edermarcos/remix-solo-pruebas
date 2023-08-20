import React from 'react'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='border border-red-500 min-h-screen py-20 container mx-auto'>
      {children}
    </section>
  )
}

export default PageLayout
