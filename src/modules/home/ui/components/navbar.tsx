'use client'

import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import { UserControl } from '@/components/user-control'
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import Link from 'next/link'

export const Navbar = () => {
	return (
		<nav className='p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent'>
			<div className='max-w-5xl mx-auto w-full flex justify-between items-center'>
				<Link href='/' className='flex items-center gap-2'>
					<Logo width={24} height={24} />
					<span className='font-semibold text-lg'>Lummie.ai</span>
				</Link>
				<SignedOut>
					<div className='flex gap-2'>
						<SignUpButton>
							<Button variant='outline' size='sm'>
								Sign up
							</Button>
						</SignUpButton>
						<SignInButton>
							<Button size='sm'>Sign in</Button>
						</SignInButton>
					</div>
				</SignedOut>
				<SignedIn>
					<UserControl showName />
				</SignedIn>
			</div>
		</nav>
	)
}
