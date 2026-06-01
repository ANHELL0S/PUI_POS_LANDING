'use client'

import { useState } from 'react'
import { Sparkles, CheckCircle2, ShoppingCart, MessageCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PlanProps {
	title: string
	priceMonthly: number
	priceYearly: number
	description: string
	buttonText: string
	buttonTextAnnual: string
	features: string[]
	icon: React.ElementType
}

const plan: PlanProps = {
	title: 'Profesional',
	priceMonthly: 30,
	priceYearly: 300,
	description: 'Todo lo que necesitas para gestionar tu negocio en Ecuador',
	buttonText: 'Quiero el plan mensual',
	buttonTextAnnual: 'Quiero el plan anual',
	features: [
		'Punto de venta (POS) completo',
		'Control de inventario y stock',
		'Gestión de clientes',
		'Cierre de caja y arqueos',
		'Reportes y dashboard',
		'Múltiples usuarios con roles',
		'Soporte técnico incluido',
		'Actualizaciones gratuitas',
	],
	icon: ShoppingCart,
}

export const PricingSection = () => {
	const [isAnnual, setIsAnnual] = useState(true)

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('es-EC', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(price)
	}

	const yearlySavings = plan.priceMonthly * 12 - plan.priceYearly
	const monthlyEquivalent = plan.priceYearly / 12

	const handleMoreInfo = () => {
		const message = encodeURIComponent(`Hola, me gustaría recibir más información sobre PUI POS. ¿Podrían ayudarme?`)
		window.open(
			`https://api.whatsapp.com/send/?phone=%2B5930989026071&text=${message}&type=phone_number&app_absent=0`,
			'_blank'
		)
	}

	return (
		<section id='prices' className='container py-24 sm:py-32'>
			{/* Badge y título */}
			<div className='text-center space-y-4 mb-12'>
				<Badge variant='secondary' className='text-sm px-4 py-1'>
					Precios transparentes
				</Badge>

				<h2 className='text-3xl md:text-5xl text-center font-bold tracking-tight'>Un solo plan, todo incluido</h2>

				<p className='md:w-1/2 mx-auto text-sm md:text-lg text-center text-muted-foreground'>
					Sin sorpresas ni módulos adicionales. Todo lo que necesitas para tu negocio en un solo lugar.
				</p>
			</div>

			{/* Toggle mensual vs anual */}
			<div className='flex flex-col items-center justify-center mb-12 gap-4'>
				<div className='bg-muted p-1 rounded-full inline-flex gap-1'>
					<button
						onClick={() => setIsAnnual(false)}
						className={cn(
							'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
							!isAnnual
								? 'bg-primary text-primary-foreground shadow-lg scale-105'
								: 'text-muted-foreground hover:text-foreground hover:bg-muted'
						)}>
						Mensual
					</button>

					<button
						onClick={() => setIsAnnual(true)}
						className={cn(
							'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
							isAnnual
								? 'bg-primary text-primary-foreground shadow-lg scale-105'
								: 'text-muted-foreground hover:text-foreground hover:bg-muted'
						)}>
						Anual
					</button>
				</div>

				{/* Indicador de ahorro anual */}
				{isAnnual && (
					<div className='flex items-center gap-2 text-sm text-green-700 bg-green-100 dark:bg-green-950/30 px-4 py-2 rounded-full'>
						<Sparkles className='h-4 w-4' />
						<span>¡Ahorras ${yearlySavings} al año con el plan anual!</span>
					</div>
				)}
			</div>

			{/* Card del plan */}
			<div className='flex justify-center'>
				<Card className='relative overflow-hidden transition-all duration-500 rounded-3xl max-w-2xl w-full'>
					<CardHeader className='text-center pb-8 pt-12'>
						<CardTitle className='text-3xl font-bold'>{plan.title}</CardTitle>
						<CardDescription className='text-muted-foreground mt-2 text-base'>{plan.description}</CardDescription>

						{/* Precio principal */}
						<div className='mt-8'>
							<div className='flex items-baseline justify-center gap-1'>
								<span className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>
									{formatPrice(isAnnual ? plan.priceYearly : plan.priceMonthly)}
								</span>
								<span className='text-muted-foreground font-medium text-lg'>{isAnnual ? '/año' : '/mes'}</span>
							</div>

							{/* Equivalente mensual para plan anual */}
							{isAnnual && (
								<p className='text-sm text-muted-foreground mt-2'>
									≈ {formatPrice(monthlyEquivalent)}/mes (equivalente mensual)
								</p>
							)}

							{/* Precio mensual vs anual en modo mensual */}
							{!isAnnual && (
								<p className='text-sm text-muted-foreground mt-2'>
									o {formatPrice(plan.priceYearly)}/año (ahorra ${yearlySavings})
								</p>
							)}
						</div>

						{/* Badge de facturación SRI */}
						<div className='mt-6'>
							<Badge
								variant='default'
								className='bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1'>
								Facturación electrónica SRI incluida
							</Badge>
						</div>
					</CardHeader>

					<CardContent>
						<div className='space-y-3'>
							<p className='text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider text-center'>
								Todo lo que incluye:
							</p>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
								{plan.features.map((feature, idx) => (
									<div key={idx} className='flex items-center gap-2 text-sm group'>
										<CheckCircle2 className='h-4 w-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform' />
										<span className='text-muted-foreground group-hover:text-foreground transition-colors'>
											{feature.replace('', '')}
										</span>
									</div>
								))}
							</div>
						</div>
					</CardContent>

					<CardFooter className='pt-6 pb-8 flex flex-col gap-4'>
						{/* Botón secundario de más información */}
						<Button onClick={handleMoreInfo} variant='default' className='w-full group'>
							<span className='flex items-center gap-2'>Quiero más información</span>
						</Button>

						<div className='flex justify-center gap-4 text-xs text-muted-foreground mt-2'>
							<span>✓ Sin permanencia</span>
							<span>✓ Soporte 24/7</span>
						</div>
					</CardFooter>
				</Card>
			</div>

			{/* Call to action adicional */}
			<div className='mt-8 text-center'>
				<p className='text-sm text-muted-foreground'>
					¿Tienes preguntas?
					<button onClick={handleMoreInfo} className='text-primary hover:underline ml-1 font-medium'>
						Escríbenos por WhatsApp
					</button>
				</p>
			</div>
		</section>
	)
}
