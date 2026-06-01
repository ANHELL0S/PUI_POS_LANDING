'use client'

import Link from 'next/link'
import { Icons } from '@/components/icons'
import { ROUTE_PATH } from '@/common/constants/routes-const'
import { SITE_CONFIG } from '@/common/constants/siteConf-const'

interface LogoTextProps {
	title?: string
	subtitle?: string
}

/**
 * Logo con icono + texto (original)
 */
export const LogoType = ({ title = SITE_CONFIG.NAME, subtitle = 'Sistema Punto de Venta' }: LogoTextProps) => {
	return (
		<Link href={ROUTE_PATH.HOME} className='group flex items-center gap-3'>
			<LogoMark />

			<div className='flex flex-col text-start'>
				<span className='text-primary text-xl font-bold tracking-tight'>{title}</span>
				<span className='text-muted-foreground line-clamp-1 text-xs font-medium break-words'>{subtitle}</span>
			</div>
		</Link>
	)
}

/**
 * Solo el texto del logo
 */
export const LogoText = ({ title = SITE_CONFIG.NAME, subtitle = 'Sistema Punto de Venta' }: LogoTextProps) => {
	return (
		<Link href={ROUTE_PATH.HOME} className='group flex flex-col'>
			<span className='text-primary text-xl font-bold tracking-tight'>{title}</span>
			<span className='text-muted-foreground text-xs font-medium'>{subtitle}</span>
		</Link>
	)
}

/**
 * Solo el ícono del logo
 */
export const LogoMark = () => {
	return (
		<div className='bg-primary flex h-8 w-8 items-center justify-center rounded-full'>
			<Icons.background className='text-background' />
		</div>
	)
}
