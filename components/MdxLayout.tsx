import React, { JSX, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Thumbnail from './Thumbnail'

const MdxLayout = ({ children }: { children: ReactNode }): JSX.Element => {

  return (
    <div>
      <Header />
      <div className='px-5 md:px-0 max-w-4xl mx-auto prose'>
        <Thumbnail />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MdxLayout