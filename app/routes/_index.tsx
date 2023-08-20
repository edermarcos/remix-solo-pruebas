import type { V2_MetaFunction } from '@remix-run/node'
import PageLayout from '~/layouts/PageLayout'
export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <PageLayout>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </PageLayout>
  )
}
