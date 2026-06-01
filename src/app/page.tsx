import { BenefitsSection } from '@/components/layout/sections/benefits'
import { CommunitySection } from '@/components/layout/sections/community'
import { ContactSection } from '@/components/layout/sections/contact'
import { FAQSection } from '@/components/layout/sections/faq'
import { FeaturesSection } from '@/components/layout/sections/features'
import { FooterSection } from '@/components/layout/sections/footer'
import { HeroSection } from '@/components/layout/sections/hero'
import { PricingSection } from '@/components/layout/sections/pricing'
import { ServicesSection } from '@/components/layout/sections/services'
import { SponsorsSection } from '@/components/layout/sections/sponsors'
import { TeamSection } from '@/components/layout/sections/team'
import { TestimonialSection } from '@/components/layout/sections/testimonial'

export const metadata = {
	title: 'PUI POS - Sistema POS para facturación electrónica en Ecuador',
	description:
		'El POS que factura al toque, te ahorra multas y te hace ganar dinero. Prueba gratis por 14 días. Facturación electrónica SRI, inventario y ventas en un solo lugar.',
	openGraph: {
		type: 'website',
		url: 'https://softecsa.com',
		title: 'PUI POS - Sistema POS para facturación electrónica en Ecuador',
		description: 'El POS que factura al toque, te ahorra multas y te hace ganar dinero. Prueba gratis por 14 días.',
		images: [
			{
				url: 'https://softecsa.com/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'PUI POS - Sistema POS para Ecuador',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://softecsa.com',
		title: 'PUI POS - Sistema POS para facturación electrónica en Ecuador',
		description: 'El POS que factura al toque, te ahorra multas y te hace ganar dinero. Prueba gratis por 14 días.',
		images: ['https://softecsa.com/og-image.jpg'],
	},
}

export default function Home() {
	return (
		<>
			<HeroSection />
			{/*
			<BenefitsSection />
			*/}
			<FeaturesSection />
			{/* 
			<ServicesSection />
			<TestimonialSection />
			<TeamSection />
			<CommunitySection />
			*/}
			<PricingSection />
			<ContactSection />
			<FAQSection />
			<FooterSection />
		</>
	)
}
