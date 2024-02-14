import { getAuthSession } from '@/lib/auth';
import { LoginButton } from '@/src/feature/layout/auth/LoginButton'
import { UserProfile } from '@/src/feature/layout/auth/UserProfile';
import { ThemeToggle } from '@/src/theme/ThemeToggle'
import React from 'react'

export const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className='border-b border-b-accent fixed top-0 bg-backgroun w-full'>
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">NextThread</h2>

        { session?.user ? (
          <UserProfile />
        ) : (
          <LoginButton />
        )
        }
        <ThemeToggle />
      </div>
    </header>
  )
}
