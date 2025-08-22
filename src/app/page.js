import React from 'react'
import ProductPages from './components/ProductPages'
import Hero from './components/Hero'
// import AuthButtons from './components/AuthButtons'
import UserInfo from '@/components/UserInfo'

export default function page() {
  return (
    
    <div>
      {/* <AuthButtons/> */}
      <Hero/>
      <UserInfo/>
      <ProductPages/>
    </div>
  )
}
