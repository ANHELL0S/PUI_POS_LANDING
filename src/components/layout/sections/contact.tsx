'use client'

import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Mail, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react'

export const ContactSection = () => {
	const openWhatsApp = () => {
		window.open('https://api.whatsapp.com/send/?phone=%2B5930989026071&text&type=phone_number&app_absent=0', '_blank')
	}

	const openMaps = () => {
		window.open('https://maps.google.com/?q=7+de+mayo+311+y+olmedo+Guaranda', '_blank')
	}

	const handleEmailClick = () => {
		window.location.href = 'mailto:info@softecsa.com'
	}

	return (
		<section id='contacto' className='container py-24 sm:py-32'>
			{/* Badge y título */}
			<div className='text-center space-y-4 mb-12'>
				<Badge variant='secondary' className='text-sm px-4 py-1'>
					Contáctanos
				</Badge>

				<h2 className='text-3xl md:text-5xl text-center font-bold tracking-tight'>
					¿Listo para hacer crecer tu negocio?
				</h2>

				<h3 className='md:w-1/2 mx-auto text-sm md:text-lg text-center text-muted-foreground'>
					Estamos aquí para ayudarte. Contáctanos por cualquier medio y te asesoraremos sin compromiso.
				</h3>
			</div>

			<div className='grid md:grid-cols-2 gap-8'>
				{/* Información de contacto */}
				<Card className='h-full shadow-none transition-all duration-300'>
					<CardContent className='p-6 space-y-6'>
						<div className='space-y-2'>
							<h3 className='text-2xl font-bold'>Información de contacto</h3>
							<p className='text-muted-foreground'>Elige el medio que prefieras y te responderemos lo antes posible.</p>
						</div>

						<div className='space-y-2'>
							{/* Dirección */}
							<div
								className='flex items-start gap-4 p-3 rounded-2xl hover:bg-muted/50 transition-all duration-500 cursor-pointer group'
								onClick={openMaps}>
								<div className='bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors'>
									<MapPin className='h-5 w-5 text-primary' />
								</div>
								<div className='flex-1'>
									<p className='font-semibold'>Dirección</p>
									<p className='text-sm text-muted-foreground'>7 de mayo 311 y Olmedo - Guaranda</p>
									<p className='text-xs text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity'>
										Abrir en Google Maps →
									</p>
								</div>
							</div>

							{/* Correo */}
							<div
								className='flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group'
								onClick={handleEmailClick}>
								<div className='bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors'>
									<Mail className='h-5 w-5 text-primary' />
								</div>
								<div className='flex-1'>
									<p className='font-semibold'>Correo electrónico</p>
									<p className='text-sm text-muted-foreground'>info@softecsa.com</p>
									<p className='text-xs text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity'>
										Enviar correo →
									</p>
								</div>
							</div>

							{/* WhatsApp */}
							<div
								className='flex items-start gap-4 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/20 transition-colors cursor-pointer group'
								onClick={openWhatsApp}>
								<div className='bg-green-100 dark:bg-green-900/30 p-3 rounded-full group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors'>
									<MessageCircle className='h-5 w-5 text-green-600 dark:text-green-500' />
								</div>
								<div className='flex-1'>
									<p className='font-semibold'>WhatsApp</p>
									<p className='text-sm text-muted-foreground'>+593 098 902 6071</p>
									<p className='text-xs text-green-600 dark:text-green-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity'>
										Escribir mensaje →
									</p>
								</div>
							</div>

							{/* Horarios */}
							<div className='flex items-start gap-4 p-3 rounded-lg'>
								<div className='bg-primary/10 p-3 rounded-full'>
									<Clock className='h-5 w-5 text-primary' />
								</div>
								<div>
									<p className='font-semibold'>Horario de atención</p>
									<div className='text-sm text-muted-foreground space-y-1 mt-1'>
										<p>Lunes a sábados</p>
										<p className='pl-4'>8:00 am - 1:00 pm</p>
										<p className='pl-4'>2:00 pm - 7:00 pm</p>
									</div>
								</div>
							</div>
						</div>

						{/* Botones de acción */}
						<div className='flex flex-col sm:flex-row gap-3 pt-4'>
							<Button
								onClick={openWhatsApp}
								className='w-full gap-2 bg-green-500 hover:bg-green-600 transition-all duration-500 cursor-pointer'>
								<MessageCircle className='h-4 w-4' />
								WhatsApp
							</Button>
							<Button
								onClick={handleEmailClick}
								variant='outline'
								className='w-full gap-2 transition-all duration-500 cursor-pointer'>
								<Mail className='h-4 w-4' />
								Enviar correo
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* Mapa embebido */}
				<Card className='h-full border-2 overflow-hidden transition-all duration-300'>
					<CardContent className='p-0 h-full'>
						<div className='relative h-full min-h-[400px]'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789012!2d-79.1234567!3d-1.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d38a1b2c3d4e5f%3A0x123456789abcdef!2s7%20de%20mayo%20311%2C%20Guaranda!5e0!3m2!1ses!2sec!4v1234567890123!5m2!1ses!2sec'
								width='100%'
								height='100%'
								style={{ border: 0, minHeight: '400px' }}
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								className='w-full h-full'
								title='Ubicación de Softecsa - Guaranda'
							/>

							{/* Overlay con botón para abrir en Maps */}
							<div className='absolute bottom-4 right-4'>
								<Button variant='secondary' size='sm' onClick={openMaps} className='shadow-lg gap-1 cursor-pointer'>
									<ExternalLink className='h-3 w-3' />
									Abrir en Google Maps
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
