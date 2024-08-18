import Link from 'next/link'
import React from 'react'

const TopNavbar = () => {
  return (
    <div>
          <nav className='border-b bg-background h-16 flex items-center'>
              <div className='container flex items-center justify-between'>
                  <Link href='/'>
                    <h1 className='font-bold text-3xl'>Jacob Saas</h1>
                  </Link>

            </div>
        </nav>
      
    </div>
  )
}

export default TopNavbar
