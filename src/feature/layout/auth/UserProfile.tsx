import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { DropdownMenuItemLogout } from '@/src/feature/layout/auth/LogoutButton';
import { User2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export const UserProfile = async () => {
  const session = await getAuthSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='sm' variant='outline'>
          { session?.user.name ?? ''}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <User2 className='mr-2 h-4 w-4' />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItemLogout />
      </DropdownMenuContent>

    </DropdownMenu>
  )
}
