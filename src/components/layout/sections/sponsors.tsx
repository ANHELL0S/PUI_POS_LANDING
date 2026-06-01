'use client'

import { icons } from 'lucide-react'
import { Icon } from '@/components/ui/icon'
import { Badge } from '@/components/ui/badge'

interface SponsorsProps {
	icon: string
	name: string
}

const sponsors: SponsorsProps[] = [
	{ icon: 'Building2', name: 'Softecapps S.A.S.' },
	{ icon: 'Zap', name: 'ROSEMP' },
	{ icon: 'Droplets', name: 'Lubricadora Loja' },
]

export const SponsorsSection = () => {
	return (
		<section id='sponsors' className='mx-auto max-w-[75%] overflow-hidden pb-24 sm:pb-32 text-center space-y-4'>
			<Badge variant='secondary'>Confían en nosotros</Badge>
			<h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>Ya lo usan +3 negocios</h2>

			<div className='relative overflow-hidden'>
				<div className='animate-marquee flex min-w-max gap-12'>
					{[...sponsors, ...sponsors].map(({ icon, name }, index) => (
						<div
							key={`${name}-${index}`}
							className='flex items-center text-sm font-medium md:text-2xl bg-muted py-1 px-2 rounded-3xl'>
							<Icon name={icon as keyof typeof icons} size={16} className='mr-1 text-primary' />
							<span className='text-muted-foreground text-sm'>{name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
