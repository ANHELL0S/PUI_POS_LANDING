import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

interface FAQProps {
	question: string
	answer: string
	value: string
}

const FAQList: FAQProps[] = [
	{
		question: '¿PUI_POS controla productos por lotes y fechas de caducidad?',
		answer:
			'Sí, desde la versión 0.6.2 implementamos el módulo de Tracking de Lotes. Puedes registrar productos por lote, asignar fechas de vencimiento, y el sistema te alerta automáticamente cuando un producto está próximo a caducar o tiene stock bajo.',
		value: 'item-1',
	},
	{
		question: '¿Cómo funcionan las alertas de stock bajo en PUI_POS?',
		answer:
			'El sistema monitorea constantemente tu inventario. Cuando un producto alcanza el nivel mínimo que configures, recibes una alerta en el dashboard y en el módulo de productos. Así nunca te quedas sin stock sin aviso.',
		value: 'item-2',
	},
	{
		question: '¿Puedo registrar gastos de mi negocio en PUI_POS?',
		answer:
			'Sí, el módulo de Gastos y Categorías de Gastos (también de la versión 0.6.2) te permite registrar todos tus gastos operativos, clasificarlos por categoría y llevar un control financiero completo junto con tus ventas.',
		value: 'item-3',
	},
	{
		question: '¿Cómo maneja PUI_POS el inventario cuando vendo un producto por lotes?',
		answer:
			'Al vender un producto que manejas por lotes, el sistema te permite seleccionar de qué lote quieres descontar. Automáticamente reduce el stock de ese lote específico y prioriza los lotes que caducan primero (FIFO).',
		value: 'item-4',
	},
	{
		question: '¿Qué pasa cuando un producto caduca en PUI_POS?',
		answer:
			'El sistema te alerta con anticipación sobre productos próximos a vencer. Si un lote caduca y aún tiene stock, puedes marcarlo como "no apto para la venta" y el sistema lo excluye automáticamente del inventario disponible.',
		value: 'item-5',
	},
	{
		question: '¿Cómo funciona el cierre de caja en PUI_POS?',
		answer:
			'El sistema calcula automáticamente: total de ventas en efectivo, resta el cambio entregado al cliente, y te muestra el valor real que debe haber en caja. Todo esto se registró y corrigió en la versión 0.6.1.',
		value: 'item-6',
	},
	{
		question: '¿PUI_POS ya está listo para facturación electrónica en Ecuador?',
		answer:
			'Actualmente manejamos todo el flujo de ventas, IVA y cierre de caja. La integración directa con el SRI para emitir facturas electrónicas autorizadas está en nuestro roadmap (versión unreleased). Por ahora puedes exportar los datos para otros sistemas.',
		value: 'item-7',
	},
	{
		question: '¿Qué reportes puedo obtener del dashboard?',
		answer:
			'Métricas en tiempo real: ventas del día, productos más vendidos, ingresos totales, stock bajo, productos próximos a caducar, y tendencias filtradas por fechas.',
		value: 'item-8',
	},
	{
		question: '¿PUI_POS maneja productos con IVA diferenciado (15% y 0%)?',
		answer:
			'Sí, el sistema calcula automáticamente subtotales, impuestos y totales. Puedes configurar qué productos tienen IVA 15% (mayoría) y cuáles están exentos al 0% como alimentos básicos o medicinas.',
		value: 'item-9',
	},
	{
		question: '¿Puedo buscar productos por código de barras en el POS?',
		answer:
			'Sí, desde la versión 0.5.0 implementamos búsqueda por nombre o código. Puedes usar un lector de código de barras y agregar productos al carrito en segundos.',
		value: 'item-10',
	},
]

export const FAQSection = () => {
	return (
		<section id='faq' className='container py-24 sm:py-32'>
			{/* Badge y título */}
			<div className='text-center space-y-4 mb-12'>
				<Badge variant='secondary' className='text-sm px-4 py-1'>
					FAQS
				</Badge>

				<h2 className='text-3xl md:text-5xl text-center font-bold tracking-tight'>Preguntas frecuentes</h2>
			</div>

			<Accordion type='single' collapsible className='AccordionRoot'>
				{FAQList.map(({ question, answer, value }) => (
					<AccordionItem key={value} value={value}>
						<AccordionTrigger className='text-left'>{question}</AccordionTrigger>

						<AccordionContent>{answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	)
}
