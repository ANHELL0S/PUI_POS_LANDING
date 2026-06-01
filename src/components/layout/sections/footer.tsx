import Link from 'next/link'
import { LogoMark } from '../LogoType'
import { Separator } from '@/components/ui/separator'
import { SITE_CONFIG } from '@/common/constants/siteConf-const'
import { LucideHeart } from 'lucide-react'
import { DEV_INFO } from '@/common/constants/devInfo-const'

export const FooterSection = () => {
	return (
		<footer id='footer' className='container py-16 sm:py-24'>
			<div>
				<div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-8'>
					{/* Logo y descripción */}
					<div className='col-span-full xl:col-span-2'>
						<div className='flex items-center gap-2'>
							<LogoMark />
							<p className='text-sm text-muted-foreground'>{SITE_CONFIG.SLOGAN}</p>
						</div>
						<p className='text-sm text-muted-foreground mt-4'>{SITE_CONFIG.DESCRIPTION}</p>
					</div>
				</div>

				<Separator className='my-6' />

				{/* Footer inferior */}
				<section className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm'>
					<p className='text-muted-foreground flex gap-1 text-xs'>
						&copy; {new Date().getFullYear()} {SITE_CONFIG.DOMAIN} - {SITE_CONFIG.NAME}.{' '}
						<span className='hidden sm:flex'>Todos los derechos reservados.</span>
					</p>

					<div className='text-muted-foreground flex items-center gap-1 text-xs'>
						<span className='flex gap-1 text-xs font-medium'>
							Hecho con
							<LucideHeart className='text-destructive size-4' fill='currentColor' />
							por
						</span>

						<div className='flex items-center gap-2'>
							<a
								href={DEV_INFO.SOCIAL.GITHUB}
								className='block text-xs font-medium underline transition-colors duration-200 hover:text-neutral-700'
								target='_blank'
								rel='noopener noreferrer'>
								{DEV_INFO.NAME}
							</a>
						</div>
					</div>
				</section>
			</div>
		</footer>
	)
}
