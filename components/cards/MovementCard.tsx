import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

interface CardProps {
  title: string;
  content: string;
  icon: string;
  button: string;
  link: string;
  color: string;
  isOutlined?: boolean;
}

function MovementCard({ title, content, icon, button, link, color, isOutlined=false }: CardProps) {
  return (
    <div className='bg-gray-50 border shadow-sm rounded-xl p-6 md:p-10 flex flex-col gap-5 md:gap-6 hover:-translate-y-2
    hover:shadow-xl transition-all duration-300'>
        <span className='text-4xl'>{icon}</span>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-sm text-gray-600'>
          {content}
        </p>

        <Button asChild variant="ghost" style={{backgroundColor:color}} 
          className={`md:text-lg font-bold w-full p-6 text-white transition-colors hover:text-white hover:shadow-sm`}>
          <Link href={link} className="w-full">
            {button}
          </Link>
        </Button>
    </div>
  )
}

export default MovementCard