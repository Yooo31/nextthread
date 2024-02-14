'use client';

import { signOut } from 'next-auth/react'
import { Loader, LogOut } from 'lucide-react'
import React, { useTransition } from 'react'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export const DropdownMenuItemLogout = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <DropdownMenuItem onClick={() => {
      startTransition(() => signOut());
    }}>
      { isPending ? (
          <Loader className='mr-2 h-4 w-4' />
        ) : (
          <LogOut className='mr-2 h-4 w-4' />
        )
      }
      <span>
        Logout
      </span>
    </DropdownMenuItem>
  )
}
