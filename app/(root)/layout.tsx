import Footer from '@/components/base/Footer'
import { Header } from '@/components/base/BlogHeader'
import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default layout