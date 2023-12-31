import { type ReactNode } from 'react'
import Header from '~/components/Header'

interface Props {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <section className=''>
      <Header />
      {children}
    </section>
  )
}

export default RootLayout
