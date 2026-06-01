'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import RotatingText from '@/components/reactbits/RotatingText'
import { SITE_CONFIG } from '@/common/constants/siteConf-const'
import DotField from '@/components/reactbits/DotField'
import { SponsorsSection } from './sponsors'

export const HeroSection = () => {
	const { theme } = useTheme()

	const rotatingTexts = ['factura al toque', 'te ahorra multas', 'te da paz', 'te quita estrés', 'te hace ganar dinero']

	return (
		<section className='container w-full relative overflow-hidden min-h-[80vh]'>
			<div style={{ width: '100%', height: '100%', position: 'absolute' }}>
				<DotField
					dotRadius={1.5}
					dotSpacing={14}
					bulgeStrength={67}
					glowRadius={160}
					sparkle={false}
					waveAmplitude={0}
					cursorRadius={500}
					cursorForce={0.1}
					bulgeOnly
					gradientFrom={theme === 'light' ? '#9f9fa9' : '#404040'}
					gradientTo='#9f9fa9'
					glowColor='#9f9fa9'
				/>
			</div>

			<div className='grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 relative z-10'>
				<div className='text-center space-y-8'>
					<Badge variant='outline'> 🇪🇨 +3 negocios</Badge>

					<div className='mx-auto text-center text-4xl md:text-6xl font-semibold'>
						<h1>
							<span className='text-muted-foreground'>El POS que </span>
							<RotatingText
								texts={rotatingTexts}
								rotationInterval={3000}
								splitBy='words'
								transition={{ type: 'keyframes', damping: 50, stiffness: 500 }}
								initial={{ y: '100%', opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: '-100%', opacity: 0 }}
								mainClassName='inline-flex text-transparent bg-gradient-to-r from-primary/80 to-primary bg-clip-text p-1 font-bold'
								elementLevelClassName='inline-block'
							/>
						</h1>
					</div>

					<p className='text-muted-foreground'>{SITE_CONFIG.DESCRIPTION}</p>

					<div className='flex flex-col items-center gap-3'>
						<div className='space-y-4 md:space-y-0 md:space-x-4'>
							<Button size='lg' className='font-bold group/arrow'>
								Probar gratis 14 días
								<ArrowRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
							</Button>

							<Button asChild size='lg' variant='outline' className='font-bold bg-background/50 backdrop-blur-sm'>
								<Link href='https://github.com/nobruf/shadcn-landing-page.git' target='_blank'>
									Ver demo
								</Link>
							</Button>
						</div>

						<div className='flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground'>
							<div className='flex items-center gap-1 bg-background/30 backdrop-blur-sm px-3 py-1 rounded-full'>
								<Icons.checkCircle className='size-4 text-green-500' />
								<span>Sin tarjeta de crédito</span>
							</div>
							<div className='flex items-center gap-1 bg-background/30 backdrop-blur-sm px-3 py-1 rounded-full'>
								<Icons.checkCircle className='size-4 text-green-500' />
								<span>Facturación electrónica</span>
							</div>
						</div>
					</div>
				</div>

				<div className='relative'>
					<Image
						width={1200}
						height={1200}
						className='w-full md:w-[1100px] mx-auto rounded-3xl flex items-center border-4'
						src={theme === 'light' ? '/hero-image-light.png' : '/hero-image-dark.png'}
						alt='POS funcionando en Ecuador'
						unoptimized
					/>
				</div>
			</div>

			<SponsorsSection />
		</section>
	)
}
