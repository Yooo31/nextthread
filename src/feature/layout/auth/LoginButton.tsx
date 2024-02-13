'use client';

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { LogIn } from 'lucide-react'
import React from 'react'

export const LoginButton = () => {
  return (
    <Button onClick={() => {
      signIn();
    }}>
      <LogIn className='mr-2 h-4 w-4' />
      <span>Login</span>
    </Button>
  )
}
