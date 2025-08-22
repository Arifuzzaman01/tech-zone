"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

export default function LoginButton() {
  return (
    <div><button className='btn btn-primary' onClick={()=> signIn()}>LogIn</button></div>
  )
}
