import { Header } from '@/components/base/BlogHeader'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-gray-900 text-slate-900 dark:text-gray-100'>
        <Header />
        <div className='pt-24'>
            {children}
        </div>
    </div>
  )
}

export default layout