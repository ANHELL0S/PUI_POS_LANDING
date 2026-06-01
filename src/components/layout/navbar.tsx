'use client'

import React from 'react'
import { Github, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Separator } from '../ui/separator'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ToggleTheme } from './toogle-theme'
import { LogoType } from './LogoType'

interface RouteProps {
	href: string
	label: string
}

interface FeatureProps {
	title: string
	description: string
}

const routeList: RouteProps[] = [
	{
		href: '#features',
		label: 'Características',
	},
	{
		href: '#prices',
		label: 'Precios',
	},
	{
		href: '#contact',
		label: 'Contacto',
	},
	{
		href: '#faq',
		label: 'FAQ',
	},
]

export const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	return (
		<header className='w-[90%] md:w-[70%] lg:w-[75%] top-0 mx-auto sticky z-40 flex justify-between items-center p-4 bg-background'>
			<LogoType />

			{/* <!-- Mobile --> */}
			<div className='flex items-center lg:hidden'>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Menu onClick={() => setIsOpen(!isOpen)} className='cursor-pointer' />
					</SheetTrigger>

					<SheetContent
						side='left'
						className='flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary'>
						<div>
							<SheetHeader className='mb-4 ml-4'>
								<SheetTitle>
									<LogoType />
								</SheetTitle>
							</SheetHeader>

							<div className='flex flex-col gap-2'>
								{routeList.map(({ href, label }) => (
									<Button
										key={href}
										onClick={() => setIsOpen(false)}
										asChild
										variant='ghost'
										className='justify-start text-base'>
										<Link href={href}>{label}</Link>
									</Button>
								))}
							</div>
						</div>

						<SheetFooter className='flex-col sm:flex-col justify-start items-start'>
							<Separator className='mb-2' />

							<ToggleTheme />
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>

			{/* <!-- Desktop --> */}
			<NavigationMenu className='hidden lg:block mx-auto'>
				<NavigationMenuList>
					<NavigationMenuItem>
						{routeList.map(({ href, label }) => (
							<NavigationMenuLink key={href} asChild>
								<Link href={href} className='text-sm px-2'>
									{label}
								</Link>
							</NavigationMenuLink>
						))}
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<div className='hidden lg:flex'>
				<ToggleTheme />
			</div>
		</header>
	)
}
