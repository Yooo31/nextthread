'use client';

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { Loader, LogIn } from 'lucide-react'
import React, { useTransition } from 'react'

export const LoginButton = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button onClick={() => {
      startTransition(() => signIn());
    }}>
      { isPending ? (
          <Loader className='mr-2 h-4 w-4' />
        ) : (
          <LogIn className='mr-2 h-4 w-4' />
        )
      }
      <span>
        Login
      </span>
    </Button>
  )
}
