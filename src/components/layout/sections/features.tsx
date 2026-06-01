import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'

interface FeaturesProps {
	icon: keyof typeof Icons
	title: string
	description: string
}

const featureList: FeaturesProps[] = [
	{
		icon: 'shoppingCart',
		title: 'Punto de Venta Rápido',
		description: 'Vende en segundos. Interfaz táctil diseñada para la velocidad del comercio ecuatoriano.',
	},
	{
		icon: 'fileText',
		title: 'Facturación Electrónica SRI',
		description: 'Cumple con el SRI automáticamente. Facturas, notas de crédito y retenciones sin errores.',
	},
	{
		icon: 'package',
		title: 'Inventario en Tiempo Real',
		description: 'Controla stock, lotes y vencimientos. Nunca más te quedes sin producto estrella.',
	},
	{
		icon: 'currencyDollar',
		title: 'Cajas y Arqueos',
		description: 'Abre y cierra cajas con reportes exactos. Ideal para negocios con varios empleados.',
	},
	{
		icon: 'users',
		title: 'Clientes y Proveedores',
		description: 'Base de datos unificada. Historial de compras y créditos para cada cliente.',
	},
	{
		icon: 'shield',
		title: 'Auditoría y Control',
		description: 'Seguimiento de cada venta, usuario y movimiento. Seguridad total para tu negocio.',
	},
]

export const FeaturesSection = () => {
	return (
		<section id='features' className='container py-24 sm:py-32 text-center space-y-4'>
			<Badge variant='secondary'>Características principales</Badge>

			<h2 className='text-3xl md:text-5xl text-center font-bold tracking-tight'>
				Todo lo que necesitas para vender más en Ecuador
			</h2>

			<h3 className='md:w-1/2 mx-auto text-sm md:text-lg text-center text-muted-foreground mb-12'>
				Punto de venta, inventario, facturación electrónica y finanzas. Todo en un solo lugar. Sin complicaciones.
			</h3>

			{/* Grid de cards con efecto encajado lateral */}
			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{featureList.map(({ icon, title, description }, index) => {
					const IconComponent = Icons[icon]
					return (
						<Card>
							<CardHeader className='text-center pb-2'>
								<div className='flex justify-center mb-4'>
									<div className='bg-muted p-4 rounded-full'>
										<IconComponent className='h-7 w-7 text-primary' />
									</div>
								</div>

								<CardTitle className='text-xl font-semibold tracking-tight'>{title}</CardTitle>
							</CardHeader>

							<CardContent className='text-muted-foreground text-center text-sm leading-relaxed pt-0'>
								{description}
							</CardContent>
						</Card>
					)
				})}
			</div>
		</section>
	)
}
